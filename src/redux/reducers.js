import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, RESET_CONTACT } from './actions';

const initialState = {
  contacts: [
    {
      id: 0,
      name: "Coding Ninja",
      email: "codingninjas@codingninjas.com",
      phone: "98725161833"
    }
  ]
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };
    case RESET_CONTACT:
      return initialState;
    default:
      return state;
  }
};

export default contactReducer;
