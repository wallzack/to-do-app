import { connect } from 'react-redux';

import App from './App';

import { addTask, removeTask, updateTasks } from '../../redux/tasksRedux';

const mapDispatchToProps = (dispatch, props) => ({
  addTask: (id, name) => dispatch(addTask(id, name)),
  removeTask: id => dispatch(removeTask(id)),
  updateTasks: tasks => dispatch(updateTasks(tasks)),
});

export default connect(null, mapDispatchToProps)(App);