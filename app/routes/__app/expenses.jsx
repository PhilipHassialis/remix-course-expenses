import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";

import { DUMMY_EXPENSES } from "./expenses.analysis";

const ExpensesLayout = () => {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
};

export default ExpensesLayout;
