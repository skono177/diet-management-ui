"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState<number>(0);
  useEffect(() => {}, [state]);
  return (
    <>
      <div>CSR page</div>
      <p>カウント: {state}</p>
      <button onClick={() => setState(state + 1)}>増やす</button>
      <div>Home page</div>
    </>
  );
}
