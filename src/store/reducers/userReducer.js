import { ActionTypes } from '../actions/ActionsTypes';
import { buildLoggers } from '../../utils/log';

const { log, todo } = buildLoggers('userReducer');

const initialState = {
  ip: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  if (type === ActionTypes.USER_GET_IP) {
    const { ip } = payload;
    return {
      ip,
    };
  }

  if (type === ActionTypes.USER_ERROR) {
    todo({ type, payload });
  }

  return state;
};
