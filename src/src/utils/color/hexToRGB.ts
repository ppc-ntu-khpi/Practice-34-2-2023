export const hexToRGB = (hex: string, format: 'full' | 'values-only') => {
  // Remove the '#' character from the beginning of the hex string
  hex = hex.replace('#', '');

  // Split the hex string into three parts: red, green, and blue
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  // Return the RGB color value as a string
  return format === 'full'
    ? `rgb(${red}, ${green}, ${blue})`
    : [red, green, blue];
};
