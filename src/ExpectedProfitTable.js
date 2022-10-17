import React from "react";

function ExpectedProfitTable({ type, index, funds, profit }) {
  return (
    <tr>
      <td>{funds.toFixed(2)}</td>
      <td>
        {index + 1} {type}
      </td>
      <td>{profit}</td>
    </tr>
  );
}

export default ExpectedProfitTable;
