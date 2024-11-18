import React from "react";
import { css } from "@emotion/react";
import { theme } from "@/styles/theme";

interface RadioButtonsProps {
  buttons: Array<string>;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ buttons }) => {
  const RadioButtonStyles = css`
    > div {
      margin-bottom: 10px;
    }
    text-align: start;
    margin: 10px;
    input[type="radio"] {
      display: none;
      &:checked + label::before {
        border-color: ${theme.colors.accent};
      }
      &:checked + label::after {
        content: "";
        position: absolute;
        left: 6px;
        border-radius: 50%;
        top: calc(50% - 9px);
        width: 16px;
        height: 16px;
        background-color: ${theme.colors.accent};
      }
    }
    label {
      position: relative;
      padding-left: 34px;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: transparent;
        border: 2px solid #fff;
      }
    }
  `;
  return (
    <div css={RadioButtonStyles}>
      {buttons.map((item, index) => (
        <div key={index} tabIndex={0}>
          <input type="radio" name="list" id={`radio-${index}`} />
          <label htmlFor={`radio-${index}`}>{item}</label>
        </div>
      ))}
    </div>
  );
};
export default RadioButtons;
