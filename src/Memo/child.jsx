import React, { memo } from "react";

function Child({ value, value1 }) {
  console.log(value);

  return (
    <>
      <h1>{value}</h1>
      <button onClick={value1}>button</button>
    </>
  );
}
export default memo(Child);