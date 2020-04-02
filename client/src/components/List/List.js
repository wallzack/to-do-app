import React from 'react';
import { socket } from '../App/App';

class List extends React.Component {

  render() {
    const { tasks, removeTask } = this.props;

    return (
      <ul className="tasks-list">
        {tasks.map(el => (
          <li key={el.id} className="task">
            {el.name}
            <button key={el.id} className="btn btn-remove" onClick={() => {
              removeTask(el.id);
              socket.emit('removeTask', el.id);
            }}>Remove</button>
          </li>
        ))}
      </ul>
    )
  }
};

export default List;