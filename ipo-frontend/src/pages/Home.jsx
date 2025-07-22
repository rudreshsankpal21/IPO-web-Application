import { useEffect, useState } from "react";
import IPOCard from "../components/IPOCard";
import { getAllIPOs, deleteIPO } from "../services/api";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [ipos, setIPOs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadIPOs();
  }, []);

  const loadIPOs = async () => {
    const data = await getAllIPOs();
    setIPOs(data);
  };

  const handleView = (id) => navigate(`/ipo/${id}`);
  const handleEdit = (id) => navigate(`/edit/${id}`);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this IPO?")) {
      await deleteIPO(id);
      loadIPOs();
    }
  };

  const handleAddIPO = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please register or login first!");
      navigate("/register");
    } else {
      navigate("/add");
    }
  };

  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to IPO Tracker</h1>
        <p>Manage upcoming IPOs, track details, and stay updated.</p>
        <button onClick={handleAddIPO}>+ Add New IPO</button>
      </div>

      <div className="ipo-grid">
        {ipos.length === 0 ? (
          <p className="no-data">No IPOs available. Add one now!</p>
        ) : (
          ipos.map((ipo) => (
            <IPOCard
              key={ipo.id}
              ipo={ipo}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
