import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData };
    props.onAddExpense(expenseData);
    setEditable(false);
  };

  const [isEditable, setEditable] = useState(false);

  const addExpenseHandler = () => {
    setEditable(true);
  };

  const onCancelHandler = () => {
    setEditable(false);
  };

  // if ( === 0) {
  //   return <button onClick={addExpenseHandler}>Add New Expense</button>;
  // }

  return (
    <div className="new-expense">
      {!isEditable && (
        <button onClick={addExpenseHandler}>Add new Expense</button>
      )}
      {isEditable && (
        <ExpenseForm
          onSaveData={onSaveDataHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
