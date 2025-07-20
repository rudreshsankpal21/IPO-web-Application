const pool = require("../config/db");

// get all ipos
const getAllIPOs = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM ipos");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

// get a single ipo
const getIPO = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM ipos WHERE id = $1", [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

// add new ipo
const addIPO = async (req, res) => {
  try {
    const { company_name, stock_price, no_of_shares } = req.body;
    const result = await pool.query(
      "INSERT INTO ipos (company_name, stock_price, no_of_shares) VALUES ($1, $2, $3) RETURNING *",
      [company_name, stock_price, no_of_shares]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

// update ipo
const updateIPO = async (req, res) => {
  try {
    const { id, company_name, stock_price, no_of_shares } = req.body;
    const result = await pool.query(
      "UPDATE ipos SET company_name = $2, stock_price = $3, no_of_shares = $4 WHERE id = $1 RETURNING *",
      [id, company_name, stock_price, no_of_shares]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

// delete ipo
const deleteIPO = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await pool.query("DELETE FROM ipos WHERE id = $1", [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { getAllIPOs, addIPO, updateIPO, deleteIPO, getIPO };
