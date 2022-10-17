import React, { useState } from "react";
//bootstrap
import {
  Table,
  Form,
  Button,
  Dropdown,
  DropdownButton,
  InputGroup,
} from "react-bootstrap/";
//components
// import ExpectedProfitTable from "./ExpectedProfitTable";
//hook
// import useFunds from "./useFunds";

const ExpectedProfit = () => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("ECI");
  const [multi, setMulti] = useState("1.5");
  const [show, setShow] = useState(false);
  let funds = amount;
  let arr = new Array(20).fill(0);
  // const data = useFunds(type, multi, funds);
  // console.log(data);
  return (
    <>
      <h1 className="App">Expected Profit For 20 Days</h1>
      <Form>
        <Form.Group className="mb-3" controlId="Starting Funds">
          <Form.Label>Starting Funds</Form.Label>
          <InputGroup
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mb-3"
          >
            <DropdownButton
              variant="dark"
              title={type}
              id="input-group-dropdown-1"
            >
              <Dropdown.Item id="ECI" onClick={(e) => setType(e.target.id)}>
                ECI
              </Dropdown.Item>
              <Dropdown.Item id="EWD" onClick={(e) => setType(e.target.id)}>
                EWD
              </Dropdown.Item>
            </DropdownButton>
            <Form.Control aria-label="Text input with dropdown button" />
          </InputGroup>
          <Form.Text className="text-muted">
            Use positive number and no more than two digits after the decimal
            point.
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label style={{ paddingRight: "20px" }}>Multiple</Form.Label>
            <Form.Check
              name="group2"
              inline
              onClick={(e) => setMulti(e.target.value)}
              value={1.3}
              type="radio"
              id="5"
              label="1.3x"
            />
            <Form.Check
              name="group2"
              inline
              onClick={(e) => setMulti(e.target.value)}
              value={1.4}
              type="radio"
              id="6"
              label="1.4x"
            />
            <Form.Check
              name="group2"
              inline
              onClick={(e) => setMulti(e.target.value)}
              value={1.5}
              type="radio"
              id="7"
              label="1.5x"
            />
            <Form.Check
              name="group2"
              inline
              onClick={(e) => setMulti(e.target.value)}
              value={1.6}
              type="radio"
              id="8"
              label="1.6x"
            />
            <Form.Text className="text-muted">
              The multiple we'll be 1.5 by default.
            </Form.Text>
          </Form.Group>
          <div>
            <Button onClick={() => setShow(!show)} variant="dark" type="button">
              {show ? <span>hide</span> : <span>show</span>}
            </Button>
          </div>
        </Form.Group>
      </Form>
      {amount && show && (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Funds</th>
              <th>Day</th>
              <th>Expected Profit</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((a, index) => {
              let lot = 0;
              let service = 0;
              let closePrice = 0;
              let profit = 0;
              if (type === "ECI") {
                lot = (funds / 822).toFixed(5);
                service = (lot * 42).toFixed(2);
                closePrice = (service * multi).toFixed(2);
                profit = (closePrice - service).toFixed(2);
                funds = +funds + +profit;
              } else if (type === "EWD") {
                lot = (funds / 1280).toFixed(5);
                service = (lot * 80).toFixed(2);
                closePrice = (service * multi).toFixed(2);
                profit = (closePrice - service).toFixed(2);
                funds = +funds + profit;
              }

              return (
                <tr key={index}>
                  <td>{funds.toFixed(2)}</td>
                  <td>
                    {index + 1} {type}
                  </td>
                  <td>{profit}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ExpectedProfit;
