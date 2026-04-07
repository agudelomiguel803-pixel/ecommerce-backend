require("dotenv").config();
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "nozomi.proxy.rlwy.net",
  user: "root",
  password: "YgZYxnEAWoalYveqSROGTexnHmohDOrr",
  database: "railway",
  port: 22709,
});

module.exports = db;