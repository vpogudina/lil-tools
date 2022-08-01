import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { default_image } from '../../assets/images/index';
import { FlexVerticalCenterContainer } from '../../theme/Helpers';

const SVGComponent = function({ src, alt }) {
  const svgConfig = {
    role: 'img',
    width: '100%',
    height: '100%',
    'aria-label': alt !== '' ? alt : undefined, 
    'aria-hidden': alt === ''
  };
  const SVG = src;
  return <SVG {...svgConfig} />
};

const ImgComponent = styled.img``;

const SIZE_TYPE = {
  relative: {w: '100%', h:'100%'},
  nano: {w: '0.75rem', h: '0.75rem'},
  micro: { w: '0.875rem', h: '0.875rem' },
  mini: { w: '0.9375rem', h: '0.9375rem' },
  small: { w: '1.125rem', h: '1.125rem' },
  medium: { w: '1.3125rem', h: '1.3125rem' },
  large: { w: '1.5rem', h: '1.5rem' },
  extra_large: { w: '1.75rem', h: '1.75rem' },
  original: { w: '124px', h: '108px' }
};

Icon.propTypes = {
  type: PT.oneOf(['relative', 'nano', 'micro', 'mini', 'small', 'medium', 'large', 'extra_large', 'original', 'landing']),
  withMargin: PT.bool,
  margin: PT.shape({ top: PT.string, bottom: PT.string, left: PT.string, right: PT.string }),
  src: PT.oneOfType([PT.string]),
  alt: PT.string
};

Icon.defaultProps = {
  type: 'small',
  src: default_image,
  alt: ''
};

const IconWrapper = styled(FlexVerticalCenterContainer)`
  ${({ size }) => `width: ${size.w}; height: ${size.h};`};
  ${({ type }) =>
    type === 'original' &&
    `
    margin-top:3.123rem;
    margin-bottom: 5rem;
  `}
  ${({ withMargin, margin }) =>
    withMargin && (
      margin.top && `margin-top: ${margin.top}`,
      margin.bottom && `margin-bottom: ${margin.bottom}`,
      margin.left && `margin-left: ${margin.left}`,
      margin.right && `margin-right: ${margin.right}`
    )
  }
`;

function Icon({ type, src, className, withMargin, margin, ...rest }) {
  const IconComponent = typeof src === 'string' ? ImgComponent : SVGComponent;
  return (
    <IconWrapper type={type} size={SIZE_TYPE[type]} withMargin={withMargin} margin={margin} className={className}>
      <IconComponent src={src} {...rest} />
    </IconWrapper>
  );
}

export { Icon, IconWrapper };
