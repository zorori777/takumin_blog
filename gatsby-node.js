const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 使うテンプレのパス
  const postTemplate = path.resolve(`./src/templates/post.tsx`);
  const result = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              slug
              id
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allContentfulPost.edges;

  posts.forEach((post) => {
    createPage({
      path: `post/${post.node.slug}`,
      component: postTemplate,
      context: {
        slug: post.node.slug,
      },
    });
  });
};
