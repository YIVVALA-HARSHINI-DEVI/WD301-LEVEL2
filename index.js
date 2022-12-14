const http = require("http");
const fs = require("fs");

let registerData =           "";
let homeData = "";
let projectData = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeData = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectData = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registerData = registration;
});

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectData);
        response.end();
        break;
      case "/registration":
        response.write(registerData);
        response.end();
        break;
      default:
        response.write(homeData);
        response.end();
        break;
    }
  })
  .listen(5000);
