import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import React from "react";

interface TextAreaProps {}
const TextArea: React.FC<TextAreaProps> = ({}) => {
  const TextAreaStyles = css`
    background-color: ${theme.colors.background};
    border-radius: 8px;
    margin: 10px;
    padding: 16px;
    resize: none;
    position: relative;
    &:focus {
      outline: none;
      border: 1px solid red;
    }
    &:focus:before {
      content: "";
      position: absolute;
      top: -5px;
      right: -5px;
      bottom: -5px;
      left: -5px;
      /* border: 1px solid ${theme.colors.accent};? */
      outline: 1px solid red;
      outline: none;
      border-radius: inherit;
      background-color: transparent;
      pointer-events: none;
    }
  `;
  return <textarea css={TextAreaStyles}></textarea>;
};

export default TextArea;
