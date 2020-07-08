export default function orderByProps(obj, props) {
  const copy = { ...obj };
  const sorted = [];

  for (const prop of props) {
    sorted.push({ key: prop, value: copy[prop] });
    delete copy[prop];
  }

  const rest = Object.keys(copy);
  const restSorted = rest.sort();

  for (const prop of restSorted) {
    sorted.push({ key: prop, value: copy[prop] });
  }

  return sorted;
}
