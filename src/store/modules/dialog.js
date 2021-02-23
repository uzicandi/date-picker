// actions

const OPEN_DIALOG = 'dialog/OPEN_DIALOG';
const CLOSE_DIALOG = 'dialog/CLOSE_DIALOG';

// action 생성함수

export const openDialog = () => ({ type: OPEN_DIALOG });
export const closeDialog = () => ({ type: CLOSE_DIALOG });

// initial state

const initialState = {
  open: false
};

// Reducers

export default function dialog(state = initialState, action) {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        open: true
      };
    case CLOSE_DIALOG:
      return {
        ...state
      };
    default:
      return state;
  }
}
