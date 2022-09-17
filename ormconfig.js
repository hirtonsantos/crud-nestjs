module.exports = {
  type: 'postgres',
  port: 5432,
  username: 'hirton',
  password: '1987',
  database: 'users_db',
  host: 'localhost', // locahost
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

/*
const defaultOptions = {
    type: 'postgres',
    port: 5432,
    username: 'hirton',
    password: '1987',
    database: 'users_db',
    host: 'localhost', // locahost
  };
*/
