import Table from "react-bootstrap/Table";
import "../App.css";

function IsDoneItem() {
  return (
    <Table striped data-testid="is-done-item">
      <tbody>
        <tr>
          <td style={{ textDecoration: "line-through" }}>milk</td>
          <td>
            <i class="bi-trash text-danger"></i>
          </td>
        </tr>
        <tr>
          <td style={{ textDecoration: "line-through" }}>english exam</td>
          <td>
            <i class="bi-trash text-danger"></i>
          </td>
        </tr>
        <tr>
          <td style={{ textDecoration: "line-through" }}>js practical exam</td>
          <td>
            <i class="bi-trash text-danger"></i>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default IsDoneItem;
