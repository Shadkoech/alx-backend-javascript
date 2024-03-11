export default function getStudentsByLocation(students, city) {
  // Use the filter function to filter students based on the specified city
  return students.filter((student) => student.location === city);
}
