    const mysql = require('mysql');
    const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'nodejs'
    });
    db.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
    });
    module.exports = db;
    
    // import mysql from 'mysql2/promise';

    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: 'mysql', 
    //     database: 'nodejs',
    //   });
    //   module.exports = connection;

  
    // const {Sequelize} = require('sequelize');
    // const sequelize = new Sequelize('nodejs', 'root', 'mysql', {
    //     host: 'localhost',
    //     dialect:  'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    //   }
    // );
    // module.exports = sequelize;