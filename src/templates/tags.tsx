import React from 'react';
import { graphql } from 'gatsby';
import { ContentfulTag } from '../../types/graphql-types';
import CardPost from '../components/CardPost';
import { Heading, Flex, Box } from 'rebass/styled-components';

import Layout from '../components/Layout';
import theme from '../theme';

type Props = {
  data: {
    contentfulTag: ContentfulTag;
  };
};

const Tags = ({ data }: Props) => {
  const posts = data.contentfulTag.post;

  return (
    <Layout>
      <Flex mb={2} justifyContent={'center'}>
        <Heading color={theme.colors.primary} fontSize={5} fontWeight={'bold'}>
          #{data.contentfulTag.title}
        </Heading>
      </Flex>

      {posts ? (
        <Flex flexDirection={['column', 'row']}>
          {posts!.map((post) => {
            return (
              <Box width={['initial', '350px']} m={24}>
                <CardPost
                  tag={post!.tag}
                  slug={post!.slug}
                  title={post?.title}
                  publishedAt={post?.publishedAt}
                  thumbnail={post?.thumbnail}
                  key={post?.title}
                />
              </Box>
            );
          })}
        </Flex>
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      post {
        slug
        title
        thumbnail {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
          title
        }
        publishedAt
        tag {
          id
          title
          slug
        }
      }
    }
  }
`;
