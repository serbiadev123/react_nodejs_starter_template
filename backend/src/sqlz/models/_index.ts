import { Sequelize } from 'sequelize'

const config = require('../config/config.json')

let databases: Array<Sequelize> = []

const multipleDatabasesConfig = config['mutiple_databases']

Object.keys(multipleDatabasesConfig).forEach(singleDbKey => {
    databases.push(new Sequelize(
        multipleDatabasesConfig[singleDbKey]['database'],
        multipleDatabasesConfig[singleDbKey]['username'],
        multipleDatabasesConfig[singleDbKey]['password'],
        multipleDatabasesConfig[singleDbKey]
    ))
})

export default databases
