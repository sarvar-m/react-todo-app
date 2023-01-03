import Table from "react-bootstrap/Table";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import "../App.css";

function TodoListItem() {
  return (
    <Table striped data-testid="todo-list">
      <tbody>
        <tr>
          <td>go shopping</td>
          <td>
            <BsFillArrowRightSquareFill className="text-success" />
          </td>
        </tr>
        <tr>
          <td>school</td>
          <td>
            <BsFillArrowRightSquareFill className="text-success" />
          </td>
        </tr>
        <tr>
          <td>take drugs</td>
          <td>
            <BsFillArrowRightSquareFill className="text-success" />
          </td>
        </tr>
        <tr>
          <td>birthday party</td>
          <td>
            <BsFillArrowRightSquareFill className="text-success" />
          </td>
        </tr>
        <tr>
          <td>learn react</td>
          <td>
            <BsFillArrowRightSquareFill className="text-success" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TodoListItem;
