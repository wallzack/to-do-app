import { connect } from 'react-redux';

import Form from './Form';

import { addTask } from '../../redux/tasksRedux';

const mapDispatchToProps = (dispatch, props) => ({
  addTask: (id, name) => dispatch(addTask(id, name)),
});

export default connect(null, mapDispatchToProps)(Form);