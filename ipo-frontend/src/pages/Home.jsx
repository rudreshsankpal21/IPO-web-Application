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
    await deleteIPO(id);
    loadIPOs();
  };

  return (
    <div>
      <h1 style={{ padding: "20px" }}>All IPOs</h1>
      <div className="ipo-container">
        {ipos.map((ipo) => (
          <IPOCard
            key={ipo.id}
            ipo={ipo}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
