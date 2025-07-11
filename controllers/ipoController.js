const pool = require("../config/db");

const getAllIPOs = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM ipos");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { getAllIPOs };
