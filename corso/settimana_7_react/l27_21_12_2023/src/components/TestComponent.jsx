import { Component } from "react";

class TestComponent extends Component {
  render() {
    return (
      <>
        {this.props.reservation.name &&
          this.props.reservation.phone &&
          this.props.reservation.numberOfPeople &&
          this.props.reservation.smoking &&
          this.props.reservation.dateTime &&
          this.props.reservation.specialRequests && (
            <>
              <h3>TestComponent:</h3>
              <ul>
                <li>{this.props.reservation.name}</li>
                <li>{this.props.reservation.phone}</li>
                <li>{this.props.reservation.numberOfPeople}</li>
                <li>{this.props.reservation.smoking ? "Fumatori" : "Non fumatori"}</li>
                <li>{new Date(this.props.reservation.dateTime).toLocaleString()}</li>
                <li>{this.props.reservation.specialRequests}</li>
              </ul>
            </>
          )}
      </>
    );
  }
}

export default TestComponent;
