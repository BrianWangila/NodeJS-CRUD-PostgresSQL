require('dotenv').config();

const Pool = require('pg').Pool

const pool = new Pool({
    connectionLimit: 10,
    user: "postgres",
    host: "factsDB.abcdefg.eu-west-2.rds.amazonaws.com",
    database: "database_usuario",
    password: "Tecnologia123*",
    port: 5432,
    debug: false
});

const getMerchants = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(results.rows);
        })
    }) 
}

const createMerchant = (body) => {
    return new Promise(function(resolve, reject) {
        const { name, email } = body
        pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(`A new merchant has been added added: ${results.rows[0]}`)
        })
    })
}

const updateMerchant = (params, body) => {        
    return new Promise (function(resolve, reject) {   
        const id = parseInt(params)     
        const { name, email } = body
        pool.query('UPDATE merchants SET name=$2, email=$3 WHERE id = $1', [id, name, email], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Merchant update with ID: ${id}`)
        })
    })
}

const deleteMerchant = (params) => {
    return new Promise(function(resolve, reject) {
        const id = parseInt(params)
        pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Merchant deleted with ID: ${id}`)
        })
    })
}
  
module.exports = {
    getMerchants,
    createMerchant,
    updateMerchant,
    deleteMerchant,
}
