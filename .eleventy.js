import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import markdownIt from 'markdown-it'

import markdownItAttrs from 'markdown-it-attrs'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default function (eleventyConfig) {
  // Add passthrough copy for assets
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('src')

  let options = {
    html: true,
    linkify: true,
    typographer: true
  }

  eleventyConfig.setLibrary('md', markdownIt(options))

  eleventyConfig.amendLibrary('md', mdLib => mdLib.use(markdownItAttrs))

  // Add the Vite plugin with simplified configuration
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: '.11ty-vite', // Temporary folder for processing

    // Basic vite config - we'll keep it minimal to avoid conflicts
    viteOptions: {
      build: {
        // Don't minify during development for faster builds
        minify: process.env.ELEVENTY_ENV === 'production'
      },
      resolve: {
        // Make sure node_modules are properly handled
        extensions: ['.js', '.mjs', '.jsx', '.json', '.css']
      }
    }
  })

  // Add collections for markdown files
  eleventyConfig.addCollection('projects', function (collectionApi) {
    return collectionApi.getFilteredByGlob('./projects/*.md')
  })

  return {
    dir: {
      input: '.',
      output: 'dist', // Changed from "_site" to "dist"
      includes: '_includes',
      layouts: '_layouts' // Explicitly include the layouts directory
    }
  }
}
