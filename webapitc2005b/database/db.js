const sql = require('mssql')

// Server=tcp:webclass1.database.windows.net,1433;Initial Catalog=web;Persist Security Info=False;User ID=webclass1;Password=tc_2005_b;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;

const config = {
    user: 'adminEquipo7',
    password: 'FiestaOwO!',
    database: 'Plearnium7',
    server: 'plearnium7.database.windows.net',
    options: {
      trustedConnection: true
    }
}
/*const dockerConfig = {
    user: 'sa',
    password: 'tc_2005_b',
    database: 'master',
    server: 'localhost',
    port: 1433,
    options: {
    trustedConnection: true
  }
}*/

let stringConnection = 'Server=tcp:plearnium7.database.windows.net,1433;Initial Catalog=Equipo7;Persist Security Info=False;User ID=adminEquipo7;Password=FiestaOwO!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;'
let dockerStringConnection = 'Server=localhost,1433;Database=master;User ID=sa;Password=tc_2005_b;'
const poolPromise = new sql.ConnectionPool(stringConnection)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}