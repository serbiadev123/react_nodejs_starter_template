const mySqlDatabase = {
    'username': process.env.MYSQL_DB_USERNAME,
    'password': process.env.MYSQL_DB_PASSWORD,
    'database': process.env.MYSQL_DB_NAME,
    'host': process.env.MYSQL_DB_HOST_IP,
    'port': process.env.MYSQL_DB_HOST_PORT,
    'dialect': process.env.MYSQL_DB_DIALECT,
    'logging': true,
    'force': true,
    'timezone': '+00:00'
}

// if we want to create multiple database connections in the same time
// we can use this object to add more of them
const mutiple_databases = {
    mySqlDatabase
}

export {
    mutiple_databases,
    mySqlDatabase,
}
