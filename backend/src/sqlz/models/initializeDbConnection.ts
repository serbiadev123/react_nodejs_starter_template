import { Sequelize, Model } from 'sequelize'

import { mutiple_databases } from '../config/config'

let databases: Array<Sequelize> = []

// in the case we want to add multiple databases we can use the mutiple_databases from the config,
// if not we can just create different enviroments for testing, production, and use those based on the
// env varuabes. We will have access to them if we use env-cmd when calling the scripts (check package.json)
Object.keys(mutiple_databases).forEach((singleDbKey: string) => {
    databases.push(new Sequelize(
        mutiple_databases[singleDbKey]['database'],
        mutiple_databases[singleDbKey]['username'],
        mutiple_databases[singleDbKey]['password'],
        mutiple_databases[singleDbKey]
    ))
})


export class ModelmySql extends Model {
    // in order to use multiple databases in the same time, we will have to connect the model to different
    // Sequelize objects.
    static SequelizeConnection = databases[0]
}
