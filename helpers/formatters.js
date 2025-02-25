export const formatNumberWithCommas = (number) => {
  if (!number || isNaN(number)) return 0;
  return Number(number).toLocaleString("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  });
};
