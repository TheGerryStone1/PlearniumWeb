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
}

const tienditaController = new TienditaController()
module.exports = tienditaController;