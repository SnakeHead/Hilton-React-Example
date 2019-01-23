import React, { Component } from 'react';
import Room from './room';

const MAX_ROOMS = 4;

class Rooms extends Component {
  constructor () {
    super();
    let rooms = localStorage.getItem('rooms');
    if (rooms) {
      rooms = JSON.parse(rooms).rooms
    } else {
      rooms = [];
      for(let i=1; i <= MAX_ROOMS; i++) {
        rooms.push(
          {
            room: i,
            showCheckbox: i !== 1,
            roomEnabled: i === 1,
            adults: 0,
            children: 0
          }
        );
      }
      const stringifiedRooms= JSON.stringify({rooms: rooms});
      localStorage.setItem('rooms', stringifiedRooms);
    }

    this.state = {
      rooms: rooms
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRoom = this.updateRoom.bind(this);
    this.enableRoom = this.enableRoom.bind(this);
  }

  renderRooms = () => {
    return (this.state.rooms.map((room) =>
      <Room key={room.room}
        roomNum={room.room}
        showCheckbox={room.showCheckbox}
        roomEnabled={room.roomEnabled}
        updateRoom={this.updateRoom}
        enableRoom={this.enableRoom}
        adults={room.adults}
        children={room.children}
      />
    ));
  };

  enableRoom = (roomNum) => {
    const rooms = this.state.rooms;
    const enable = !rooms[roomNum-1].roomEnabled;

    console.log('Room ', roomNum, ' is ', enable);

    for(let i=2; i<=rooms.length; i++) {
      if(i<=roomNum && enable){
        rooms[i-1].roomEnabled = enable;
        rooms[i-1].adults = 1;
        rooms[i-1].children = 0;
      } else if (i>=roomNum) {
        rooms[i-1].roomEnabled = false;
        rooms[i-1].adults = 0;
        rooms[i-1].children = 0;
      }
    }
    this.setState({rooms});
  };

  handleSubmit = () => {
    console.log(this.state.rooms)
    const stringifiedRooms= JSON.stringify({rooms: this.state.rooms});
    localStorage.setItem('rooms', stringifiedRooms);
  };

  updateRoom = (room, adults, children) => {
    const rooms = this.state.rooms;
    rooms[room-1].adults = adults;
    rooms[room-1].children = children;

    this.setState({rooms});
  };

  render() {
    return (
      <div>
        {this.renderRooms()}
        <button className="submitButton" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Rooms;
