import { Outlet } from "@remix-run/react";

const ExpensesLayout = () => {
  return (
    <main>
      <p>Shared Element!</p>
      <Outlet />
    </main>
  );
};

export default ExpensesLayout;
