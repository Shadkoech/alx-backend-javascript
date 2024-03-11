// export default function hasValuesFromArray(set, array) {
// Check if every element in the array exists in the set
//   return array.every((element) => set.has(element));
// }

export default function hasValuesFromArray(set, array) {
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }

  return true;
}
