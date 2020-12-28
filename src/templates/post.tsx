import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { contentfulRenderOptions } from '../utils/contentfulRenderOption';
import { Box, Flex, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import dayjs, { dateTimeFormat } from '../utils/dayJs';
import theme from '../theme';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { ContentfulPostConnection } from '../../types/graphql-types';

type Props = {
  data: {
    allContentfulPost: ContentfulPostConnection;
  };
};

const Post = ({ data }: Props) => {
  return (
    <Layout>
      <Box>
        {data.allContentfulPost.edges.map((item) => {
          return (
            <Flex justifyContent={'center'} flexDirection={'column'}>
              <Header
                justifyContent={'center'}
                flexDirection={'column'}
                alignItems="center"
                m={2}
              >
                <Flex fontSize={[3, 4, 5]} color="primary">
                  {item.node.title}
                </Flex>
                <Text color={theme.colors.gray}>
                  {dayjs(item.node.publishedAt).format(dateTimeFormat)}
                </Text>
              </Header>
              <Flex justifyContent={'center'}>
                <Content width={[1, 8 / 10]}>
                  <div>
                    {renderRichText(item.node.content, contentfulRenderOptions)}
                  </div>
                </Content>
              </Flex>
            </Flex>
          );
        })}
      </Box>
    </Layout>
  );
};

export default Post;

const Content = styled(Box)`
  padding: 20px;
  border-radius: 12px;
  background: #fff;
`;

const Header = styled(Flex)``;

export const query = graphql`
  query($slug: String!) {
    allContentfulPost(filter: { slug: { eq: $slug } }) {
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
`;
