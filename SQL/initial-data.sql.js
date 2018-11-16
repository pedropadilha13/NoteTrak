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
        .then(() => ProjetosDimensoes.bulkCreate([
            {
                projetoid: 1,
                dimensaoid: 1,
                nivel: 1,
                descricao: '100s'
            },
            {
                projetoid: 1,
                dimensaoid: 1,
                nivel: 2,
                descricao: '10.000s'
            },
            {
                projetoid: 1,
                dimensaoid: 1,
                nivel: 3,
                descricao: '100.000s'
            },
            {
                projetoid: 1,
                dimensaoid: 1,
                nivel: 4,
                descricao: 'Milhões'
            },
            {
                projetoid: 1,
                dimensaoid: 2,
                nivel: 1,
                descricao: '< R$ 500'
            },
            {
                projetoid: 1,
                dimensaoid: 2,
                nivel: 2,
                descricao: '< R$ 5.000'
            },
            {
                projetoid: 1,
                dimensaoid: 2,
                nivel: 3,
                descricao: '< R$ 500.000'
            },
            {
                projetoid: 1,
                dimensaoid: 2,
                nivel: 4,
                descricao: '>= R$ 500.000'
            },
            {
                projetoid: 1,
                dimensaoid: 3,
                nivel: 1,
                descricao: '< R$ 500'
            },
            {
                projetoid: 1,
                dimensaoid: 4,
                nivel: 1,
                descricao: 'Zero integração'
            },
            {
                projetoid: 1,
                dimensaoid: 4,
                nivel: 2,
                descricao: 'Interface semântica simples'
            },
            {
                projetoid: 1,
                dimensaoid: 4,
                nivel: 3,
                descricao: 'Interface semântica moderadamente complexa'
            },
            {
                projetoid: 1,
                dimensaoid: 4,
                nivel: 4,
                descricao: 'Interface semântica bastante complexa'
            },
            {
                projetoid: 1,
                dimensaoid: 5,
                nivel: 1,
                descricao: '0-1 tipos de interface'
            },
            {
                projetoid: 1,
                dimensaoid: 5,
                nivel: 2,
                descricao: '2-3 diferentes tipos de interface (inc. versões e variantes)'
            },
            {
                projetoid: 1,
                dimensaoid: 5,
                nivel: 3,
                descricao: '4-10 diferentes tipos de interfaces'
            },
            {
                projetoid: 1,
                dimensaoid: 5,
                nivel: 4,
                descricao: '> 10 diferentes tipos de interfaces'
            },
            {
                projetoid: 1,
                dimensaoid: 6,
                nivel: 1,
                descricao: 'Apenas funções Proxy'
            },
            {
                projetoid: 1,
                dimensaoid: 6,
                nivel: 2,
                descricao: 'Lógica básica de armazenamento e encaminhamento para tratar a Indisponibilidade temporária da Rede'
            },
            {
                projetoid: 1,
                dimensaoid: 6,
                nivel: 3,
                descricao: 'Lógica de negócio simples, e.g. Regras'
            },
            {
                projetoid: 1,
                dimensaoid: 6,
                nivel: 4,
                descricao: 'Lógica de negócio complexa, e.g. Gerenciamento autônomo do ativo'
            },
            {
                projetoid: 1,
                dimensaoid: 7,
                nivel: 1,
                descricao: '1 evento / dia'
            },
            {
                projetoid: 1,
                dimensaoid: 7,
                nivel: 2,
                descricao: '1 evento / minuto'
            },
            {
                projetoid: 1,
                dimensaoid: 7,
                nivel: 3,
                descricao: '1 evento / segundo'
            },
            {
                projetoid: 1,
                dimensaoid: 8,
                nivel: 1,
                descricao: 'Sincronização diária em lote'
            },
            {
                projetoid: 1,
                dimensaoid: 8,
                nivel: 2,
                descricao: 'Respostas em segundos'
            },
            {
                projetoid: 1,
                dimensaoid: 8,
                nivel: 3,
                descricao: 'Resposta dentro do sub-segundo'
            },
            {
                projetoid: 1,
                dimensaoid: 8,
                nivel: 4,
                descricao: 'Resposta deterministica em nano-segundos'
            },
            {
                projetoid: 1,
                dimensaoid: 9,
                nivel: 1,
                descricao: '<1MB armazenado e gerenciado localmente / ano'
            },
            {
                projetoid: 1,
                dimensaoid: 9,
                nivel: 2,
                descricao: '<10 GB/ano'
            },
            {
                projetoid: 1,
                dimensaoid: 9,
                nivel: 3,
                descricao: '<1 TB/ano'
            },
            {
                projetoid: 1,
                dimensaoid: 9,
                nivel: 4,
                descricao: '> 1 TB capturado por ativo /ano'
            },
            {
                projetoid: 1,
                dimensaoid: 10,
                nivel: 1,
                descricao: '"tomada elétrica“'
            },
            {
                projetoid: 1,
                dimensaoid: 10,
                nivel: 2,
                descricao: 'Bateria carregada automaticamente (e.g. carro)'
            },
            {
                projetoid: 1,
                dimensaoid: 10,
                nivel: 3,
                descricao: 'Bateria grande com duração moderada'
            },
            {
                projetoid: 1,
                dimensaoid: 10,
                nivel: 4,
                descricao: 'Bateria pequena com duração muito longa (sem auto-recarga)'
            },
            {
                projetoid: 1,
                dimensaoid: 11,
                nivel: 1,
                descricao: 'Interno'
            },
            {
                projetoid: 1,
                dimensaoid: 11,
                nivel: 2,
                descricao: 'Interno severo, (e.g. Fábrica)/Externo'
            },
            {
                projetoid: 1,
                dimensaoid: 11,
                nivel: 3,
                descricao: 'Externo, em movimento (e.g. carro)'
            },
            {
                projetoid: 1,
                dimensaoid: 11,
                nivel: 4,
                descricao: 'Condições extremas, (e.g. aeronave, espaço)'
            },
            {
                projetoid: 1,
                dimensaoid: 12,
                nivel: 1,
                descricao: '< 1 ano'
            },
            {
                projetoid: 1,
                dimensaoid: 12,
                nivel: 2,
                descricao: '~ 5 anos'
            },
            {
                projetoid: 1,
                dimensaoid: 12,
                nivel: 3,
                descricao: '~ 10 anos'
            },
            {
                projetoid: 1,
                dimensaoid: 12,
                nivel: 4,
                descricao: '> 20 anos'
            },
            {
                projetoid: 1,
                dimensaoid: 13,
                nivel: 1,
                descricao: 'Todos os ativos podem ser acessados por um técnico especializado a tempo, sem grande custo'
            },
            {
                projetoid: 1,
                dimensaoid: 13,
                nivel: 2,
                descricao: 'Relativo esforço e custo para técnico acessar os ativos'
            },
            {
                projetoid: 1,
                dimensaoid: 13,
                nivel: 3,
                descricao: 'Configuração do ativo deve ser atualizada pelo usuário final/alto custo para trazer o ativo para reparo na oficina'
            },
            {
                projetoid: 1,
                dimensaoid: 13,
                nivel: 4,
                descricao: 'Impossivel de atualizar o HW'
            },
            {
                projetoid: 1,
                dimensaoid: 14,
                nivel: 1,
                descricao: 'Gerenciamento central, ativos sempre online, largura de banda suficiente, desligamento para manutenção é OK'
            },
            {
                projetoid: 1,
                dimensaoid: 14,
                nivel: 2,
                descricao: 'Restrições normais para sistemas distribuidos, e.g. Nem todos ao mesmo tempo (versões paralelas por um longo período)'
            },
            {
                projetoid: 1,
                dimensaoid: 14,
                nivel: 3,
                descricao: 'Muito difícil - longos tempos entre atualizações, e.g. apenas iniciado pelo usuário (e.g. usuário tem que pro-ativamente iniciar a atualização)'
            },
            {
                projetoid: 1,
                dimensaoid: 14,
                nivel: 4,
                descricao: 'Impossível de atualizar SW'
            },
            {
                projetoid: 1,
                dimensaoid: 15,
                nivel: 1,
                descricao: 'Sistema Bus Padrão'
            },
            {
                projetoid: 1,
                dimensaoid: 15,
                nivel: 2,
                descricao: 'Wireless Padrão'
            },
            {
                projetoid: 1,
                dimensaoid: 15,
                nivel: 3,
                descricao: 'Wireless avançado, e.g. Chão de fábrica'
            },
            {
                projetoid: 1,
                dimensaoid: 15,
                nivel: 4,
                descricao: 'Wireless muito avançado, e.g. Requerimento de antena especializada, requerimentos especiais de segurança, etc.'
            },
            {
                projetoid: 1,
                dimensaoid: 16,
                nivel: 1,
                descricao: '100 bytes/s'
            },
            {
                projetoid: 1,
                dimensaoid: 16,
                nivel: 2,
                descricao: '100 Kbits/s (e.g. RS 485, RS 232, CAN)'
            },
            {
                projetoid: 1,
                dimensaoid: 16,
                nivel: 3,
                descricao: '1-10 Mbit/s (e.g. vídeo)'
            },
            {
                projetoid: 1,
                dimensaoid: 16,
                nivel: 4,
                descricao: '>100 Mbit/s (e.g. Fluxo de dados de sensor)'
            },
            {
                projetoid: 1,
                dimensaoid: 17,
                nivel: 1,
                descricao: '>10 ms (e.g. RS 232)'
            },
            {
                projetoid: 1,
                dimensaoid: 17,
                nivel: 2,
                descricao: '1-10 ms (e.g. WLAN, BlueTooth)'
            },
            {
                projetoid: 1,
                dimensaoid: 17,
                nivel: 3,
                descricao: 'µ seg (e.g. EtherCAT, Sercos)'
            },
            {
                projetoid: 1,
                dimensaoid: 17,
                nivel: 4,
                descricao: 'ns (e.g. ASIC, FPGA)'
            },
            {
                projetoid: 1,
                dimensaoid: 18,
                nivel: 1,
                descricao: 'LAN'
            },
            {
                projetoid: 1,
                dimensaoid: 18,
                nivel: 2,
                descricao: 'WLAN'
            },
            {
                projetoid: 1,
                dimensaoid: 18,
                nivel: 3,
                descricao: 'Rede Global de Telecom (e.g. UMTS)'
            },
            {
                projetoid: 1,
                dimensaoid: 18,
                nivel: 4,
                descricao: 'Rede global de telecom especializada (e.g. Satélite, rede wireless proprietária, etc)'
            },
            {
                projetoid: 1,
                dimensaoid: 19,
                nivel: 1,
                descricao: '100 bytes/s'
            },
            {
                projetoid: 1,
                dimensaoid: 19,
                nivel: 2,
                descricao: '100-500 Kbit/s (e.g. GPRS)'
            },
            {
                projetoid: 1,
                dimensaoid: 19,
                nivel: 3,
                descricao: '0,5-10 Mbit/s (e.g. UMTS/LT)'
            },
            {
                projetoid: 1,
                dimensaoid: 19,
                nivel: 4,
                descricao: '>100 Mbit/s'
            },
            {
                projetoid: 1,
                dimensaoid: 20,
                nivel: 1,
                descricao: '90 Min (LEO, e.g. OrbComm; mensagens de texto)'
            },
            {
                projetoid: 1,
                dimensaoid: 20,
                nivel: 2,
                descricao: 'segundos (GPRS)'
            },
            {
                projetoid: 1,
                dimensaoid: 20,
                nivel: 3,
                descricao: 'mili segundos (WAN)'
            },
            {
                projetoid: 1,
                dimensaoid: 20,
                nivel: 4,
                descricao: 'micro segundos (e.g. LAN)'
            },
            {
                projetoid: 1,
                dimensaoid: 21,
                nivel: 1,
                descricao: 'Nenhuma nova lógica na aplicação'
            },
            {
                projetoid: 1,
                dimensaoid: 21,
                nivel: 2,
                descricao: 'Incorporar nova lógica de negócios em aplicativos principais já existentes (por exemplo, ERP)'
            },
            {
                projetoid: 1,
                dimensaoid: 21,
                nivel: 3,
                descricao: 'Aplicativo pequeno, novo e autocontido'
            },
            {
                projetoid: 1,
                dimensaoid: 21,
                nivel: 4,
                descricao: 'Novo aplicativo principal (por exemplo, aplicação significativa com propriedade de dados e processos chave)'
            },
            {
                projetoid: 1,
                dimensaoid: 22,
                nivel: 1,
                descricao: 'Atualizações regulares de 3-5 leituras de dispositivos remotos no ERP, apenas monitoramento remoto'
            },
            {
                projetoid: 1,
                dimensaoid: 22,
                nivel: 2,
                descricao: 'Mais atualizações regulares, algumas funções de alarme'
            },
            {
                projetoid: 1,
                dimensaoid: 22,
                nivel: 3,
                descricao: 'Um novo processo fim-a-fim principal, e.g. comissionamento de produto'
            },
            {
                projetoid: 1,
                dimensaoid: 22,
                nivel: 4,
                descricao: '> 5 novos processos principais fim-a-fim, e.g. comissionamento, customer service, retenção de clientes, up-selling, etc.'
            },
            {
                projetoid: 1,
                dimensaoid: 23,
                nivel: 1,
                descricao: 'Muito simples, e.g. lote, formulários em papel (integração manual)'
            },
            {
                projetoid: 1,
                dimensaoid: 23,
                nivel: 2,
                descricao: 'EAI básico'
            },
            {
                projetoid: 1,
                dimensaoid: 23,
                nivel: 3,
                descricao: 'SOA com 2-3 serviços de orquestração complexos'
            },
            {
                projetoid: 1,
                dimensaoid: 23,
                nivel: 4,
                descricao: 'SOA ou EAI com >20 orquestrações'
            },
            {
                projetoid: 1,
                dimensaoid: 24,
                nivel: 1,
                descricao: '<10 MB/dia'
            },
            {
                projetoid: 1,
                dimensaoid: 24,
                nivel: 2,
                descricao: '<10 GB/dia'
            },
            {
                projetoid: 1,
                dimensaoid: 24,
                nivel: 3,
                descricao: '<1 TB/dia'
            },
            {
                projetoid: 1,
                dimensaoid: 24,
                nivel: 4,
                descricao: '>1 TB/dia'
            },
            {
                projetoid: 1,
                dimensaoid: 25,
                nivel: 1,
                descricao: '3 tipos de entidades'
            },
            {
                projetoid: 1,
                dimensaoid: 25,
                nivel: 2,
                descricao: '<10 tipos de entidades'
            },
            {
                projetoid: 1,
                dimensaoid: 25,
                nivel: 3,
                descricao: '<100 tipos de entidades'
            },
            {
                projetoid: 1,
                dimensaoid: 25,
                nivel: 4,
                descricao: '>100 tipos de entidades'
            },
            {
                projetoid: 1,
                dimensaoid: 26,
                nivel: 1,
                descricao: 'Modelo de dados estático'
            },
            {
                projetoid: 1,
                dimensaoid: 26,
                nivel: 2,
                descricao: '2 por ano'
            },
            {
                projetoid: 1,
                dimensaoid: 26,
                nivel: 3,
                descricao: '<1 por mês'
            },
            {
                projetoid: 1,
                dimensaoid: 26,
                nivel: 4,
                descricao: '>1 por mês'
            },
            {
                projetoid: 1,
                dimensaoid: 27,
                nivel: 1,
                descricao: 'Sem analytics'
            },
            {
                projetoid: 1,
                dimensaoid: 27,
                nivel: 2,
                descricao: 'Analytics descritivo:  pre-definido, relatórios padrão, navegação simples'
            },
            {
                projetoid: 1,
                dimensaoid: 27,
                nivel: 3,
                descricao: 'Analytics complexo / data mining / Controle de qualidade de dados complexo'
            },
            {
                projetoid: 1,
                dimensaoid: 27,
                nivel: 4,
                descricao: 'Analytics preditivo, analytics de fluxo, CEP, machine learning adaptativo avançado'
            },
            {
                projetoid: 1,
                dimensaoid: 28,
                nivel: 1,
                descricao: 'Nenhum'
            },
            {
                projetoid: 1,
                dimensaoid: 28,
                nivel: 2,
                descricao: 'Baixo'
            },
            {
                projetoid: 1,
                dimensaoid: 28,
                nivel: 3,
                descricao: 'Médio'
            },
            {
                projetoid: 1,
                dimensaoid: 28,
                nivel: 4,
                descricao: 'Complexo'
            },
            {
                projetoid: 1,
                dimensaoid: 29,
                nivel: 1,
                descricao: 'Nenhum'
            },
            {
                projetoid: 1,
                dimensaoid: 29,
                nivel: 2,
                descricao: 'Baixo'
            },
            {
                projetoid: 1,
                dimensaoid: 29,
                nivel: 3,
                descricao: 'Médio'
            },
            {
                projetoid: 1,
                dimensaoid: 29,
                nivel: 4,
                descricao: 'Complexo'
            },
            {
                projetoid: 1,
                dimensaoid: 30,
                nivel: 1,
                descricao: 'Nenhum'
            },
            {
                projetoid: 1,
                dimensaoid: 30,
                nivel: 2,
                descricao: 'Baixo'
            },
            {
                projetoid: 1,
                dimensaoid: 30,
                nivel: 3,
                descricao: 'Médio'
            },
            {
                projetoid: 1,
                dimensaoid: 30,
                nivel: 4,
                descricao: 'Complexo'
            },
            {
                projetoid: 1,
                dimensaoid: 31,
                nivel: 1,
                descricao: 'Nenhum'
            },
            {
                projetoid: 1,
                dimensaoid: 31,
                nivel: 2,
                descricao: 'Alguns prerequisitos para HW M2M, Bus-Systems, Application APIs, Protocolos de Comunicação'
            },
            {
                projetoid: 1,
                dimensaoid: 31,
                nivel: 3,
                descricao: 'Requerimentos relativamente altos para HW M2M, Bus-Systems, Application APIs, Protocolos de Comunicação'
            },
            {
                projetoid: 1,
                dimensaoid: 31,
                nivel: 4,
                descricao: 'Prerequisitos bastante restritos para HW M2M, Bus-Systems, Application APIs, Protocolos de Comunicação'
            },
            {
                projetoid: 1,
                dimensaoid: 32,
                nivel: 1,
                descricao: 'Nenhum'
            },
            {
                projetoid: 1,
                dimensaoid: 32,
                nivel: 2,
                descricao: 'Alguns prerequisitos para HW M2M, Bus-Systems, Application APIs, Protocolos de Comunicação'
            },
            {
                projetoid: 1,
                dimensaoid: 32,
                nivel: 3,
                descricao: 'Requerimentos relativamente altos para HW M2M, Bus-Systems, Application APIs, Protocolos de Comunicação'
            },
            {
                projetoid: 1,
                dimensaoid: 32,
                nivel: 4,
                descricao: 'Prerequisitos bastante restritos para HW M2M, Bus-Systems, Application APIs, Protocolos de Comunicação'
            },
            {
                projetoid: 1,
                dimensaoid: 33,
                nivel: 1,
                descricao: 'muito tempo'
            },
            {
                projetoid: 1,
                dimensaoid: 33,
                nivel: 2,
                descricao: 'design a orçamento'
            },
            {
                projetoid: 1,
                dimensaoid: 33,
                nivel: 3,
                descricao: 'agressivo'
            },
            {
                projetoid: 1,
                dimensaoid: 33,
                nivel: 3,
                descricao: '"marcha da morte"'
            },
            {
                projetoid: 1,
                dimensaoid: 34,
                nivel: 1,
                descricao: 'Generoso'
            },
            {
                projetoid: 1,
                dimensaoid: 34,
                nivel: 2,
                descricao: 'Realistico'
            },
            {
                projetoid: 1,
                dimensaoid: 34,
                nivel: 3,
                descricao: 'Otimista'
            },
            {
                projetoid: 1,
                dimensaoid: 34,
                nivel: 4,
                descricao: 'Irrealista e insuficiente'
            },
            {
                projetoid: 1,
                dimensaoid: 35,
                nivel: 1,
                descricao: 'Equipe existente, já fez projeto semelhante antes'
            },
            {
                projetoid: 1,
                dimensaoid: 35,
                nivel: 2,
                descricao: 'Como 1, porém geograficamente distribuido'
            },
            {
                projetoid: 1,
                dimensaoid: 35,
                nivel: 3,
                descricao: 'Equipe completamente nova, membros com pouca experiencia funcional na área'
            },
            {
                projetoid: 1,
                dimensaoid: 35,
                nivel: 4,
                descricao: 'Como 3 + distribuído'
            },
            {
                projetoid: 1,
                dimensaoid: 36,
                nivel: 1,
                descricao: 'Equipe existente, já fez projeto semelhante antes'
            },
            {
                projetoid: 1,
                dimensaoid: 36,
                nivel: 2,
                descricao: 'Como 1, porém geograficamente distribuido'
            },
            {
                projetoid: 1,
                dimensaoid: 36,
                nivel: 3,
                descricao: 'Equipe completamente nova, membros com pouca experiencia funcional na área'
            },
            {
                projetoid: 1,
                dimensaoid: 36,
                nivel: 4,
                descricao: 'Como 3 + distribuído'
            }
        ], { transaction: t }));
})
    .then(() => {
        Database.closeInstance();
        console.log('\n\nTODOS OS DADOS FORAM INCLUIDOS COM SUCESSO!\n\n');
    })
    .catch(error => console.log(error));