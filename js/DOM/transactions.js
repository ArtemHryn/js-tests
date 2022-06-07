import transactions from "../../data/transaction.js";

//  <tbody>
//    <tr>
//      <td>ID транзакции</td>
//      <td>Сумма</td>
//      <td>Дата</td>
//      <td>Кто</td>
//      <td>Тип транзации</td>
//      <td>Имя счёта</td>
//      <td>Номер счёта</td>
//    </tr>
//  </tbody>


const makeTransactionMarkUp = (transaction) => {
  const { id, amount, date, business, type, name, account } = transaction;
  return `
    <tbody>
        <tr>
            <td>${id}</td>
            <td>${amount}</td>
            <td>${date}</td>
            <td>${business}</td>
            <td>${type}</td>
            <td>${name}</td>
            <td>${account}</td>
        </tr>
    </tbody>
    `;
};

const tableArray = transactions.map(makeTransactionMarkUp).join('')

const tableBody = document.querySelector(".js-transaction-table");

console.log(tableArray);

tableBody.insertAdjacentHTML("beforeend", tableArray)