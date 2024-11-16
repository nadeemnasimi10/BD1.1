const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

app.get('/fullname', (req, res) => {
  let firstName = req.query.firstname;
  let lastName = req.query.lastname;
  let fullName = firstName + ' ' + lastName;
  res.send(fullName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formatDate = month + ', ' + year;
  res.send(formatDate);
});

app.get('/greet', (req, res) => {
  let greetMsg = req.query.greetmsg;
  let greetingMessage = 'Welcome ' + greetMsg;
  res.send(greetingMessage);
});

app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let fullAddress = street + ', ' + city + ', ' + state;
  res.send(fullAddress);
});

app.get('/email', (req, res) => {
  let username = req.query.username;
  let domainname = req.query.domain;
  let formatemail = username + '@' + domainname;
  res.send(formatemail);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
