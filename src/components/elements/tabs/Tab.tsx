import React, { useState } from "react";
import { css } from "@emotion/react";
import { theme } from "@/styles/theme";
import TabIcon from "@/assets/icons/tab_radio_button.svg";
import TabCheckedIcon from "@/assets/icons/tab_radio_button_hover.svg";

interface TabButtonProps {}

const TabButton: React.FC<TabButtonProps> = ({}) => {
  const [selectedTab, setSelectedTab] = useState<string>("30");
  const outerStyles = css`
    margin-bottom: 20px;
  `;

  const TabButtonStyles = css`
    padding: 6px 12px;
    border-radius: 32px;
    cursor: pointer;
    margin: 10px;
    display: inline-block;

    input:checked + label {
      border: 1px solid ${theme.colors.accent};
      color: ${theme.colors.accent};
    }

    label {
      position: absolute;
      cursor: pointer;
      padding: 6px 12px;
      padding-left: 30px;
      display: inline-block;
      border: 1px solid transparent;
      border-radius: 32px;
      transition: border 0.3s ease;
      position: relative;
    }

    img {
      width: 16px;
      height: 16px;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  `;

  const TabInputStyles = css`
    display: none;
  `;

  return (
    <div css={outerStyles}>
      <span css={TabButtonStyles}>
        <input
          type="radio"
          name="size"
          css={TabInputStyles}
          id="30"
          onChange={() => setSelectedTab("30")}
          defaultChecked
        />

        <label htmlFor="30">
          <img
            src={selectedTab === "30" ? TabCheckedIcon : TabIcon}
            alt="Tab Icon"
          />
          30 см
        </label>
      </span>
      <span css={TabButtonStyles}>
        <input
          type="radio"
          name="size"
          css={TabInputStyles}
          id="45"
          onChange={() => setSelectedTab("45")}
        />

        <label htmlFor="45">
          <img
            src={selectedTab === "45" ? TabCheckedIcon : TabIcon}
            alt="Tab Icon"
          />
          45 см
        </label>
      </span>
    </div>
  );
};

export default TabButton;
