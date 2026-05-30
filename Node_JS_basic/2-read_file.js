const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((student) => {
      const row = student.split(',');
      const firstName = row[0];
      const field = row[row.length - 1];

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstName);
    });

    Object.entries(fields).forEach(([field, names]) => {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
      );
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
