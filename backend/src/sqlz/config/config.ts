const dbs1 = {
    'username': process.env.DBS1_USERNAME,
    'password': process.env.DBS1_PASSWORD,
    'database': process.env.DBS1_NAME,
    'host': process.env.DBS1_HOST_IP,
    'port': process.env.DBS1_HOST_PORT,
    'dialect': process.env.DBS1_DIALECT,
    'logging': true,
    'force': true,
    'timezone': '+00:00'
}

const dbs2 = {
    'username': process.env.DBS2_USERNAME,
    'password': process.env.DBS2_PASSWORD,
    'database': process.env.DBS2_NAME,
    'host': process.env.DBS2_HOST_IP,
    'port': process.env.DBS2_HOST_PORT,
    'dialect': process.env.DBS2_DIALECT,
    'logging': true,
    'force': true,
    'timezone': '+00:00'
}

const mutiple_databases = {
    dbs1,
    dbs2
}

export {
    mutiple_databases,
    dbs1,
    dbs2
}
