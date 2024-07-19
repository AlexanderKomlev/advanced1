export default function orderByProps(obj, order) {
  const first = [];
  const second = [];
  for (const key in obj) {
    if (order.includes(key)) {
      first[order.indexOf(key)] = { key, value: obj[key] };
    } else {
      second.push({ key, value: obj[key] });
    }
  }

  second.sort((a, b) => {
    if (a.key <= b.key) {
      return -1;
    }
    return 1;
  });

  return first.concat(second);
}
