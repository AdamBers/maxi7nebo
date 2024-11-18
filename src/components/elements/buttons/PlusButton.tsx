import React from "react";
import { css, useTheme } from "@emotion/react";
import PlusIcon from "@/assets/icons/add.svg";
import PlusIconWhite from "@/assets/icons/add_white.svg";

interface PlusButtonProps {
  size?: number;
  variant?: "transparent" | "filled";
}
const PlusButton: React.FC<PlusButtonProps> = ({
  size = 36,
  variant = "transparent",
}) => {
  const theme = useTheme();
  const PlusButtonStyle = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: ${size}px;
    height: ${size}px;
    background-color: ${variant === "filled"
      ? theme.colors.accent
      : "transparent"};
    margin: 10px;
    border: 1px solid #eeeef5;

    &:hover {
      outline: none;
      border: 1px solid #eeeef5;
      background-color: ${variant !== "transparent"
        ? theme.colors.hoverColor
        : "transparent"};
    }
    &:active {
      box-shadow: 0px 0px 15px 0px #70051e inset;
    }
    > img {
      width: 14px;
      height: 14px;
    }
  `;
  return (
    <button css={PlusButtonStyle}>
      {variant === "transparent" && <img src={PlusIcon} alt="plus" />}
      {variant === "filled" && <img src={PlusIconWhite} alt="plus" />}
    </button>
  );
};

export default PlusButton;
