"use client";

import React from 'react'
import useClipboard from "react-use-clipboard";


export const BankDetails = () => {

  const [isCopied, setCopied] = useClipboard("83261009348084", {
    //    will go back to `false` after 1000ms.
    successDuration: 1000,
  });
  const [iban, setCopyIban] = useClipboard("PK98ALFH8326001009348084", {
    //  will go back to `false` after 1000ms.
    successDuration: 1000,
  }); 

  return (
   <div className='text-center mt-10'>
    <h1 className='text-2xl text-amber-300'>
    Bank Details:
  </h1>

  <p className='text-2xl text-amber-300'>
    Account Name: Mahnoor Ijaz (Bank AlFalah)
  </p>

    <button onClick={setCopied} className='text-2xl text-amber-300'>
    Account Number: 83261009348084 {isCopied ? " (copied to clipboard ✅)" : ""}
    </button>

    <br />

    <button onClick={setCopyIban} className='text-2xl text-amber-300'>
     IBAN: PK98ALFH8326001009348084 {iban ? " (copied to clipboard ✅)" : ""}
    </button>

   </div>
  )
}