import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes';

const initialState = [
  { id: 0, content: 'Implement Redux', completed: true },
  { id: 1, content: 'Style the Components', completed: true },
  { id: 2, content: 'Refactor Todo Into Smaller Components', completed: false },
  { id: 3, content: 'Persist State by Using a Database', completed: false },
];

const todos = (state = initialState || [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return [
        ...state,
        {
          id: id,
          content: content,
          completed: false
        }
      ];
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      const temp = [...state];
      const todo = temp.find(t => t.id === id);
      todo.completed = !todo.completed;
      return temp;
    }

    default:
      return state
  }
}

export default todos


// import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes';

// const initialState = {0: { id: 0, content: 'Implement Redux', completed: false }};

// const todos = (state = initialState || {}, action) => {
//   switch (action.type) {
//     case ADD_TODO: {
//       const { id, content } = action.payload;
//       return {
//         ...state,
//         [id]: {
//           id: id,
//           content: content,
//           completed: false
//         }
//       };
//     }
//     case TOGGLE_TODO: {

//       const { id } = action.payload;
//       const todo = state[id];
//       return {
//         ...state,
//         [id]: { ...todo, completed: !todo.completed }
//       }
//     }
//     default:
//       return state
//   }
// }

// export default todos



