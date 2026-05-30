const http = require('http');
const fs = require('fs');

const database = process.argv[2];

function getStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

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

      let output = `Number of students: ${students.length}`;

      Object.entries(fields).forEach(([field, names]) => {
        output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      });

      resolve(output);
    });
  });
}

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    getStudents(database)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
