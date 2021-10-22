// import express from 'express'

const { sql, poolPromise } = require('../database/db')

class TienditaController {

  async getItems(req, res) {
    try {
      const pool = await poolPromise
      const result = await pool.request()
        .query("exec getItems")
      res.json(result.recordset)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

  async addItem(req, res) {
    try {
      const pool = await poolPromise
      const result = await pool.request()
      .input('itemID',sql.VarChar, req.body.itemID)
      .input('descripcion',sql.VarChar, req.body.descripcion)
      .input('costo',sql.VarChar, req.body.costo)
      .input('liga_foto_item',sql.VarChar, req.body.liga_foto_item)
      .input('cantidad',sql.VarChar, req.body.cantidad)
        .query("exec addItem @itemID= @itemID, @descripcion = @descripcion, @costo = @costo, @liga_foto_item = @liga_foto_item, @cantidad = @cantidad")
      res.json(result.recordset)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }
}

const tienditaController = new TienditaController()
module.exports = tienditaController;