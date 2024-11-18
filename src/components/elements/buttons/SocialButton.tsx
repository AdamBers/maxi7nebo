import React from "react";
import { css } from "@emotion/react";
import FaceBookIcon from "@/assets/icons/social/facebook.svg";
import InstagramIcon from "@/assets/icons/social/instagram.svg";
import TelegramIcon from "@/assets/icons/social/telegram.svg";
import { theme } from "@/styles/theme";

interface SocialButtonProps {
  social: "facebook" | "instagram" | "telegram";
}
const SocialButton: React.FC<SocialButtonProps> = ({ social }) => {
  const SocialButtonStyles = css`
    position: relative;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin: 10px;
    border: 1px solid #2f2f31;
    &:hover {
      border: 1px solid ${theme.colors.accent};
    }
  `;
  return (
    <button css={SocialButtonStyles}>
      {social === "facebook" && <img src={FaceBookIcon} alt={social} />}
      {social === "instagram" && <img src={InstagramIcon} alt={social} />}
      {social === "telegram" && <img src={TelegramIcon} alt={social} />}
    </button>
  );
};

export default SocialButton;
