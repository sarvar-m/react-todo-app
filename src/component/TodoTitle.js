import Button from "react-bootstrap/Button";
import "../App.css";

function TodoTitle() {
  return (
    <div data-testid="todo-title">
      <button
        className="bg-success btn btn-primary"
        type="button"
        style={{ width: "205px" }}
      >
        TODO LIST
      </button>
    </div>
  );
}

export default TodoTitle;
