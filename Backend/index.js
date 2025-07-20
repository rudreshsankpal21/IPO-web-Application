require("dotenv").config();
const express = require("express");
const ipoRoutes = require("./routes/ipoRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/ipos", ipoRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
