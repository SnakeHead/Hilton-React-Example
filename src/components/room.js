import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Room extends Component {
  constructor(props) {
    super(props)

    this.state = {
      roomAdults: 1,
      roomChild: 0
    };

    this.handleSelect=this.handleSelect.bind(this);
    this.showCheckbox=this.showCheckbox.bind(this);
  }

  handleSelect = (event) => {
    let adults;
    let children;

    if(this.props.showCheckbox && this.refs.enableRoom.checked !== this.props.roomEnabled) {
      this.props.enableRoom(this.props.roomNum);
    }

    adults = parseInt(ReactDOM.findDOMNode(this.refs.roomAdults).value);
    children = parseInt(ReactDOM.findDOMNode(this.refs.roomChild).value);
    this.props.updateRoom(this.props.roomNum, adults, children);

  };

  showCheckbox() {
    if (this.props.showCheckbox) {
      return (
        <span><input type="checkbox" name="checkbox" ref="enableRoom" onChange={this.handleSelect} checked={this.props.roomEnabled} aria-label="roomCheckbox"/></span>
      )
    }
  }

  render() {
    return (
      <div className="roomPanel">
        {this.showCheckbox()}
        <span className="roomTitle">Room {this.props.roomNum}</span>
        <div className="selectorPanel">
          <form>

            <div className="roomSelect">
              <label htmlFor="roomAdult">
                Adults<br/>(18+)
              </label>
              <select name="roomAdult" ref="roomAdults" onChange={this.handleSelect} disabled={!this.props.roomEnabled} value={this.props.adults} aria-label="roomAdults">
                <option>1</option>
                <option>2</option>
              </select>
            </div>

            <div className="roomSelect">
              <label htmlFor="roomChild">
                Children<br/>(0-17)
              </label>
              <select name="roomChild" ref="roomChild" onChange={this.handleSelect} disabled={!this.props.roomEnabled} value={this.props.children} aria-label="roomChildren">
                <option>0</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

export default Room;
