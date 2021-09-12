import { ActionType } from './action-type';

export const PersonReducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_PERSONS:
      return {
        person: [
          ...state.person,
          {
            id: action.person.id,
            name: action.person.name,
            location: action.person.location,
            number: action.person.number,
          },
        ],
      };

    case ActionType.DELETE_PERSON:
      return {
        person: state.person.filter((obj) => obj.id !== action.id),
      };

    case ActionType.UPDATE_PERSON:
      return {
        person: state.person.map((obj) => {
          if (obj.id === action.updateData.editId) {
            let name = action.updateData.name;
            let location = action.updateData.location;
            let number = action.updateData.number;
            return { ...obj, name, location, number };
          }
          return obj;
        }),
      };
    default:
      return state;
  }
};
