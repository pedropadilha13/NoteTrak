const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const Projetos = sequelize.import(path.join(...basePathModels, 'Projetos.js'));
const ProjetosDimensoes = sequelize.import(path.join(...basePathModels, 'ProjetosDimensoes.js'));
const Dimensoes = sequelize.import(path.join(...basePathModels, 'Dimensoes.js'));
const DimensoesSubcategorias = sequelize.import(path.join(...basePathModels, 'DimensoesSubcategorias.js'));
const DimensoesCategorias = sequelize.import(path.join(...basePathModels, 'DimensoesCategorias.js'));

Projetos.hasMany(ProjetosDimensoes, { foreignKey: 'projetoid' });
ProjetosDimensoes.hasOne(Dimensoes, { foreignKey: 'dimensaoid' });
DimensoesSubcategorias.hasOne(DimensoesCategorias, { foreignKey: 'dimensaocategoriaid' });
Dimensoes.hasOne(DimensoesSubcategorias, { foreignKey: 'dimensaosubcategoriaid' });

module.exports = {
    listar: function (req, res, next) {
        Projetos.findAll()
            .then(result => {
                return res.json({
                    code: 1,
                    body: {
                        projetos: result
                    }
                });
            })
            .catch(error => {
                return res.json({
                    code: 0,
                    body: {
                        error
                    }
                });
            });
    },
    pesquisar: function (req, res, next) {
        Projetos.findById(req.params.id | 0, {
            include: [{
                required: true,
                model: ProjetosDimensoes,
                include: [{
                    required: true,
                    model: Dimensoes,
                    include: [{
                        required: true,
                        model: DimensoesSubcategorias,
                        include: [{
                            required: true,
                            model: DimensoesCategorias
                        }]
                    }]
                }]
            }]
        }).then(response => {
            return res.json(response);
        });
        /*sequelize.query(`SELECT * FROM Projetos AS P
                INNER JOIN ProjetosDimensoes AS PD
                    ON PD.projetoid = P.projetoid
                INNER JOIN Dimensoes AS D
                    ON D.dimensaoid = PD.dimensaoid
                INNER JOIN DimensoesSubcategorias AS DS
                    ON DS.dimensaosubcategoriaid = D.dimensaosubcategoriaid
                INNER JOIN DimensoesCategorias AS DC
                    ON DC.dimensaocategoriaid = DS.dimensaocategoriaid
                LEFT OUTER JOIN ProjetosTemplates AS PT
                    ON PT.dimensaoid = D.dimensaoid
            WHERE P.projetoid = ${req.params.id | 0}
            ORDER BY P.projetoid,
                PD.projetodimensaoid,
                D.dimensaoid,
                DC.dimensaocategoriaid,
                DS.dimensaosubcategoriaid,
                PT.templateid
        `, { model:  Projetos }).then(response => {
            return res.json(response);
        });*/
    },
    adicionar: function (req, res, next) {
        Projetos.create(req.body).then(result => {
            return res.json({
                code: 1,
                body: result
            });
        }).catch(error => {
            return res.json({
                code: 0,
                body: error
            });
        });
    },
    atualizar: function (req, res, next) {
        Projetos.update(req.body, {
            where: { projetoid: req.body.projetoid }
        }).then(result => {
            return res.json({
                code: 1,
                body: result
            });
        }).catch(error => {
            return res.json({
                code: 0,
                body: error
            });
        });
    },
    pesquisarInativos: function (req, res, next) {
        Projetos.findAll({
            where: {
                statusprojetoid: 4
            }
        }).then(results => {
            return res.json({
                code: 1,
                body: {
                    projetos: results
                }
            });
        }).catch(error => {
            return res.json({
                code: 0,
                body: error
            });
        });
    }
};
