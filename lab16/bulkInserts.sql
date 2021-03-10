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
