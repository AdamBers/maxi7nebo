import React from "react";
import { css } from "@emotion/react";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import { theme } from "@/styles/theme";

interface FavoriteButtonProps {
  size?: number;
  text?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  size = 48,
  text = "favorite",
}) => {
  const FavoriteButtonStyles = css`
    position: relative;
    width: ${text.length > 0 ? "fit-content" : size + "px"};
    height: ${size}px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 1px solid #eeeef5;
    background-color: ${theme.colors.white};
    > img {
      width: 20px;
      height: 18px;
      margin-right: 12px;
    }

    &:hover {
      outline: none;
      border: 1px solid #eeeef5;
    }
  `;
  return (
    <button css={FavoriteButtonStyles}>
      <img src={FavoriteIcon} alt="favorite" />
      {text}
    </button>
  );
};
export default FavoriteButton;
