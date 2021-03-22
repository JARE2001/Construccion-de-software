IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')
  DROP TABLE Entregan
  CREATE TABLE Entregan
  (
    Clave numeric(5) not null,
    RFC char(13) not null,
    Numero numeric(5) not null,
    Fecha DateTime not null,
    Cantidad numeric (8,2)
  )
  
  IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')

  DROP TABLE Materiales

  CREATE TABLE Materiales
  (
    Clave numeric(5) not null,
    Descripcion varchar(50),
    Costo numeric (8,2)
  )
  IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')
  DROP TABLE Proveedores
  CREATE TABLE Proveedores
  (
    RFC char(13) not null,
    RazonSocial varchar(50)
  )
  IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')
  DROP TABLE  Proyectos
  CREATE TABLE Proyectos
  (
    Numero numeric(5) not null,
    Denominacion varchar(50)
  )

  BULK INSERT a1701350.a1701350.[Materiales]
   FROM 'e:\wwwroot\a1701350\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

BULK INSERT a1701350.a1701350.[Proveedores]
   FROM 'e:\wwwroot\a1701350\proveedores.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

BULK INSERT a1701350.a1701350.[Proyectos]
   FROM 'e:\wwwroot\a1701350\proyectos.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SET DATEFORMAT dmy

BULK INSERT a1701350.a1701350.[Entregan]
   FROM 'e:\wwwroot\a1701350\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )


ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)
ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC)
ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero)
ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY (Clave,RFC,Numero,Fecha)

ALTER TABLE entregan add constraint cfentreganclave
foreign key (clave) references materiales(clave);
ALTER TABLE entregan add constraint cfentreganRFC
foreign key (RFC) references proveedores(RFC);
ALTER TABLE entregan add constraint cfentreganNumero
foreign key (Numero) references Proyectos(Numero);

ALTER TABLE entregan add constraint cantidad check (cantidad > 0) ;