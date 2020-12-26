import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import { useMediumQuery } from '../queries/useMediumQuery';
import { Post } from '../components/Post';

const Writing = () => {
  const { posts } = useMediumQuery();

  return (
    <Section.Container id="writing">
      <Section.Header name="Writing" icon="✍️" label="writing" />
      <CardContainer minWidth="300px">
        <Fade direction="down" triggerOnce cascade damping={0.5}>
          {posts.map((p) => (
            <Post {...p} key={p.url} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

export default Writing;
