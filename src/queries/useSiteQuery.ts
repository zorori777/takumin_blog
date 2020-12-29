import { graphql, useStaticQuery } from 'gatsby';
import { SiteQueryQuery, SiteSiteMetadata } from '../../types/graphql-types';

export const useSiteQuery = () => {
  const { site } = useStaticQuery<SiteQueryQuery>(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          deterministic
          socialLink {
            github {
              name
              url
              fontAwesomeIcon
            }
            twitter {
              name
              url
              fontAwesomeIcon
            }
          }
        }
      }
    }
  `);

  return { ...(site!.siteMetadata as SiteSiteMetadata) };
};
