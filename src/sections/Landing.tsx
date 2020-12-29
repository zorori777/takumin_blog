import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/ScrollIcon';
import { useSiteQuery } from '../queries/useSiteQuery';
import { IconName } from '@fortawesome/fontawesome-svg-core';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => {
  const { socialLink } = useSiteQuery();

  return (
    <Section.Container id="home">
      <Heading
        as="h2"
        color="primary"
        fontSize={[5, 6]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
        <TextLoop interval={5000}>
          {['こんにちは', 'わたなべたくみです。', '以後お見知りおきを。'].map(
            (text) => (
              <Text width={[300, 500]} key={text}>
                {text}
              </Text>
            ),
          )}
        </TextLoop>
      </Heading>

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        {Object.values(socialLink!).map((sl) => (
          <Box mx={3} fontSize={[5, 6, 6]} key={sl?.name}>
            <SocialLink
              name={sl!.name!}
              icon={sl!.fontAwesomeIcon as IconName}
              url={sl!.url!}
            />
          </Box>
        ))}
      </Flex>

      <MouseIcon onClick={() => {}} />
    </Section.Container>
  );
};

export default LandingPage;
