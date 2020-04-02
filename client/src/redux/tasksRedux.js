export const getAll = ({ tasks }) => tasks;

const reducerName = 'tasks';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_TASK = createActionName('ADD_TASK');
const REMOVE_TASK = createActionName('REMOVE_TASK');
const UPDATE_TASKS = createActionName('UPDATE_TASKS');

export const addTask = payload => ({ payload, type: ADD_TASK });
export const removeTask = payload => ({ payload, type: REMOVE_TASK });
export const updateTasks = payload => ({ payload, type: UPDATE_TASKS});

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TASK: {
      return [...statePart, { id: action.payload.id, name: action.payload.name }];
    }
    case REMOVE_TASK: {
      return statePart.filter(el => el.id !== action.payload);
    }
    case UPDATE_TASKS: {
      return action.payload;
    }
    default:
    return statePart;
  }
}