import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import usePostQuery from '../queries/usePostQuery';
import { contentfulRenderOptions } from '../utils/contentfulRenderOption';
import { Box, Flex, Image, Text, Heading } from 'rebass/styled-components';
import styled from 'styled-components';
import { padding } from 'polished';

const Post = () => {
  const data = usePostQuery();

  return (
    <Box>
      {data.allContentfulPost.edges.map((item) => {
        return (
          <Flex justifyContent={'center'} flexDirection={'column'}>
            <Header
              justifyContent={'center'}
              flexDirection={'column'}
              alignItems="center"
            >
              <Heading fontSize={[3, 4, 5]} color="primary">
                {item.node.title}
              </Heading>
              <Text>{item.node.publishedAt}</Text>
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
  );
};

export default Post;

const Content = styled(Box)`
  padding: 20px;
  border-radius: 12px;
  background: #fff;
`;

const Header = styled(Flex)``;
