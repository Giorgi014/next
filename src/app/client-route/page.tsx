"use client";

import { serverSideFunction } from "@/utils/server-utils";

export default function ClietRoutePage() {
  console.log("Client Route Renderd");

  const result = serverSideFunction();
  return (
    <>
      <h1>Cliet Route Page</h1>
      <p>{result}</p>
    </>
  );
}
