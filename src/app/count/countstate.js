"use client";
import React, { useState } from "react";

export default function CountState() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-center text-lg">
      <div>{count}</div>
      <button onClick={handleCount}>Click</button>
    </div>
  );
}
