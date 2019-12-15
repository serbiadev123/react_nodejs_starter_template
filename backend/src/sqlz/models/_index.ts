import { Sequelize } from 'sequelize'

import { mutiple_databases } from '../config/config'

let databases: Array<Sequelize> = []

Object.keys(mutiple_databases).forEach(singleDbKey => {
    databases.push(new Sequelize(
        mutiple_databases[singleDbKey]['database'],
        mutiple_databases[singleDbKey]['username'],
        mutiple_databases[singleDbKey]['password'],
        mutiple_databases[singleDbKey]
    ))
})

export default databases
