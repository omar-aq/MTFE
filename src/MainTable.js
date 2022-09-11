import React from "react";
import "./MainTable.css";
//bootstrap
import { Table } from "react-bootstrap/";
//components
import ExpectedProfit from "./ExpectedProfit";

const MainTable = ({ coins }) => {
  // console.log(coins);
  return (
    <>
      <div className="App-header">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Funds</th>
              <th>LOT</th>
              <th> Profit Range</th>
              <th>Close Price</th>
              <th>Expected Profit</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => {
              let funds = 0;
              let lot = 0;
              let service = 0;
              let closePrice = 0;
              let profit = 0;
              if (coin.type === "ECI") {
                funds = coin.eci;
                lot = Math.floor((funds / 822) * 100000) / 100000;
                service = (lot * 42).toFixed(2);
                closePrice = (service * coin.multi).toFixed(2);
                profit = (closePrice - service).toFixed(2);
              } else if (coin.type === "EWD") {
                funds = coin.ewd;
                lot = (funds / 1280).toFixed(5);
                service = (lot * 80).toFixed(2);
                closePrice = (service * coin.multi).toFixed(2);
                profit = (closePrice - service).toFixed(2);
              }
              return (
                <tr key={index}>
                  <td>{funds}</td>
                  <td>{lot}</td>
                  <td>
                    {coin.type} {coin.multi}
                  </td>
                  <td>{closePrice}</td>
                  <td>{profit}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <ExpectedProfit />
    </>
  );
};

export default MainTable;
