import React from "react";
import { useSelector } from "react-redux";
import List from "../../components/List/List";

export default function ExpenseList() {
  const expensList = useSelector((store) => store.expense.expenseList);

  return <List items={expensList} />;
}
