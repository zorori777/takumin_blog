import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import usePostQuery from '../queries/usePostQuery';
import CardPost from '../components/CardPost';

const Post = () => {
  const data = usePostQuery();

  return (
    <Section.Container id="writing">
      <Section.Header name="Post" icon="✍️" label="Post" />
      <CardContainer minWidth="300px">
        <Fade
          direction="down"
          triggerOnce
          cascade
          damping={0.5}
          style={{ width: '100%' }}
        >
          {data.allContentfulPost.edges.map((p) => (
            <CardPost {...p.node} key={p.node.title} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

export default Post;
