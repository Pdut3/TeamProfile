const fs = require('fs');

function generateHTML(teamMembers) {
  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Roster</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <h1>Team Roster</h1>
      <ul>
  `;

  teamMembers.forEach((member) => {
    html += `
      <li>
        <h2>${member.name}</h2>
        <p>Role: ${member.role}</p>
        <p>ID: ${member.id}</p>
        <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
    `;

    if (member.role === 'Engineer') {
      html += `
        <p>GitHub: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></p>
      `;
    }

    if (member.role === 'Intern') {
      html += `
        <p>School: ${member.school}</p>
      `;
    }

    html += `
      </li>
    `;
  });

  html += `
      </ul>
    </body>
    </html>
  `;

  fs.writeFile('team.html', html, (err) => {
    if (err) throw err;
    console.log('Team roster generated successfully!');
  });
}

module.exports = generateHTML;
