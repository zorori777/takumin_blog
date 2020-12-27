import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Options } from '@contentful/rich-text-react-renderer';

import usePostQuery from '../queries/usePostQuery';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import styled from 'styled-components';

const Post = () => {
  const data = usePostQuery();
  console.debug(data);

  return (
    <div>
      {data.allContentfulPost.edges.map((item) => {
        return (
          <div>
            test
            <div>{renderRichText(item.node.content, options)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;

const options: Options = {
  renderNode: {
    [BLOCKS.QUOTE]: (node, children) => {
      return <Quote>{children}</Quote>;
    },
  },
};

const Quote = styled.pre`
  background: #f5f5f5;
  color: #777777;
  font-style: italic;
  padding: 16px;
  border-left: 4px solid #9dd4ff;
`;
