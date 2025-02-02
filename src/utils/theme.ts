import { ThemeVars } from "@mysten/dapp-kit";

/**
 *     --black-default: #000;
    --black-900: #1c1c1c;
    --black-500: #747474;
    --black-100: #f9f9f9;
    --black-800: #090909;
    --black-700: #424242;
    --black-600: #3a3a3a;
    --black-300: #d4d4d4;
    --black-200: #f3f3f3;
    --placeholder: #a1a5b0;
    --border: #e0e0e0;
 */
// Light theme copied from dapp-kit
export const darkTheme: ThemeVars = {
  blurs: {
    modalOverlay: "blur(0)",
  },
  backgroundColors: {
    primaryButton: "#1C1C1C",
    primaryButtonHover: "#747474",
    outlineButtonHover: "#747474",
    modalOverlay: "#1c1c1c",
    modalPrimary: "black",
    modalSecondary: "#f9f9f9",
    iconButton: "transparent",
    iconButtonHover: "#3a3a3a",
    dropdownMenu: "#1c1c1c",
    dropdownMenuSeparator: "#1c1c1c",
    walletItemSelected: "black",
    walletItemHover: "#3a3a3a",
  },
  borderColors: {
    outlineButton: "#E4E4E7",
  },
  colors: {
    primaryButton: "#fff",
    outlineButton: "#fff",
    iconButton: "#fff",
    body: "#fff",
    bodyMuted: "#fff",
    bodyDanger: "#fff",
  },
  radii: {
    small: "6px",
    medium: "8px",
    large: "12px",
    xlarge: "16px",
  },
  shadows: {
    primaryButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    walletItemSelected: "0px 2px 6px rgba(0, 0, 0, 0.05)",
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    bold: "600",
  },
  fontSizes: {
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "20px",
  },
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontStyle: "normal",
    lineHeight: "1.3",
    letterSpacing: "1",
  },
};
