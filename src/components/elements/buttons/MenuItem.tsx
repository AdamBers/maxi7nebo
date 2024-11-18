import React from "react";
import { css } from "@emotion/react";
import { theme } from "@/styles/theme";
import PizzaIcon from "@/assets/icons/menu/pizza.svg";

interface MenuItemProps {
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text }) => {
  const MenuItemStyles = css`
    margin: 10px;
    position: relative;
    display: inline-block;
    user-select: none;
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
    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      cursor: pointer;
      z-index: 1; /* Чтобы перекрыть label */
    }

    label {
      position: relative;
      display: block;
      background-color: ${theme.colors.background};
      border-radius: 8px;
      min-width: 200px;
      padding: 16px;
      cursor: pointer;
      transition: background-color 0.3s;

      &::before {
        content: "";
        width: 3px;
        height: 21px;
        border-radius: 3px 0 0 3px;
        position: absolute;
        left: -3px;
        top: calc(50% - 11px);
        background-color: ${theme.colors.accent};
      }

      img {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }

    input[type="checkbox"]:checked + label {
      background-color: ${theme.colors.accent};
      color: ${theme.colors.white};
    }
  `;

  return (
    <div css={MenuItemStyles}>
      <input type="checkbox" id={`menu-item-${text}`} />
      <label htmlFor={`menu-item-${text}`}>
        {text}
        {text === "Піца" && <img src={PizzaIcon} alt="pizza-icon" />}
      </label>
    </div>
  );
};

export default MenuItem;
