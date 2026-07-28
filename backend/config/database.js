import express from "express"
import mysql2 from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config()
const db = mysql2.createPool({
host:"localhost",
user:"root",
password:process.dotenv.mysql_password,
database:"to_do"
})
export default db