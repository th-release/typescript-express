import knex from 'knex'

export const db = knex({
    client: "mysql",
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'cth',
        database: 'Th-Server'
    }
})