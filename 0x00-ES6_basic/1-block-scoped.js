export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    return [task, task2];
    // const task = true;
    // const task2 = false;
  }

  return [task, task2];
}
