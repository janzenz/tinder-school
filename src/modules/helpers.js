import _inRange from 'lodash/inRange';

export const kFormatter = (value) => {
  if (value < 1000) {
    return value;
  }

  const result = value / 1000;

  return `${result.toFixed(1).replace(/\.0+$/,'')}k`;
};

export const getPercentage = (numerator, denominator) => {
  if (denominator === 0) {
    return 0;
  }

  return Math.round((numerator / denominator) * 100);
};

export const getPercentageString = (numerator, denominator) => {
  const result = getPercentage(numerator, denominator);
  return result > 0 ?
    `${result}%` :
    'N/A';
};

export const getMatchRange = (rate) => {
  if (_inRange(rate, 0, 25)) {
    return 0;
  } else if (_inRange(rate, 26, 50)) {
    return 25;
  } else if (_inRange(rate, 51, 75)) {
    return 50;
  } if (_inRange(rate, 76, 100)) {
    return 75;
  }
};
