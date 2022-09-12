import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Form } from "react-bootstrap";
//components
import MainTable from "./MainTable";
import { useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [eci, setEci] = useState("");
  const [ewd, setEwd] = useState("");
  const [type, setType] = useState("");
  const [multi, setMulti] = useState("1.5");
  const onSubmit = (e) => {
    e.preventDefault();
    setCoins([...coins, { eci, ewd, type, multi }]);
    setEci("");
    setEwd("");
  };

  return (
    <Container>
      <h3 className="App">Mtfe Calculator</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="ECI">
          <Form.Label>ECI</Form.Label>
          <Form.Control
            value={eci}
            onChange={(e) => {
              setEci(e.target.value);
              setType(e.target.id);
            }}
            step={0.01}
            type="number"
            placeholder="Enter ECI Funds"
          />
          <Form.Text className="text-muted">
            Use positive number and no more than two digits after the decimal
            point.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="EWD">
          <Form.Label>EWD</Form.Label>
          <Form.Control
            value={ewd}
            onChange={(e) => {
              setEwd(e.target.value);
              setType(e.target.id);
            }}
            type="number"
            placeholder="Enter EWD Funds"
          />
          <Form.Text className="text-muted">
            Use positive number and no more than two digits after the decimal
            point.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label style={{ paddingRight: "20px" }}>Multiple</Form.Label>
          {/* <Form.Select onChange={(e) => setMulti(e.target.value)}>
            <option>Choose your multiple</option>
            <option value="1.3">1.3</option>
            <option value="1.4">1.4</option>
            <option value="1.5">1.5</option>
            <option value="1.6">1.6</option>
          </Form.Select> */}
          <Form.Check
            name="group1"
            inline
            onClick={(e) => setMulti(e.target.value)}
            value={1.3}
            type="radio"
            id="1"
            label="1.3x"
          />
          <Form.Check
            name="group1"
            inline
            onClick={(e) => setMulti(e.target.value)}
            value={1.4}
            type="radio"
            id="2"
            label="1.4x"
          />
          <Form.Check
            name="group1"
            inline
            onClick={(e) => setMulti(e.target.value)}
            value={1.5}
            type="radio"
            id="3"
            label="1.5x"
          />
          <Form.Check
            name="group1"
            inline
            onClick={(e) => setMulti(e.target.value)}
            value={1.6}
            type="radio"
            id="4"
            label="1.6x"
          />

          <Form.Text className="text-muted">
            The multiple we'll be 1.5 by default.
          </Form.Text>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <MainTable coins={coins} multi={multi.current} />
    </Container>
  );
}

export default App;
