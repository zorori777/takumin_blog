import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const useBlogPostQuery = (): Project[] => {
  const { contentfulAbout } = useStaticQuery<QueryResponse>(graphql`
    query ProjectsQuery {
      contentfulBlogPost {
        projects {
          id
          name
          description
          homepage: projectUrl
          repository: repositoryUrl
          publishedDate(formatString: "YYYY")
          type
          logo {
            title
            image: resize(width: 200, quality: 100) {
              src
            }
          }
        }
      }
    }
  `);

  return contentfulAbout.projects.map(({ logo, ...rest }) => ({
    ...rest,
    logo: {
      alt: logo.title,
      src: logo.image.src,
    },
  }));
};
