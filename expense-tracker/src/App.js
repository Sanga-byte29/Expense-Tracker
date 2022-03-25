import "./App.css";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTransactions from "./components/NewTransaction";
import Transactions from "./components/Transactions";
import { useState } from "react";

const useStyles = makeStyles({
  header: {
    color: "blue",
    fontSize: 35,
    margin: "10px 0",
    textTransform: "uppercase",
  },
  component: {
    background: "#FFF",
    width: 800,
    padding: 10,
    borderRadius: 20,
    display: "flex",
    "& > *": {
      width: "50%",
      padding: 10,
    },
  },
});
function App() {
  const classes = useStyles();

  const [transactions, setTransactions] = useState([
    { id: 1, text: "Momos", amount: -20 },
    { id: 2, text: "Salary", amount: 3000 },
    { id: 3, text: "Book", amount: -100 },
    { id: 4, text: "Bonus", amount: 1500 },
  ]);

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };
  const addTransaction = (transaction) => {
    setTransactions((transactions) => [transaction, ...transactions]);
  };

  return (
    <div className="App">
      <Typography className={classes.header}>Expense Tracker</Typography>
      <Box className={classes.component}>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransactions addTransaction={addTransaction} />
        </Box>
        <Box>
          <Transactions
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
        </Box>
      </Box>
    </div>
  );
}

export default App;
