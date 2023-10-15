use shair_V200;

create table Anuncio (InicioAnuncio date not null, FinAnuncio date not null, IdCliente int(10) not null);
create table ArchivoEspacio (FechaEliminacion timestamp not null, MotivoEliminacion varchar(250) not null, IdEspacio int(10) not null);
create table ArchivoUsuario (FechaELiminacion timestamp not null, MotivoELiminacion varchar(250) not null, IdUsuario int(10) not null);
create table Cliente (IdCliente int(10) auto_increment not null primary key, NombreCliente varchar(25) not null, EmailCliente varchar(50) not null, TelefonoCliente varchar(25) not null, DireccionContratoCliente varchar(100) not null, FechaContratoCliente date not null, FechaInicioCliente date not null, IngresosCLiente int(10) not null, PaypalCLiente varchar(100) not null, FechaFinCliente date null, NotasCliente varchar(250) null);
create table Denuncia (DenunciasA varchar(25) null, MotivoDenunciaA varchar(250) null, MotivoDenunciado varchar (250), IdUsuario int(10) not null);
create table Espacio (IdEspacio int(10) auto_increment not null primary key, NombreEspacio varchar(25) not null, DescripcionEspacio varchar(100) null, DireccionEspacio varchar(100) not null, FechaCreacion timestamp not null, IdUsuario int(10) not null);
create table Facturacion (InicioMembresia date not null, FechaPago date not null, CantidadPago int(10) not null, FinMembresia date not null, NivelMembresia int(2) not null);
create table foro (MensajesDestacados varchar(250) null, Mensaje varchar(250) null, NivelMembresia int(2) not null);
create table miembro (NivelMembresia int(2) not null primary key, PerfilPaypal varchar(100) not null, IdUsuario int(10) not null);
create table ResponsableShair (IdResponsableShair int(10) auto_increment not null primary key, NombreResponsableShair varchar(25) not null, EmailResponsableShair varchar(50) not null, ContraseñaResponsableShair varchar(50) not null, TelefonoResponsableShair varchar(25) not null, FechaNacimientoResponsableShair date not null, DireccionResponsableShair varchar(100) not null, CargoResponsableShair varchar(50) not null, FechaContratacionResponsableShair date not null, HoraInicioResponsableShair time not null, HoraFinResponsableShair time not null, SueldoResponsableShair int(10) not null, FechaDespidoResponsableShair date null, MotivoDespidoResponsableShair varchar(250) null, PerfilPaypalResponsableShair varchar(100) not null, NotasResponsableShair varchar(250) null);
create table Usuario (IdUsuario int(10) auto_increment not null primary key, Nombre varchar(25) not null, NombreUsuario varchar(50) not null, EmailUsuario varchar(50) not null, ContraseñaUsuario varchar(50) not null, DescripcionUsuario varchar(100) null, PerfilImagenUsuario varchar(100) null);

alter table Anuncio add DireccionAnuncio varchar(100) not null;
alter table Anuncio add foreign key (IdCliente) references Cliente (IdCliente);
alter table ArchivoEspacio add foreign key (IdEspacio) references Espacio (IdEspacio);
alter table ArchivoUsuario add foreign key (IdUsuario) references Usuario (IdUsuario);
alter table Denuncia add foreign key (IdUsuario) references Usuario (IdUsuario);
alter table Espacio add foreign key (IdUsuario) references Usuario (IdUsuario);
alter table Facturacion add foreign key (NivelMembresia) references Miembro (NivelMembresia);
alter table Foro add foreign key (NivelMembresia) references Miembro (NivelMembresia);
alter table Miembro add foreign key (IdUsuario) references Usuario (IdUsuario);
