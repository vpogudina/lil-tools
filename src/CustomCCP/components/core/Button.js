import React, { PureComponent } from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { Icon, Loader, IconWrapper } from './index';

const globalStyles = ({ button, fontsWeight }) => `
  white-space: nowrap;
  border-radius: 2px;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 260px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10);
  transition: background-color 0.12s ease;
  font-weight: ${fontsWeight.medium};
  cursor: pointer;
  
  &:disabled {
    cursor: not-allowed; 
    opacity: 0.4;
    outline: none;
  }

`;

const normalStyles = ({ button }) => `
  font-size: ${button.normal.fontSize};
  height: ${button.normal.height}
`;

const smallStyles = ({ button }) => `
  font-size: ${button.small.fontSize};
  height: ${button.small.height}
`;

const defaultStyles = ({ button, spacing, breakpoints, palette }, collapseBreakpoint) => `
  background: ${button.default.bg};
  color: ${button.default.color};
  padding: ${button.padding};
  
  > ${IconWrapper}, .loader {
    margin-right: ${spacing.regular};
    position: relative;

    @media screen and (max-width: ${breakpoints[collapseBreakpoint] || 0}) {
      margin-right: 0;
    };
  }

  ${IconWrapper} {
    margin-top: 1px;
  }

  &:focus {
    outline: 3px auto ${palette.mediumGray};
  }

  &:disabled:focus {
    outline-width: 0;
  }
`;

const applyButtonStyles = ({ button, globals }, type) => `
  background: ${button[type].bg};
  color: ${button[type].color};
  box-shadow: ${button[type].boxShadow};

  &:not(:disabled):hover {
    background: ${button[type].bgHover};
  }
`;

const darkerFocusStyles = ({ palette }) => `
  &:focus {
    outline: 3px auto ${palette.secondaryBlack};
  }
`
export const StyledButton = styled.button`
  ${({ theme }) => globalStyles(theme)};
  ${({ theme, collapseBreakpoint }) => defaultStyles(theme, collapseBreakpoint)};
  ${props => props.styledType !== 'default' && applyButtonStyles(props.theme, props.styledType)};
  ${props => (props.small ? smallStyles(props.theme) : normalStyles(props.theme))};
  ${props => (props.useDarkerFocus && darkerFocusStyles(props.theme))};
  ${props =>
    props.darkMode
      ? `&:not(:disabled):focus {
    outline-color: ${props.theme.palette.white}
  }`
      : ''}
`;
StyledButton.displayName = 'StyledButton';

const StyledLink = styled.a`
  ${({ theme }) => theme.typography.base};
  ${props => props.type && applyButtonStyles(props.theme, props.type)};
  ${props => (props.small ? smallStyles(props.theme) : normalStyles(props.theme))};
  display: inline-flex;
  line-height: normal;

  &:visited,
  &:active,
  &:link {
    text-decoration: none;
    ${({ theme }) => globalStyles(theme)};
  }
`;
StyledLink.displayName = 'StyledLink';

const ButtonContent = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${({ theme, collapseBreakpoint }) => theme.breakpoints[collapseBreakpoint] || 0}) {
    display: none;
  }
`;

export default class Button extends PureComponent {
  static propTypes = {
    styledType: PT.oneOf(['default', 'default_flat', 'primary', 'primary_alt', 'primary_flat', 'secondary', 'secondary_alt', 'tertiary']),
    small: PT.bool,
    disabled: PT.bool,
    loading: PT.bool,
    collapseBreakpoint: PT.oneOf([null, 'sm', 'md', 'lg']),
    href: PT.string,
    iconSize: PT.oneOf(['small', 'medium', 'mini']),
    darkMode: PT.bool,
    btnRef: PT.oneOfType([
      PT.func, 
      PT.shape({ current: PT.instanceOf(Element) })
  ])
  };

  static defaultProps = {
    styledType: 'default',
    small: false,
    disabled: false,
    loading: false,
    collapseBreakpoint: null,
    href: undefined,
    loaderColor: '#fff',
    iconSize: 'small',
    darkMode: false,
    btnRef:null
  };

  render() {
    const { href, loading, loaderColor, btnRef, collapseBreakpoint, disabled, iconSize, icon , children, ...remProps } = this.props;

    if (href) {
      return <StyledLink {...remProps} type={undefined} />;
    }
    return (
      <StyledButton type="button" {...remProps} disabled={loading || disabled} ref={btnRef} collapseBreakpoint={collapseBreakpoint}>
        {loading && <Loader color={loaderColor} />}
        {icon && !loading && <Icon src={icon} type={iconSize} />}
        {children && <ButtonContent id="button-content" collapseBreakpoint={collapseBreakpoint}>{children}</ButtonContent>}
      </StyledButton>
    );
  }
}
