import React, { useState } from "react";
import { css } from "@emotion/react";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import FavoriteActiveIcon from "@/assets/icons/favorite_active.svg";

interface FavoriteButtonWithTextProps {
  size?: number;
  active: boolean;
}

const FavoriteButtonWithText: React.FC<FavoriteButtonWithTextProps> = ({
  size = 48,
  active = false,
}) => {
  const [isIconActive, setIconActive] = useState<boolean>(active);

  const handleClick = () => {
    setIconActive((prevState) => !prevState);
  };
  const FavoriteButtonStyles = css`
    position: relative;
    width: ${size}px;
    height: ${size}px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 1px solid #eeeef5;
    background-color: transparent;
    > img {
      width: 20px;
      height: 18px;
    }

    &:hover {
      outline: none;
      border: 1px solid #eeeef5;
    }
  `;
  return (
    <button css={FavoriteButtonStyles} onClick={handleClick}>
      {!isIconActive && <img src={FavoriteIcon} alt="favorite" />}
      {isIconActive && <img src={FavoriteActiveIcon} alt="favorite" />}
    </button>
  );
};
export default FavoriteButtonWithText;
