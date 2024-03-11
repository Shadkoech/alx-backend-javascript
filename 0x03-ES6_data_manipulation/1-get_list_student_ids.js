export default function getListStudents(students) {
  if (!Array.isArray(students)) {
    return []; // Return an empty array if argument is not an array
  }

  return students.map((student) => student.id);
  // Use the map function to extract ids from each student object
}
