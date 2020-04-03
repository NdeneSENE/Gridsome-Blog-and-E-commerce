// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Ndéné SENE",
  siteDescription:
    "Blog de Mr SENE qui vous donne les ticks and tricks pour le developement",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENFULL_SPACE, // required
        accessToken: process.env.CONTENFULL_API_KEY, // required
        host: "cdn.contentful.com",
        environment: "master",
        typeName: "Contentful"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        route: "/posts/:slug",
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: "Tag",
            route: "/tags/:id",
            create: true
          }
        }
      }
    }
  ]
};
