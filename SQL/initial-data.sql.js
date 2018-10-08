/** 
 * ARQUIVO GERADO PARA POPULACAO INICIAL
 * DAS TABELAS UTILIZANDO O SEQUELIZE.
 */

const path = require('path');
const Database = require('../api/Database');
const sequelize = Database.getInstance();

const basePath = [ __dirname, '..', 'api', 'models' ];

const StatusProjetos = sequelize.import(path.join(...basePath, 'StatusProjetos.js'));
const Projetos = sequelize.import(path.join(...basePath, 'Projetos.js'));
const PerguntasCategorias = sequelize.import(path.join(...basePath, 'PerguntasCategorias.js'));
const Perguntas = sequelize.import(path.join(...basePath, 'Perguntas.js'));
const ProjetosPerguntas = sequelize.import(path.join(...basePath, 'ProjetosPerguntas.js'));
const DimensoesCategorias = sequelize.import(path.join(...basePath, 'DimensoesCategorias.js'));
const DimensoesSubcategorias = sequelize.import(path.join(...basePath, 'DimensoesSubcategorias.js'));
const Dimensoes = sequelize.import(path.join(...basePath, 'Dimensoes.js'));
const ProjetosDimensoes = sequelize.import(path.join(...basePath, 'ProjetosDimensoes.js'));
const ProjetosTemplates = sequelize.import(path.join(...basePath, 'ProjetosTemplates.js'));

sequelize.transaction(function (t) {
    return StatusProjetos.bulkCreate([
        {
            descricao: 'Em análise',
            ordem: 1,
            ativo: 1
        },
        {
            descricao: 'Desenvolvimento',
            ordem: 2,
            ativo: 1
        },
        {
            descricao: 'Concluído',
            ordem: 3,
            ativo: 1
        },
        {
            descricao: 'Cancelado',
            ordem: 99,
            ativo: 1
        }
    ], { transaction: t })
    .then(() => Projetos.create({
        statusprojetoid: 2,
        nome: 'Track & Trace',
        empresa: 'Bosch SI',
        contato: 'Dirk Slama',
        comentarios: ''
    }, { transaction: t }))
    .then(() => PerguntasCategorias.bulkCreate([
        {
            descricao: 'Estratégia e Grau de Maturidade para IoT',
            ordem: 1,
            ativo: 1
        },
        {
            descricao: 'Conhecimento sobre LoRaWAN',
            ordem: 2,
            ativo: 1
        },
        {
            descricao: 'Motivação para aproximação com IoT OpenLabs',
            ordem: 3,
            ativo: 1
        }
    ], { transaction: t }))
    .then(() => Perguntas.bulkCreate([
        {
            perguntacategoriaid: 1,
            descricao: 'Empresa tem estratégia definida para IoT? Qual? (descreva: visão, objetivos e princípios orientadores; alianças estratégicas e ecossistema de parceiros; estrutura de gerenciamento de oportunidades e projetos)',
            ordem: 1,
            ativo: 1
        },
        {
            perguntacategoriaid: 1,
            descricao: 'Empresa definiu lista de oportunidades priorizada? (descreva)',
            ordem: 2,
            ativo: 1
        },
        {
            perguntacategoriaid: 1,
            descricao: 'Empresa implantou/está implantando projeto IoT? (descreva: oportunidade, arquitetura da solução, tecnologias de conectividade, parceiros e fornecedores, governança, infraestrutura, plataformas utilizadas, integração, KPIs, ROI, resultados e performance)',
            ordem: 3,
            ativo: 1
        },
        {
            perguntacategoriaid: 1,
            descricao: 'Possui conhecimento sobre as tecnologias para Internet das Coisas? Quais? (descreva: tecnologia, origem do conhecimento)',
            ordem: 4,
            ativo: 1
        },
        {
            perguntacategoriaid: 2,
            descricao: 'Conhece a tecnologia LoRaWAN? ',
            ordem: 1,
            ativo: 1
        },
        {
            perguntacategoriaid: 3,
            descricao: 'Não definiu caso de uso. Necessita suporte para identificar e priorizar oportunidades (descreva).',
            ordem: 1,
            ativo: 1
        },
        {
            perguntacategoriaid: 3,
            descricao: 'Possui caso de uso definido/priorizado. Precisa avaliar a viabilidade técnica e econômica (descreva).',
            ordem: 2,
            ativo: 1
        },
        {
            perguntacategoriaid: 3,
            descricao: 'Já realizou algum teste prévio para este caso de uso? (descreva: tecnologias testadas, resultados, fatores críticos para rejeitar solução)',
            ordem: 3,
            ativo: 1
        },
        {
            perguntacategoriaid: 3,
            descricao: 'Já definiu solução usando LoRaWAN e desenho técnico. Necessita definir fornecedores e apoio para implantação (dispositivos, plataformas, conectividade, integrador, etc) (descreva)',
            ordem: 4,
            ativo: 1
        }
    ], { transaction: t }))
    .then(() => DimensoesCategorias.bulkCreate([
        {
            descricao: 'Ativos e Dispositivos',
            ordem: 1,
            ativo: 1
        },
        {
            descricao: 'Comunicação e Conectividade',
            ordem: 2,
            ativo: 1
        },
        {
            descricao: 'Serviços de Backend',
            ordem: 3,
            ativo: 1
        },
        {
            descricao: 'Padrões e Requerimentos Regulatórios',
            ordem: 4,
            ativo: 1
        },
        {
            descricao: 'Ambiente de Projeto',
            ordem: 5,
            ativo: 1
        }
    ], { transaction: t }))
    .then(() => DimensoesSubcategorias.bulkCreate([
        {
            dimensaocategoriaid: 1,
            descricao: 'Geral',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaocategoriaid: 1,
            descricao: 'Poder de Processamento',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaocategoriaid: 1,
            descricao: 'Outros requisitos de HW',
            ordem: 3,
            ativo: 1
        },
        {
            dimensaocategoriaid: 1,
            descricao: 'Gestão do Ciclo de Vida',
            ordem: 4,
            ativo: 1
        },
        {
            dimensaocategoriaid: 2,
            descricao: 'C&C Local',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaocategoriaid: 2,
            descricao: 'C&C Remota',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaocategoriaid: 3,
            descricao: 'Geral',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaocategoriaid: 3,
            descricao: 'Gerencimento de Dados e Analytics',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaocategoriaid: 4,
            descricao: 'Requerimentos Regulatórios',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaocategoriaid: 4,
            descricao: 'Padrões',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaocategoriaid: 5,
            descricao: 'Geral',
            ordem: 1,
            ativo: 1
        },
    ], { transaction: t }))
    .then(() => Dimensoes.bulkCreate([
        {
            dimensaosubcategoriaid: 1,
            descricao: 'Número de Ativos',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 1,
            descricao: 'Valor do Ativo individual',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 1,
            descricao: 'Valor econômico adicionado por ativo indiv./Ano',
            ordem: 3,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 1,
            descricao: 'Complexidade do Ativo - Perspectiva de Integração',
            ordem: 4,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 1,
            descricao: 'Heterogeneidade do ativo - Perspectiva de Integração (inc. versões e variantes)',
            ordem: 5,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 2,
            descricao: 'Lógica de negócio local',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 2,
            descricao: 'Processamento local de evento',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 2,
            descricao: 'Requisitos de tempo real',
            ordem: 3,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 2,
            descricao: 'Gerenciamento local de dados',
            ordem: 4,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 3,
            descricao: 'Suprimento de Energia',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 3,
            descricao: 'Ambiente',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 4,
            descricao: 'Tempo de vida projetado para o ativo',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 4,
            descricao: 'Restrições para atualização de HW',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 4,
            descricao: 'Restrições para atualização de SW',
            ordem: 3,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 5,
            descricao: 'Tecnologia',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 5,
            descricao: 'Largura de banda necessária',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 5,
            descricao: 'Latência Máxima',
            ordem: 3,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 6,
            descricao: 'Tecnologia',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 6,
            descricao: 'Largura de banda necessária',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 6,
            descricao: 'Latência Máxima',
            ordem: 3,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 7,
            descricao: 'Estratégia de Aplicação',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 7,
            descricao: 'Complexidade do Negócio',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 7,
            descricao: 'Integração Back-end',
            ordem: 3,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 8,
            descricao: 'Volume de dados / ingestão por dia',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 8,
            descricao: 'Variedade de dados',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 8,
            descricao: 'Variabilidade de dados (mudança de esquema)',
            ordem: 3,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 8,
            descricao: 'Analytics',
            ordem: 4,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 9,
            descricao: 'Regionais específicos',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 9,
            descricao: 'Específicos da Indústria',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 9,
            descricao: 'Específicos da Tecnologia',
            ordem: 3,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 10,
            descricao: 'Padrões técnicos',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 10,
            descricao: 'Padrões Funcionais/da Indústria',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 11,
            descricao: 'Tempo',
            ordem: 1,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 11,
            descricao: 'Orçamento',
            ordem: 2,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 11,
            descricao: 'Habilidades Funcionais & experiência',
            ordem: 3,
            ativo: 1
        },
        {
            dimensaosubcategoriaid: 11,
            descricao: 'Habilidades Técnicas & experiência',
            ordem: 4,
            ativo: 1
        }
    ], { transaction: t }))
})
    .then(() => {
        Database.closeInstance();
        console.log('\n\nTODOS OS DADOS FORAM INCLUIDOS COM SUCESSO!\n\n');
    })
    .catch(error => console.log(error));