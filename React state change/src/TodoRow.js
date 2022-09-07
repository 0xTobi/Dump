import react from "react";
import { Component } from "react";

export class TodoRow extends Component {
  render = () => (
    <tr>
      <td>{this.props.item.action}</td>
      <td>{this.props.item.done.toString()}</td>
    </tr>
  );
}
