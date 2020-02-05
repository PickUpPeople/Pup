const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query ContentPages {
      allPrismicItem {
        edges {
          node {
            uid
            data {
              type
            }
          }
        }
      }
    }
  `);

  data.allPrismicItem.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.data.type}/${node.uid}`,
      component: path.resolve("./src/templates/content-template.js"),
      context: {
        uid: node.uid
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null()
          }
        ]
      }
    });
  }

  // If production JavaScript and CSS build
  if (stage === "build-javascript") {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false
    });
  }
};
