BULK INSERT rcortese.rcortese.[Materiales]
  FROM 'e:\wwroot\rcortese\materiales.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = ' '
  )

BULK INSERT rcortese.rcortese.[Proyectos]
  FROM 'e:\wwroot\rcortese\Proyectos.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = ' '
  )

BULK INSERT rcortese.rcortese.[Proveedores]
  FROM 'e:\wwroot\rcortese\Proveedores.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = ' '
  )
