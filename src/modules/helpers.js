export const kFormatter = (value) => {
  return value > 999 ? (value/1000).toFixed(1) + 'k' : value;
};

export const getPercentage = (numerator, denominator) => {
  if (denominator === 0) {
    return false;
  }

  return Math.round((numerator / denominator) * 100) + '%';
};

export const getMatchRange = (rate) => {
  if (0 <= rate && rate <= 25) {
    return 0;
  } else if (25 < rate && rate <= 50) {
    return 25;
  } else if (50 < rate && rate <= 75) {
    return 50;
  } if (75 < rate && rate <= 100) {
    return 75;
  }
}
