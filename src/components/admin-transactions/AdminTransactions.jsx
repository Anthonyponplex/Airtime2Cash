import React from "react";
import { AdminTransactionsStyles } from "./AdminTransactionsStyle";
import TransactionsTable from "./transaction-table/TransactionsTable";

const AdminTransactions = () => {
  return (
    <AdminTransactionsStyles>
      <h2>Admin Dashboard</h2>
      <TransactionsTable />
    </AdminTransactionsStyles>
  );
};

export default AdminTransactions;
