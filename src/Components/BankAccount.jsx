// src/components/BankAccounts.jsx
import React from 'react';

const BankAccount = () => {
  const accounts = [
    {
      bankName: "Faysal Bank",
      accountTitle: "Saer.pk",
      accountNumber: "3302237082738",
      iban: "Pk3202293203782936"
    },
    {
      bankName: "Meezan Bank",
      accountTitle: "Saer.pk",
      accountNumber: "3302237082738",
      iban: "Pk3202293203782936"
    },
    {
      bankName: "UBL",
      accountTitle: "Saer.pk",
      accountNumber: "3302237082738",
      iban: "Pk3202293203782936"
    },
    {
      bankName: "HBL",
      accountTitle: "Saer.pk",
      accountNumber: "3302237082738",
      iban: "Pk3202293203782936"
    }
  ];

  return (
    <div className="p-4 m-5 sm:m-20 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Bank Accounts:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accounts.map((account, index) => (
          <div key={index} className="p-4 border rounded-md shadow-sm">
            <p><span className="font-bold">Bank name:</span> <a href="#" className="text-blue-500">{account.bankName}</a></p>
            <p><span className="font-bold">Account Title:</span> {account.accountTitle}</p>
            <p><span className="font-bold">Account Number:</span> <a href="#" className="text-blue-500">{account.accountNumber}</a></p>
            <p><span className="font-bold">Iban:</span> <a href="#" className="text-blue-500">{account.iban}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BankAccount;
