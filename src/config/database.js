module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    database: 'sqlnode',
    port: 5432,
    define: {
        timestamp: true, /* created_at e updated_at criados automaticamente */
        underscored: true, /* snake case */
    },
}