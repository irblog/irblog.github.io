const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPassthroughCopy("input/CNAME")
  return {
    dir: {
      input: "input",
      output: "docs"
    },
    dataTemplateEngine: "mustache",
    htmlTemplateEngine: "mustache",
    markdownTemplateEngine: "mustache",
    templateFormats: ["html", "md", "mustache", "njk", "svg", "png", "css"]
  }
}