import styled, { css } from 'styled-components';

const FlexRowMixin = css`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.center ? 'center' : 'space-between')};
  align-items: ${props => (props.center ? 'center' : 'normal')}; 
`
const FlexColumnMixin = css`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.center ? 'center' : 'space-between')};
  align-items: ${props => (props.center ? 'center' : 'normal')};
`

const FlexRowContainer = styled.div `
  ${FlexRowMixin}
`;

const FlexColumnContainer = styled.div `
  ${FlexColumnMixin}
`;
const FlexVerticalCenterContainer = styled.div `
  display: flex;
  align-items: center;
`;

const FlexColumnSpaceBetweenContainer = styled.div `
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const Mask = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  outline: none;
  background-color: ${props => props.theme.palette.white};
  z-index: ${props => props.theme.zIndex.level_2};
`;

const HiddenText = styled.span `
  position: absolute;
  pointer-events: none;
  color: transparent;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
`;

const HiddenHeadingStyle = css`
  width: 0;
  height: 0;
  pointer-events: none;
  color: transparent;
  overflow: hidden;
`;

const UnstyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
`

const UnstyledButtonFlexRow = styled(UnstyledButton)`
  ${FlexRowMixin}
`

const UnstyledButtonFlexColumn = styled(UnstyledButton)`
  ${FlexColumnMixin}
`
const HiddenLevelOneHeading = styled.h1 `
  ${HiddenHeadingStyle}
`;

const HiddenLevelTwoHeading = styled.h2 `
  ${HiddenHeadingStyle}
`;

export {
  FlexColumnContainer,
  FlexRowContainer,
  FlexVerticalCenterContainer,
  FlexColumnSpaceBetweenContainer,
  Mask,
  HiddenText,
  HiddenLevelOneHeading,
  UnstyledButton,
  UnstyledButtonFlexColumn,
  UnstyledButtonFlexRow,
  HiddenLevelTwoHeading
};