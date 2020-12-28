import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentfulPostConnection } from '../../types/graphql-types';

type ContentfulPostType = {
  allContentfulPost: ContentfulPostConnection;
};

export const usePostQuery = () => {
  const data = useStaticQuery<ContentfulPostType>(graphql`
    {
      allContentfulPost {
        edges {
          node {
            content {
              raw
            }
            title
            publishedAt
            slug
            thumbnail {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `);

  return data;
};

export default usePostQuery;
