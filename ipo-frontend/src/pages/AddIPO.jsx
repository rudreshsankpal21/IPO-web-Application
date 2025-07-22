import { useState } from "react";
import { addIPO } from "../services/api";
import "../styles/Form.css";
import { useNavigate } from "react-router-dom";

function AddIPO() {
  const [form, setForm] = useState({
    company_name: "",
    price: "",
    open_date: "",
    close_date: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addIPO(form);
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Add IPO</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="company_name"
          placeholder="Company Name"
          onChange={handleChange}
        />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input
          name="open_date"
          placeholder="Open Date (YYYY-MM-DD)"
          onChange={handleChange}
        />
        <input
          name="close_date"
          placeholder="Close Date (YYYY-MM-DD)"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddIPO;
