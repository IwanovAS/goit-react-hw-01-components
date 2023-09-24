import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.items}>
        {items.map((item) => (
          <tr className={css.table} key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );