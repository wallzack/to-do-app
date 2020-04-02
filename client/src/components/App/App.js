import React from 'react';
import io from 'socket.io-client';

import Form from '../Form/FormContainer';
import List from '../List/ListContainer';
import Header from '../Header';

export let socket;

class App extends React.Component {
  constructor(props) {
    super(props);
    socket = io('http://localhost:8000');
  }

  componentDidMount() {
    socket.on('addTask', ({ id, name }) => this.props.addTask({ id: id, name: name }));
    socket.on('removeTask', (id) => this.props.removeTask(id));
    socket.on('updateData', (tasks) => this.props.updateTasks(tasks));
  }

  render() {
    return (
        <div className="App">

          <Header title="To-do-app" />

          <section className="tasks">
            <h2>Tasks</h2>
            <List />
          </section>

          <Form />

        </div>
    );
  };
}

export default App;