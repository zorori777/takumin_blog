import React from 'react';
import { Options } from '@contentful/rich-text-react-renderer';

import { BLOCKS, MARKS, Text } from '@contentful/rich-text-types';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Image, Flex } from 'rebass';

export const contentfulRenderOptions: Options = {
  renderNode: {
    [BLOCKS.QUOTE]: (_node, children) => {
      return <Quote>{children}</Quote>;
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.length === 1 &&
        (node.content[0] as Text).marks.find((x) => x.type === 'code')
      ) {
        return <div>{children}</div>;
      }
      return <p>{children}</p>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <Flex justifyContent="center">
          <Image
            sx={{
              width: ['100%', '50%'],
              borderRadius: 8,
            }}
            src={node.data.target.file.url}
          />
        </Flex>
      );
    },
  },
  renderMark: {
    [MARKS.CODE]: (text) => codeGen(text),
  },
  renderText: (text) => {
    return text
      .split('\n')
      .reduce(
        (children: React.ReactNode[], textSegment: React.ReactNode, index) => {
          return [
            ...children,
            index > 0 ? <br key={index} /> : '',
            textSegment,
          ];
        },
        [],
      );
  },
};

const Quote = styled.pre`
  font-style: italic;
  padding: 16px;
  border-left: 4px solid #f5f5f5;
`;

function codeGen(text: React.ReactNode) {
  (text as string[]).shift();
  const language = (text as string[]).shift()!;
  (text as string[]).shift();

  const value = (text as string[]).reduce((acc, current) => {
    //@ts-ignore
    if (typeof current !== 'string' && current.type === 'br') {
      return acc + '\n';
    }
    return acc + current;
  }, '');

  return (
    <SyntaxHighlighter language={language as any} style={tomorrow}>
      {value}
    </SyntaxHighlighter>
  );
}
