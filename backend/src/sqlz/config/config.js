const dbs1 = {
    "username": "root",
    "password": "root",
    "database": "distributed_systems",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql",
    "logging": true,
    "force": true,
    "timezone": "+00:00"
}

const dbs2 = {
    "username": "root",
    "password": "root",
    "database": "distributed_systems2",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql",
    "logging": true,
    "force": true,
    "timezone": "+00:00"
}

module.exports = {
    "mutiple_databases": {
        dbs1,
        dbs2
    },
    dbs1,
    dbs2
};