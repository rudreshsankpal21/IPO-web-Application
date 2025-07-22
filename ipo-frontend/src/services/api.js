const BASE_URL = "http://localhost:3000/api";

// Function to set headers with JWT token if logged in
const getHeaders = () => {
  const token = localStorage.getItem("token");
  return token
    ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
    : { "Content-Type": "application/json" };
};

// Get all IPOs
export const getAllIPOs = async () => {
  try {
    const res = await fetch(`${BASE_URL}/ipos`, {
      headers: getHeaders(),
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching IPOs:", error);
    return [];
  }
};

// Get IPO by ID
export const getIPOById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/ipos/${id}`, {
      headers: getHeaders(),
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching IPO:", error);
    return null;
  }
};

// Add a new IPO
export const addIPO = async (data) => {
  try {
    await fetch(`${BASE_URL}/ipos`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error adding IPO:", error);
  }
};

// Update IPO by ID
export const updateIPO = async (id, data) => {
  try {
    await fetch(`${BASE_URL}/ipos/${id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error updating IPO:", error);
  }
};

// Delete IPO by ID
export const deleteIPO = async (id) => {
  try {
    await fetch(`${BASE_URL}/ipos/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
  } catch (error) {
    console.error("Error deleting IPO:", error);
  }
};

// ========== AUTH APIs ==========

// Login user
export const loginUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result.token; // Expecting token from backend
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};

// Register user
export const registerUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error) {
    console.error("Register error:", error);
    return null;
  }
};
