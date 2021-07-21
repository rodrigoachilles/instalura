const abbreviateNumber = (num, numFixed) => {
  if (num === null) {
    return null;
  }
  if (num === 0) {
    return '0';
  }
  const fixed = !numFixed || numFixed < 0 ? 0 : numFixed;
  const b = num.toPrecision(2).split('e');
  const k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3);
  const c =
    k < 1 ? num.toFixed(0 + fixed) : num / (10 ** (k * 3)).toFixed(1 + fixed);
  const d = c < 0 ? c : Math.abs(c);
  return d + ['', 'k', 'm', 'b', 't'][k];
};

export default abbreviateNumber;
