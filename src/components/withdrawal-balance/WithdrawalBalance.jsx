import React, { useEffect } from "react";
import { useAuth } from "../../context/auth/authState";
import Withdrawal from "../withdrawal/Withdrawal";
import { WithdrawalBalanceStyle } from "./WithdrawalBalanceStyle";

const WithdrawalBalance = () => {
  const { userWithdrawals, getUserWithdrawals } = useAuth();

  useEffect(() => {
    getUserWithdrawals();
  }, []);

  return (
    <WithdrawalBalanceStyle>
      {userWithdrawals.map((withdrawal) => (
        <Withdrawal withdrawal={withdrawal} key={withdrawal.id} />
      ))}
    </WithdrawalBalanceStyle>
  );
};

export default WithdrawalBalance;
