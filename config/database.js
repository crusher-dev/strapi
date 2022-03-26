module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connector: 'bookshelf',
    connection: {
      host: env('DATABASE_HOST'),
      port: env('DATABASE_PORT'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      database: env('DATABASE_NAME'),
      ssl: {
        rejectUnauthorized: false,
      }
    },
  }
});
 