import { useEffect, useState } from "react";
import { getIPOById, updateIPO } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Form.css";

function EditIPO() {
  const { id } = useParams();
  const [form, setForm] = useState({
    company_name: "",
    price: "",
    open_date: "",
    close_date: "",
  });
  const navigate = useNavigate();

  // Fetch IPO details by ID and fill the form
  useEffect(() => {
    const fetchIPO = async () => {
      const data = await getIPOById(id);
      setForm(data);
    };
    fetchIPO();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateIPO(id, form);
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Edit IPO</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="company_name"
          value={form.company_name}
          placeholder="Company Name"
          onChange={handleChange}
        />
        <input
          name="price"
          value={form.price}
          placeholder="Price"
          onChange={handleChange}
        />
        <input
          name="open_date"
          value={form.open_date}
          placeholder="Open Date (YYYY-MM-DD)"
          onChange={handleChange}
        />
        <input
          name="close_date"
          value={form.close_date}
          placeholder="Close Date (YYYY-MM-DD)"
          onChange={handleChange}
        />
        <button type="submit">Update IPO</button>
      </form>
    </div>
  );
}

export default EditIPO;
