export const useProportions = () => {
  const [
    wFullHD, 
    hFullHD, 
    wMobile, 
    hMobile
  ] = [
    100 / 1920,
    100 / 1080,
    100 / 375,
    100 / 812,
  ];
  return { wFullHD, hFullHD, wMobile, hMobile };
};
