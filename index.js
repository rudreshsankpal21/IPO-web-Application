require("dotenv").config();
const express = require("express");
const ipoRoutes = require("./routes/ipoRoutes");

const app = express();
app.use(express.json());

app.use("/api/ipos", ipoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
