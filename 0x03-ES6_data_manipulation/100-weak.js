export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // initialize the count if its not in the map method
  if (weakMap.has(endpoint)) {
    const nQuery = weakMap.get(endpoint);
    // Exception. Throw an error
    if (nQuery >= 4) throw Error('Endpoint load is high');
    // increment the count
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else { weakMap.set(endpoint, 1); }
}
