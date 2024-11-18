import React from "react";
import { css } from "@emotion/react";
import { theme } from "@/styles/theme";

interface CrumbsProps {
  text: Array<string>;
}

const Crumbs: React.FC<CrumbsProps> = ({ text }) => {
  const CrumbsStyles = css`
    text-align: start;
    span {
      color: ${theme.colors.accent};
      :first-of-type {
        color: ${theme.colors.text};
      }
    }
  `;

  return (
    <div css={CrumbsStyles}>
      {text.map((item, index) => (
        <span key={index}>
          {index > 0 && "/"}
          {item}
        </span>
      ))}
    </div>
  );
};

export default Crumbs;
