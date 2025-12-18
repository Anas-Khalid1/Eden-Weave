"use client";

import { useState } from "react";
import { Copy, Check, Building2 } from "lucide-react";

const bankDetails = {
  bankName: "The Co-operative Bank",
  accountName: " Milton Keynes East Muslim Community",
  sortCode: "08-92-99",
  accountNumber: "67378021",
};

export default function BankTransferSection() {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-amber-50 p-6 border-b border-amber-100 flex items-center gap-4">
        <Building2 className="text-amber-600" />
        <h3 className="text-xl font-bold text-gray-800">Bank Transfer</h3>
      </div>

      <div className="p-8 space-y-6">
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">
            Account Name
          </label>
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mt-1">
            <span className="text-gray-800">{bankDetails.accountName}</span>
            <button
              onClick={() => handleCopy(bankDetails.accountName, "name")}
              className="text-gray-400 hover:text-amber-600 transition-colors"
            >
              {copiedField === "name" ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">
              Sort Code
            </label>
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mt-1">
              <span className="text-gray-800">{bankDetails.sortCode}</span>
              <button
                onClick={() => handleCopy(bankDetails.sortCode, "sort")}
                className="text-gray-400 hover:text-amber-600 transition-colors"
              >
                {copiedField === "sort" ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">
              Account Number
            </label>
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mt-1">
              <span className="text-gray-800">{bankDetails.accountNumber}</span>
              <button
                onClick={() => handleCopy(bankDetails.accountNumber, "acc")}
                className="text-gray-400 hover:text-amber-600 transition-colors"
              >
                {copiedField === "acc" ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">Bank: {bankDetails.bankName}</p>
      </div>
    </div>
  );
}
