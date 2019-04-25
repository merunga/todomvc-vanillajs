let count = 0;

export const uuid = () => {
  count += 1;
  return count;
};
