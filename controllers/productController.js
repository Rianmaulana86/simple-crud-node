const mysql = require('../services/mysql');
const { successResponse, errorResponse } = require('../helpers/common');

const listProduct = async (req, res) => {
  const dataproduct = await mysql.query('SELECT * FROM product')
  return res.json(
    successResponse(dataproduct)
  );
}

const detailProduct = async (req, res) => {
  const id = req.params.id
  const dataproduct = await mysql.query('SELECT * FROM product WHERE id = ?', [id])

  if (dataproduct.length == 0) {
    return res.status(400).json(
      errorResponse('data tidak ditemukan')
    )
  }

  return res.json(
    successResponse(dataproduct[0])
  );
}
const addProduct = async (req, res) => {
  // validate request
  const nama = req.body.nama
  const harga = req.body.harga

  if (typeof nama !== 'string' || nama === '') {
    return res.status(400).json(
      errorResponse('kolom nama dibutuhkan')
    )
  }

  if (typeof harga !== 'number' || harga === 0) {
    return res.status(400).json(
      errorResponse('kolom harga dibutuhkan')
    )
  }

  // insert data
  const databuku = await mysql.query('INSERT INTO product(nama_product,harga_product) VALUES(?,?)', [nama,harga])

  return res.json(
    successResponse({
      id: databuku.insertId,
      nama: nama,
      harga: parseInt(harga),
    })
  )
}


module.exports = {
    listProduct,
    detailProduct,
    addProduct
  }