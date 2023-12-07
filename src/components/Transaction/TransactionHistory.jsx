import css from './TransactionHistory.module.css';
// import transaction from '../../data/transactions.json';

const TransactionHistory = ({ transaction }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map((item, index) => (
          <tr key={item.id} className={index % 2 === 0 ? css.trtr : css.trtrtr}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
