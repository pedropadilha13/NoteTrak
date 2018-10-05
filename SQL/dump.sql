CREATE TABLE StatusProjetos(
    statusprojetoid INT IDENTITY PRIMARY KEY,
    descricao VARCHAR(255),
    ordem INT
);

CREATE TABLE Projetos(
    projetoid INT IDENTITY PRIMARY KEY,
    statusprojetoid INT REFERENCES StatusProjetos(statusprojetoid),
    nome VARCHAR(255),
    empresa VARCHAR(255),
    nomecontato VARCHAR(255),
    comentarios VARCHAR(510)
);

CREATE TABLE PerguntasCategorias(
    perguntacategoriaid INT IDENTITY PRIMARY KEY,
    descricao VARCHAR(255),
    ordem INT
);

CREATE TABLE Perguntas(
    perguntaid INT IDENTITY PRIMARY KEY,
    perguntacategoriaid INT REFERENCES PerguntasCategorias(perguntacategoriaid),
    descricao VARCHAR(255),
    ordem INT
);

CREATE TABLE ProjetosPerguntas(
    projetoperguntaid INT IDENTITY PRIMARY KEY,
    perguntaid INT REFERENCES Perguntas(perguntaid),
    projetoid INT REFERENCES Projetos(projetoid),
    resposta TINYINT
);

CREATE TABLE DimensoesCategorias(
    dimensaocategoriaid INT IDENTITY PRIMARY KEY,
    descricao VARCHAR(255),
    ordem INT
);

CREATE TABLE DimensoesSubcategorias(
    dimensaosubcategoriaid INT IDENTITY PRIMARY KEY,
    dimensaocategoriaid INT REFERENCES DimensoesCategorias(dimensaocategoriaid),
    descricao VARCHAR(255),
    ordem INT
);

CREATE TABLE Dimensoes(
    dimensaoid INT IDENTITY PRIMARY KEY,
    dimensaosubcategoriaid INT REFERENCES DimensoesSubcategorias(dimensaosubcategoriaid),
    descricao VARCHAR(255),
    ordem INT
);

CREATE TABLE ProjetosDimensoes(
    projetodimensaoid INT IDENTITY PRIMARY KEY,
    dimensaoid INT REFERENCES Dimensoes(dimensaoid),
    projetoid INT REFERENCES Projetos(projetoid),
    nivel TINYINT,
    ordem INT
);

CREATE TABLE ProjetosDimensoesValores(
    templateid INT IDENTITY PRIMARY KEY,
    projetoid INT REFERENCES Projetos(projetoid),
    dimensaoid INT REFERENCES Dimensoes(dimensaoid),
    nivel TINYNT
);
