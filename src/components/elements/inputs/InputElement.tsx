import React, { useRef } from "react";
import { css } from "@emotion/react";
import SearchIcon from "@/assets/icons/search.svg";
import { hexToRgba } from "@/utils/hexToRgba";
import { theme } from "@/styles/theme";

interface InputElementProps {
  type: "text" | "phone" | "email";
  icon?: string;
  placeholder?: string;
}

const InputElement: React.FC<InputElementProps> = ({
  type,
  icon,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Функция для установки фокуса на input при клике на контейнер
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const outerStyles = css`
    margin: 10px;
  `;

  const innerStyles = css`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.background};
    border-radius: 8px;
    pointer-events: all;
    padding: 16px;
    cursor: text;
    &:focus-within {
      outline: 1px solid ${theme.colors.accent};
    }

    input {
      width: 100%;
      border: none;
      outline: none;
      ::placeholder {
        color: ${hexToRgba(theme.colors.text, 0.4)};
      }
    }

    img {
      width: 17px;
      height: 17px;
      margin-right: 12px;
    }
  `;

  const errorMessageStyle = css`
    color: ${theme.colors.accent};
    font-size: 14px;
    text-align: start;
  `;

  return (
    <div css={outerStyles}>
      <div css={innerStyles} onClick={handleFocus}>
        {icon === "search" && <img src={SearchIcon} alt="search-icon" />}
        <input ref={inputRef} type={type} placeholder={placeholder} />
      </div>
      {type === "email" && (
        <p css={errorMessageStyle}>Неправильный формат email</p>
      )}
    </div>
  );
};

export default InputElement;
