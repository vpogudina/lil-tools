/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect, useState, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import PT from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';

const inputStyle = css`
  outline: none;
  border: none;
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.micro} 0;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.palette.boulder};
  margin-top: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontsSize.regular};
`;

const focusStyle = css`  
  &:focus-within, :focus {
    outline: 3px auto ${({ theme }) => theme.palette.mediumGray};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.base};

  & label {
    font-size: ${({ theme }) => theme.fontsSize.small};
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
  }
`;

const StyledInput = styled.input`
  ${inputStyle}
`;

const StyledInputAutoSize = styled(TextareaAutosize)`
  ${inputStyle}
  resize: none;
`;

const StyledInputWithFocus = styled.input`
  ${inputStyle}
  ${focusStyle}
`;

const StyledInputAutoSizeWithFocus = styled(TextareaAutosize)`
  ${inputStyle}
  ${focusStyle}
  resize: none;
`;

const RemainingText = styled.span`
  padding-top: 2px;
`;

function SimpleInput({ label, id, value, onChange, name, maxCharacterCount, required, autoSize, showOutlineOnFocus, maxLength, ...rest }, ref) {
  const [isValid, setIsValid] = useState(true);
  			  
  useEffect(() => {
    if (value && value.length > maxLength) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [value, maxLength])
 
  function getInput() {
    let InputComponent;
    if (autoSize) {
      InputComponent = showOutlineOnFocus ? StyledInputAutoSizeWithFocus : StyledInputAutoSize;
    } else {
      InputComponent = showOutlineOnFocus ? StyledInputWithFocus : StyledInput;
    }
    return <InputComponent 
              id={id} 
              value={value} 
              name={name} 
              onChange={onChange} 
              maxLength={maxCharacterCount || maxLength} 
              required={required}
              aria-invalid={!isValid}
              ref={ref}
              {...rest}/>;
  }

  return (
    <InputWrapper>
      <label htmlFor={id}>
        {label}
        {getInput()}
      </label>
      {maxCharacterCount && <RemainingText>{`${value.length} / ${maxCharacterCount}`}</RemainingText>}
    </InputWrapper>
  );
}

SimpleInput.propTypes = {
  id: PT.string.isRequired,
  value: PT.string.isRequired,
  label: PT.oneOfType([PT.string, PT.node]).isRequired,
  onChange: PT.func.isRequired,
  name: PT.string.isRequired,
  required: PT.bool,
  maxCharacterCount: PT.number,
  autoSize: PT.bool
};

SimpleInput.defaultProps = {
  required: false,
  autoSize: false,
  maxCharacterCount: null
};

export default forwardRef(SimpleInput);