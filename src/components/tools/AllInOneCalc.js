'use client'

import { useState } from "react";

export default function AllInOneCalc() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    const res = parseFloat(num1) + parseFloat(num2);
    setResult(res);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All-in-One Calculator</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          className="border px-4 py-2 rounded"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          className="border px-4 py-2 rounded"
        />
        <button onClick={handleAdd} className="bg-black text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      {result !== null && <p className="text-lg">Result: {result}</p>}
    </div>
  );
}
