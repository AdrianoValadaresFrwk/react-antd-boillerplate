export const base64ToImage = (base64: string): string => {
  const image = `data:image/png;base64,${base64}`;
  return image;
};
