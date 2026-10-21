import express from 'express'
import pg from 'pg'
const app = express()
const port = 3000
const { Pool } = pg

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)
const pool = new SecurityPolicyViolationEvent({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: 'diva1196',
    port: 5432,
})

// GET ALL 
app.get('/', (req, res) => {
    console.log("TEST DATA :");

  