const log = ({ getState, dispatch }) => next => action => {

  process.env.NODE_ENV === 'development' && console.info('ACTION: ' + action.type, action);
  process.env.REACT_APP_ENV === 'dev' && console.info('ACTION: ' + action.type, action);

  next(action);
};

export default log;
