/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { hexToRgba } from "../../../utils/hexToRgba";
import CloseIcon from "../../../assets/icons/close.svg";
import ArrowRightIcon from "../../../assets/icons/arrow_forward.svg";

interface ButtonProps {
  variant?: "primary" | "withArrowRight" | "withDeleteIcon";
  text: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  text,
  disabled = false,
}) => {
  const theme = useTheme();

  const buttonStyle = css`
    position: relative;
    display: block;
    padding: 16px 40px;
    margin: 10px;
    background-color: ${variant === "withDeleteIcon"
      ? hexToRgba(theme.colors.accent, 0.2)
      : theme.colors.accent};
    color: ${variant === "withDeleteIcon"
      ? theme.colors.accent
      : theme.colors.white};
    outline: none;
    border: none;

    &:hover {
      background-color: ${variant === "withDeleteIcon"
        ? hexToRgba(theme.colors.accent, 0.3)
        : theme.colors.hoverColor};
    }

    &:focus {
      outline: none;
    }

    &:focus-visible:before {
      content: "";
      position: absolute;
      top: -5px;
      right: -5px;
      bottom: -5px;
      left: -5px;
      border: 1px solid ${theme.colors.accent};
      border-radius: inherit;
      background-color: transparent;
      pointer-events: none;
    }
    &:disabled {
      background-color: ${hexToRgba(theme.colors.accent, 0.2)};
      pointer-events: none;
    }
    &:active {
      box-shadow: 0px 0px 15px 0px #70051e inset;
      transform: translateY(1px);
    }
  `;

  const arrowRightStyle = css`
    width: 7px;
    height: 13px;
    vertical-align: middle;
    margin-left: 11px;
  `;
  const deleteIconStyle = css`
    width: 13px;
    height: 13px;
    vertical-align: middle;
    margin-right: 15px;
  `;

  return (
    <button css={buttonStyle} disabled={disabled}>
      {variant === "withDeleteIcon" && (
        <img src={CloseIcon} alt="X icon" css={deleteIconStyle} />
      )}
      {text}
      {variant === "withArrowRight" && (
        <img src={ArrowRightIcon} alt="Arrow right" css={arrowRightStyle} />
      )}
    </button>
  );
};

export default Button;
