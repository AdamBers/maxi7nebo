import React from "react";
import { css } from "@emotion/react";
import ArrowRightIcon from "@/assets/icons/arrow_right.svg";
import ArrowRightHover from "@/assets/icons/arrow_right_hover.svg";

interface ArrowButtonProps {
  direction: "left" | "right";
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction }) => {
  const ArrowButtonStyle = css`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #fff;
    margin: 10px;
    cursor: pointer;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10px 17px;
    background-image: url(${ArrowRightIcon});
    ${direction === "left" ? "transform: scaleX(-1);" : ""}
    &:hover {
      background-image: url(${ArrowRightHover});
    }
    &:active {
      transform: ${direction === "left"
        ? "scaleX(-1) translateY(1px)"
        : "translateY(1px)"};
    }
  `;
  return <button css={ArrowButtonStyle}></button>;
};

export default ArrowButton;
