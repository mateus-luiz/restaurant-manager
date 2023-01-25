import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'restaurant_manager'
});

function createTable(){

    connection.connect((err) => {
        if (err) throw err;
    });

    const cmmd = `CREATE TABLE restaurants(
        id INT NOT NULL PRIMARY KEY,
        name VARCHAR(255) not null,
        address VARCHAR(255) not null,
        addressNumber INT,
        openDate VARCHAR(255) not null,
        closeDate VARCHAR(255) not null,
        photo VARCHAR(255) not null
    )`;
    
    connection.query(cmmd, (err) => { if (err) throw err; });

}

export {connection, createTable};