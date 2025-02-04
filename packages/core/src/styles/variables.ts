import { colors, rounded, spacing, typography } from '../tokens';

export const generateCSSVariables = () => {
  return `
    :root {
      --primary-color: ${colors.primary};
      --secondary-color: ${colors.secondary};
      --font-size: ${typography.fontSize};
      --font-family: ${typography.fontFamily};
      --spacing-small: ${spacing.small};
      --spacing-medium: ${spacing.medium};
      --spacing-large: ${spacing.large};
    }
  `;
};

export const borderRadius = {
  small: rounded.small,
  medium: rounded.medium,
  large: rounded.large,
  full: rounded.full,
};