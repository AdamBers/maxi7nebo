import React from "react";
import { css } from "@emotion/react";

const ToggleButton: React.FC = () => {
  const switchStyle = css`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
    margin-left: 10px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  `;

  const sliderStyle = css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 12px;

    &:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 4px;
      bottom: 3px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }

    input:checked + & {
      background-color: #4caf50;
    }

    input:checked + &:before {
      transform: translateX(25px);
    }
  `;

  return (
    <label css={switchStyle}>
      <input type="checkbox" />
      <span css={sliderStyle}></span>
    </label>
  );
};

export default ToggleButton;
