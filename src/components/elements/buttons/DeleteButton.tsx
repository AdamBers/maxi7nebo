import React from "react";
import { useTheme, css } from "@emotion/react";
import DeleteIcon from "@/assets/icons/delete.svg";
import { hexToRgba } from "@/utils/hexToRgba";

interface DeleteButtonProps {
  variant?: "square" | "circle";
  size?: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  variant = "square",
  size = 36,
}) => {
  const theme = useTheme();
  const deleteButtonStyle = css`
    position: relative;
    width: ${size}px;
    height: ${size}px;
    padding: 16px;
    background-color: ${hexToRgba(theme.colors.accent, 0.2)};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: none;
    border-radius: ${variant === "circle" ? "50%" : "8px"};

    &:hover {
      outline: none;
      background-color: ${hexToRgba(theme.colors.accent, 0.3)};
    }
    &:active {
      box-shadow: 0px 0px 15px 0px #70051e inset;
    }

    > img {
      width: 15px;
      height: 17px;
    }
  `;
  return (
    <button css={deleteButtonStyle}>
      <img src={DeleteIcon} alt="delete" />
    </button>
  );
};

export default DeleteButton;
