const about = require('./about.json');
const path = require(`path`);

require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID, DETERMINISTIC } = process.env;

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-styled-components',
  'gatsby-transformer-remark',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `takumin Portfolio`,
      short_name: 'takumin',
      start_url: '/',
      background_color: about.colors.background,
      theme_color: about.colors.primary,
      display: 'minimal-ui',
      icon: 'src/images/sit-dog.png',
    },
  },
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    },
  },
  {
    resolve: 'gatsby-source-medium',
    options: {
      username: about.mediumUser || '@medium',
    },
  },
  {
    resolve: 'gatsby-plugin-graphql-codegen',
    options: {
      fileName: `types/graphql-types.d.ts`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  plugins,
  siteMetadata: {
    isMediumUserDefined: !!about.mediumUser,
    deterministic: !!DETERMINISTIC,
    socialLink: {
      github: {
        name: 'Github',
        url: 'https://github.com/zorori777',
        fontAwesomeIcon: 'github',
      },
      twitter: {
        name: 'Twitter',
        url: 'https://twitter.com/takumi_work',
        fontAwesomeIcon: 'twitter',
      },
    },
  },
};
