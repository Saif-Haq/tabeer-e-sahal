"use client";

import React, { useState } from "react";

export const BankDetails = () => {
  const [accountCopied, setAccountCopied] = useState(false);
  const [ibanCopied, setIbanCopied] = useState(false);

  const copyWithFeedback = async (
    text: string,
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl text-amber-300">Bank Details:</h1>

      <p className="text-2xl text-amber-300">
        Account Name: Mahnoor Ijaz (Bank AlFalah)
      </p>

      <button
        onClick={() =>
          copyWithFeedback("83261009348084", setAccountCopied)
        }
        className="text-2xl text-amber-300"
      >
        Account Number: 83261009348084
        {accountCopied && " (copied to clipboard ✅)"}
      </button>

      <br />

      <button
        onClick={() =>
          copyWithFeedback("PK98ALFH8326001009348084", setIbanCopied)
        }
        className="text-2xl text-amber-300"
      >
        IBAN: PK98ALFH8326001009348084
        {ibanCopied && " (copied to clipboard ✅)"}
      </button>
    </div>
  );
};
