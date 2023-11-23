USE shair_v200;

CREATE TABLE Anuncio (
    InicioAnuncio DATE NOT NULL,
    FinAnuncio DATE NOT NULL,
    IdCliente INT(10) NOT NULL
);
CREATE TABLE ArchivoEspacio (
    FechaEliminacion TIMESTAMP NOT NULL,
    MotivoEliminacion VARCHAR(500) NOT NULL,
    IdEspacio INT(10) NOT NULL
);
CREATE TABLE ArchivoUsuario (
    FechaELiminacion TIMESTAMP NOT NULL,
    MotivoELiminacion VARCHAR(500) NOT NULL,
    IdUsuario INT(10) NOT NULL
);
CREATE TABLE Cliente (
    IdCliente INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    NombreCliente VARCHAR(50) NOT NULL,
    EmailCliente VARCHAR(100) NOT NULL,
    TelefonoCliente VARCHAR(25) NULL,
    DireccionContratoCliente VARCHAR(250) NULL,
    FechaContratoCliente DATE NOT NULL,
    FechaInicioCliente DATE NOT NULL,
    IngresosCLiente INT(50) NULL,
    PaypalCLiente VARCHAR(250) NOT NULL,
    FechaFinCliente DATE NULL,
    NotasCliente VARCHAR(500) NULL
);
CREATE TABLE Denuncia (
    DenunciasA VARCHAR(50) NULL,
    MotivoDenunciaA VARCHAR(500) NULL,
    MotivoDenunciado VARCHAR(500),
    IdUsuario INT(10) NOT NULL
);
CREATE TABLE Espacio (
    IdEspacio INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    NombreEspacio VARCHAR(50) NOT NULL,
    DescripcionEspacio VARCHAR(500) NULL,
    DireccionEspacio VARCHAR(250) NULL,
    FechaCreacion TIMESTAMP NOT NULL,
    IdUsuario INT(10) NOT NULL
);
CREATE TABLE Facturacion (
    InicioMembresia DATE NOT NULL,
    FechaPago DATE NOT NULL,
    CantidadPago INT(10) NOT NULL,
    FinMembresia DATE NOT NULL,
    NivelMembresia INT(2) NOT NULL
);
CREATE TABLE foro (
    MensajesDestacados VARCHAR(500) NULL,
    Mensaje VARCHAR(500) NULL,
    NivelMembresia INT(2) NOT NULL
);
CREATE TABLE miembro (
    NivelMembresia INT(2) NOT NULL PRIMARY KEY,
    PerfilPaypal VARCHAR(500) NOT NULL,
    IdUsuario INT(10) NOT NULL
);
CREATE TABLE ResponsableShair (
    IdResponsableShair INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    NombreResponsableShair VARCHAR(50) NOT NULL,
    EmailResponsableShair VARCHAR(100) NOT NULL,
    ContraseñaResponsableShair VARCHAR(100) NOT NULL,
    TelefonoResponsableShair VARCHAR(25) NULL,
    FechaNacimientoResponsableShair DATE NOT NULL,
    DireccionResponsableShair VARCHAR(100) NULL,
    CargoResponsableShair VARCHAR(50) NOT NULL,
    FechaContratacionResponsableShair DATE NOT NULL,
    HoraInicioResponsableShair TIME NOT NULL,
    HoraFinResponsableShair TIME NOT NULL,
    SueldoResponsableShair INT(10) NOT NULL,
    FechaDespidoResponsableShair DATE NULL,
    MotivoDespidoResponsableShair VARCHAR(500) NULL,
    PerfilPaypalResponsableShair VARCHAR(250) NOT NULL,
    NotasResponsableShair VARCHAR(500) NULL
);
CREATE TABLE Usuario (
    IdUsuario INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    NombreUsuario VARCHAR(50) NOT NULL,
    EmailUsuario VARCHAR(100) NOT NULL,
    ContraseñaUsuario VARCHAR(100) NOT NULL,
    DescripcionUsuario VARCHAR(500) NULL,
    PerfilImagenUsuario VARCHAR(100) NULL
);

ALTER TABLE Anuncio ADD DireccionAnuncio VARCHAR(100) NOT NULL;
ALTER TABLE Anuncio ADD FOREIGN KEY (IDCliente) REFERENCES Cliente (IDCliente);
ALTER TABLE ArchivoEspacio ADD FOREIGN KEY (IDEspacio) REFERENCES Espacio (IDEspacio);
ALTER TABLE ArchivoUsuario ADD FOREIGN KEY (IDUsuario) REFERENCES Usuario (IDUsuario);
ALTER TABLE Denuncia ADD FOREIGN KEY (IDUsuario) REFERENCES Usuario (IDUsuario);
ALTER TABLE Espacio ADD FOREIGN KEY (IDUsuario) REFERENCES Usuario (IDUsuario);
ALTER TABLE Facturacion ADD FOREIGN KEY (NIvelMembresia) REFERENCES Miembro (NIvelMembresia);
ALTER TABLE Foro ADD FOREIGN KEY (NIvelMembresia) REFERENCES Miembro (NIvelMembresia);
ALTER TABLE Miembro ADD FOREIGN KEY (IDUsuario) REFERENCES Usuario (IDUsuario);