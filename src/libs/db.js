import mysql from "serverless-mysql";

export const conn = mysql({
    config:{
        host: 'localhost', 
        user: 'root',
        password: 'gabosky2412',
        database: 'aerotrans',
        port: 3306,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    }
})