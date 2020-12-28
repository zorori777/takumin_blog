import React from 'react';
import Headroom from 'react-headroom';
import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';

import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Header = () => {
  return (
    <StyledHeadroom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        px={3}
      >
        <HomeLink />
      </Flex>
    </StyledHeadroom>
  );
};

const HomeLink = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sit-dog.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Link to={'/'}>
      <Flex justifyContent="center">
        <Img
          fluid={data.placeholderImage.childImageSharp!.fluid}
          style={{
            width: '60px',
          }}
        />
      </Flex>
    </Link>
  );
};

const StyledHeadroom = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${({ theme }) => theme.colors.background};
  }

  position: absolute;
  width: 100%;
`;

export default Header;
