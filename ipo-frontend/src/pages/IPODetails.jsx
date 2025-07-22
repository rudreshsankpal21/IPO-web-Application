import { useEffect, useState } from "react";
import { getIPOById } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Home.css";

function IPODetails() {
  const { id } = useParams();
  const [ipo, setIPO] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIPO = async () => {
      const data = await getIPOById(id);
      setIPO(data);
    };
    fetchIPO();
  }, [id]);

  if (!ipo) return <p style={{ padding: "20px" }}>Loading IPO details...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{ipo.company_name}</h2>
      <p>
        <strong>Price:</strong> ₹{ipo.price}
      </p>
      <p>
        <strong>Open Date:</strong> {ipo.open_date}
      </p>
      <p>
        <strong>Close Date:</strong> {ipo.close_date}
      </p>
      <p>
        <strong>Description:</strong>{" "}
        {ipo.description || "No description available."}
      </p>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default IPODetails;
