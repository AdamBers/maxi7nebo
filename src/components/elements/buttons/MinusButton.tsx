import React from "react";
import { css } from "@emotion/react";
import MinusIcon from "@/assets/icons/remove.svg";

interface MinusButtonProps {
  size?: number;
}
const MinusButton: React.FC<MinusButtonProps> = ({ size = 36 }) => {
  const MinusButtonStyle = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: ${size}px;
    height: ${size}px;
    background-color: transparent;
    margin: 10px;
    border: 1px solid #eeeef5;

    &:hover {
      outline: none;
      border: 1px solid #eeeef5;
    }
    &:active {
      box-shadow: 0px 0px 15px 0px #70051e inset;
    }
    > img {
      width: 14px;
      height: 2px;
    }
  `;
  return (
    <button css={MinusButtonStyle}>
      <img src={MinusIcon} alt="minus" />
    </button>
  );
};

export default MinusButton;
