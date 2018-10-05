const Sequelize = require('sequelize');

function Database() {
    const instance = null;

    function closeInstance() {
        if (instance) {
            instance.close();
            instance = null;
        }
    }

    function getInstance() {
        if (!instance) {
            instance = new Sequelize({
                database: 'notetrak',
                username: 'pedropadilha13',
                password: 'N0737R4Klalala',
                dialect: 'mssql',
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
