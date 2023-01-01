import { Outlet } from "@remix-run/react";

import expensesStyles from "~/styles/expenses.css";

const ExpensesLayout = () => {
  return (
    <main>
      <p>Shared Element!</p>
      <Outlet />
    </main>
  );
};

export default ExpensesLayout;

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
