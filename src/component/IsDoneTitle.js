import Button from "react-bootstrap/Button";
import "../App.css";

function IsDoneTitle() {
  return (
    <Button
      className="bg-danger"
      data-testid="is-done-title"
      style={{ width: "205px" }}
    >
      IS DONE
    </Button>
  );
}

export default IsDoneTitle;
