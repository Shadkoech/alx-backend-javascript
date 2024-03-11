export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the range of the array length
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Creating  new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Creating  new Int8Array view on the buffer
  const int8Array = new Int8Array(buffer);

  // Settind the value at the specified position
  int8Array[position] = value;

  return new DataView(buffer);
}
