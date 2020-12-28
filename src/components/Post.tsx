import React, { ReactNode } from 'react';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Card } from './Card';
import { ContentfulPost } from '../../types/graphql-types';
import Img, { FluidObject } from 'gatsby-image';
import dayjs, { dateFormat } from '../utils/dayJs';
import theme from '../theme';
import { Link } from 'gatsby';

type PostProps = ContentfulPost;

export const Post = ({ title, thumbnail, publishedAt, slug }: PostProps) => (
  <Link to={`/post/${slug}`}>
    <Card p={0} width="100%">
      {thumbnail && (
        <Box height={200}>
          <Img
            fluid={thumbnail.fluid as FluidObject}
            alt={title!}
            style={{ height: '100%', borderRadius: '6px 6px 0 0' }}
          />
        </Box>
      )}
      <Flex flexDirection="column" p={3}>
        <Box mb={2}>
          <Text fontSize={1} color={theme.colors.text}>
            {dayjs(publishedAt).format(dateFormat)}
          </Text>
        </Box>
        <EllipsisHeading color="text">{title}</EllipsisHeading>
      </Flex>
    </Card>
  </Link>
);

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
