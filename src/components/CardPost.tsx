import React from 'react';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Card } from './Card';
import { ContentfulPost } from '../../types/graphql-types';
import Img, { FluidObject } from 'gatsby-image';
import dayjs, { dateFormat } from '../utils/dayJs';
import theme from '../theme';
import { Link, navigate } from 'gatsby';
import Tag from '../components/Tag';

type Props = any;

export const CardPost = ({
  title,
  thumbnail,
  publishedAt,
  slug,
  tag,
}: Props) => (
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
          <DateTimeText fontSize={1} color={theme.colors.text}>
            {dayjs(publishedAt).format(dateFormat)}
          </DateTimeText>
        </Box>
        <Box mb={1}>
          <EllipsisHeading color="text">{title}</EllipsisHeading>
        </Box>
        {tag ? (
          <Flex>
            <Box></Box>
            {tag.map((_tag: any) => {
              console.debug(_tag);
              return (
                <TagContent key={_tag.slug}>
                  <Tag path={`/tags/${_tag.slug}`}>#{_tag.title}</Tag>
                </TagContent>
              );
            })}
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
    </Card>
  </Link>
);

export default CardPost;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-decoration: none;
`;

const DateTimeText = styled(Text)`
  text-decoration: none;
`;

const TagContent = styled(Box)`
  margin-right: 12px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
