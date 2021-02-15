const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 使うテンプレのパス
  const postTemplate = path.resolve(`./src/templates/post.tsx`);
  const postResult = await graphql(
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

  if (postResult.errors) {
    throw postResult.errors;
  }

  const posts = postResult.data.allContentfulPost.edges;

  posts.forEach((post) => {
    createPage({
      path: `post/${post.node.slug}`,
      component: postTemplate,
      context: {
        slug: post.node.slug,
      },
    });
  });
  const tagTemplate = path.resolve(`./src/templates/tags.tsx`);
  const tagResult = await graphql(
    `
      {
        allContentfulTag {
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

  if (tagResult.errors) {
    throw tagResult.errors;
  }

  const tags = tagResult.data.allContentfulTag.edges;

  tags.forEach((tag) => {
    createPage({
      path: `tags/${tag.node.slug}`,
      component: tagTemplate,
      context: {
        id: tag.node.id,
        slug: tag.node.slug,
      },
    });
  });
};
