import {
  ListItemText,
  ListItem,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import { DeleteOutlineSharp } from "@mui/icons-material";

const useStyle = makeStyles({
  list: {
    display: "flex",
    marginTop: 10,
    border: "1px solid #F6F6F6",
  },
});

const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount >= 0 ? "₹" : "-₹";
  const amount = sign + Math.abs(transaction.amount);
  const color = transaction.amount >= 0 ? "Green" : "Red";
  const classes = useStyle();

  return (
    <ListItem
      style={{ background: `${color}`, color: "#fff" }}
      className={classes.list}
    >
      <ListItemIcon>
        <DeleteOutlineSharp onClick={() => deleteTransaction(transaction.id)} />
      </ListItemIcon>
      <ListItemText primary={transaction.text} />
      <ListItemText primary={amount} />
    </ListItem>
  );
};

export default Transaction;
