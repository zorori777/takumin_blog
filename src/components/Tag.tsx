import React from 'react';
import { Box, BoxProps } from 'rebass';
import theme from '../theme';
import { Link } from 'gatsby';

type Props = {
  path: string;
} & BoxProps;

const defaultProps = {
  color: 'white',
  bg: 'primary',
};

const Tag: React.FC<Props> = (props) => {
  const { children, onClick, path } = { ...defaultProps, ...props };
  return (
    <Link to={path}>
      <Box
        onClick={onClick}
        sx={{
          display: 'inline-block',
          color: theme.colors.background,
          bg: theme.colors.secondary,
          px: 2,
          py: 1,
          borderRadius: 9999,
          minWidth: 80,
          textAlign: 'center',
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

export default Tag;
