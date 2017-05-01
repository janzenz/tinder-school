import _inRange from 'lodash/inRange';

export const kFormatter = (value) => {
  if (value < 1000) {
    return value;
  }

  const result = value / 1000;

  // Check for remainder
  if (result % 1 === 0) {
    return `${result}k`;
  } else {
    return `${result.toFixed(1)}k`;
  }
};

export const getPercentage = (numerator, denominator) => {
  if (denominator === 0) {
    return false;
  }

  return Math.round((numerator / denominator) * 100) + '%';
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
}
