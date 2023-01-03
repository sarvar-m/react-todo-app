import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
function Input() {
  return (
    <div data-testid="input">
      <InputGroup style={{ width: "420px" }}>
        <Form.Control />
        <Button
          data-testid="button"
          variant="outline-secondary"
          id="button-addon2"
          className="bg-primary text-white"
        >
          Add Todo
        </Button>
      </InputGroup>
    </div>
  );
}

export default Input;
