const Sequelize = require('sequelize');

function Database() {
    let instance = null;

    function closeInstance() {
        if (instance) {
            instance.close();
            instance = null;
        }
    }

    function getInstance() {
        if (!instance) {
            instance = new Sequelize({
                host: 'projetoagenda.database.windows.net',
                port: 1433,
                database: 'agenda',
                username: 'Anonimy',
                password: 'N0737R4Klalala',
                dialect: 'mssql',
                dialectOptions: {
                    encrypt: true,
                },
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                }
            });
        }
        return instance;
    }

    return {
        closeInstance,
        getInstance
    };
}

module.exports = Database();
