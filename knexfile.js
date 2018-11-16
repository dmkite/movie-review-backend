const path = require('path')

module.exports = {
    development: { 
        client: 'pg', 
        connection: 'postgresql://localhost/movie_crud_dev',
        migrations: { directory: path.join(__dirname, 'db', 'migrations') },
        seeds: { directory: path.join(__dirname, 'db', 'seeds') }
     },
    test: { 
        client: 'pg', 
        connection: process.env.DATABASE_URL 
    },
    production:{
        client: 'postgresql',
        connection: process.env.DATABASE_URL,
        migrations: { directory: path.join(__dirname, 'db', 'migrations') },
        seeds: { directory: path.join(__dirname, 'db', 'seeds') }

    }
}