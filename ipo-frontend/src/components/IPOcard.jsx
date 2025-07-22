import "./../styles/Home.css";

function IPOCard({ ipo, onView, onEdit, onDelete }) {
  return (
    <div className="ipo-card">
      <h3>{ipo.company_name}</h3>
      <p>
        <strong>Price:</strong> ₹{ipo.price}
      </p>
      <p>
        <strong>Open Date:</strong> {ipo.open_date}
      </p>
      <p>
        <strong>Close Date:</strong> {ipo.close_date}
      </p>
      <div className="card-buttons">
        <button onClick={() => onView(ipo.id)}>View</button>
        <button onClick={() => onEdit(ipo.id)}>Edit</button>
        <button onClick={() => onDelete(ipo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default IPOCard;
