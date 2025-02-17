import { Global, css, useTheme } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          /* background-color: ${theme.colors.background}; */
          background-color: #fddaa5;
          color: ${theme.colors.text};
          font-family: "Montserrat, sans-serif";
          margin: 0;
        }
        h1 {
          font-weight: 600;
          font-size: 46px;
          line-height: 115%;
        }
        h2 {
          font-weight: 600;
          font-size: 34px;
          line-height: 115%;
        }
        h3 {
          font-weight: 600;
          font-size: 24px;
          line-height: 115%;
        }
        h4 {
          font-weight: 600;
          font-size: 20px;
          line-height: 120%;
        }
        h5 {
          font-weight: 600;
          font-size: 16px;
          line-height: 130%;
        }
        .subscribe {
          font-weight: 600;
          font-size: 16px;
          line-height: 130%;
        }
        .bigBody {
          font-weight: 400;
          font-size: 16px;
          line-height: 140%;
        }
        .caption {
          font-weight: 400;
          font-size: 14px;
          line-height: 140%;
        }
        .title {
          font-weight: 500;
          font-size: 14px;
          line-height: 140%;
        }
        button {
          user-select: none;
          &:focus {
            outline: none;
          }
          &:active {
            transform: translateY(1px);
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
        }
      `}
    />
  );
};

export default GlobalStyles;
