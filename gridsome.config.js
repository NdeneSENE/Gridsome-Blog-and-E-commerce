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
        space: "0deprxwk1hie", // required
        accessToken: "nkeBBp21O4Rb7NiYUFrWoLQSNAGDzQnlWYB46DqSwQQ", // required
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
