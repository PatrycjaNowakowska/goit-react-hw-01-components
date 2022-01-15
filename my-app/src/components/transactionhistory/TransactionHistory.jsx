import "./TransactionHistory.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className="titleRow">Type</th>
          <th className="titleRow">Amount</th>
          <th className="titleRow">Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id} >
            <td className="tableRow">{item.type}</td>
            <td className="tableRow">{item.amount}</td>
            <td className="tableRow">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
