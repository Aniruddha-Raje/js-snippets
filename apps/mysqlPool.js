const util = require('util');
const mysql = require('mysql');

let transactionFlow = async () => {

    var pool = mysql.createPool({
        connectionLimit: 5,
        host: "localhost",
        user: "root",
        password: "root",
        database: "junit"
    });

    let poolGetConnection = util.promisify(pool.getConnection).bind(pool);
    let connectionPool = await poolGetConnection();

    let poolBeginTransaction = util.promisify(connectionPool.beginTransaction).bind(connectionPool);
    let transaction = await poolBeginTransaction();
    
    var now = new Date();
    var jsonDate = now.toJSON();
    var then = new Date(jsonDate);
    then = new Date().getTime();

    let sqlQuery = "INSERT INTO code (name, createdDate) VALUES (?,?)";
    let sqlData = ["Test", then];

    try {
        let poolQuery = util.promisify(connectionPool.query).bind(connectionPool);
        let rows = await poolQuery(sqlQuery, sqlData);

        let poolCommit = util.promisify(connectionPool.commit).bind(connectionPool);
        let queryCommit = await poolCommit();

        connectionPool.release();
        return;
    } catch (error) {
        connectionPool.rollback(function() {
            console.log("Rollback complete!");
            connectionPool.release();
            return;
        });
    }
}

transactionFlow();


// let callbackStyle = async (callback) => {
//     pool.getConnection(function(err, connectionPool) {
//         if (err) {
//             if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//                 console.error('Database connection was closed.')
//             }
//             if (err.code === 'ER_CON_COUNT_ERROR') {
//                 console.error('Database has too many connections.')
//             }
//             if (err.code === 'ECONNREFUSED') {
//                 console.error('Database connection was refused.')
//             }
//             callback(err,null);
//         }
//         else{
//             connectionPool.beginTransaction(function(err, resp) {
//                 if (err) {
//                     console.log(err);
//                     callback(err,null);
//                 }
//                 else{
//                     var now = new Date();
//                     var jsonDate = now.toJSON();
//                     var then = new Date(jsonDate);
//                     then = new Date().getTime();

//                     let sqlQuery = "INSERT INTO code (name, createdDate) VALUES (?,?)";
//                     let sqlData = ["Test", then];
        
//                     connectionPool.query(sqlQuery, sqlData, function(err,rows) {
//                         console.log(this.sql);
        
//                         if (err) {
//                             console.log(err);
//                         }
//                         else{
//                             connectionPool.commit(function(err, result) {
//                                 let test = true;
//                                 if (test) {
//                                     console.log("Roll Back Test ");
//                                     //console.log(err);

//                                     connectionPool.rollback(function() {
//                                         console.log("Rollback complete!");
//                                         //console.log(err);
//                                     });
//                                 }
//                                 else {
//                                     console.log("Releasing connection");
//                                     connectionPool.release();
//                                 }
//                             });
//                         }
//                     });
//                 }
//             });
//         }
//     });
// }