const util = require('util');
const mysql = require('mysql');

let transactionFlow = async () => {

    try {
        let creds = {
            host: "localhost",
            user: "root",
            password: "rootroot",
            database: "junit"
        };

        let connection = await mysql.createConnection(creds);
        await connection.connect(); 

        let createTransaction = util.promisify(connection.beginTransaction).bind(connection);
        await createTransaction();

        let insertQuery = util.promisify(connection.query).bind(connection);
        let queryResponse = await insertQuery(sqlQuery, sqlData);

        await connection.commit();
        await connection.end();

        response.insertId = queryResponse.insertId;
        response.hasError = false;

    } catch (error) {
        console.log("RDS MySql Error : ", error);

        await connection.rollback();
        await connection.end();

        response.hasError = true;
        response.error = error;
    }
};

transactionFlow();