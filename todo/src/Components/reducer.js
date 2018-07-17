

const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {todos:action.payload});
        case 'TOGGLE_COMPLETED':
            return Object.assign({}, state, {todos:action.payload});
        default:
            return state;
    }
}

export default todoReducer;

// When the user presses submit you will invoke the appropriate action creator 
// which will then have its new action fed through all of the reducers.

// When you click on each todo list item you will dispatch an action 
// that will toggle that todo item's completed property to either true 
// or false. You will need to send the id property along with what completed 
// should be set to. The todos reducer will return a brand new array that 
// will replace the old array. We do not mutate the original array but 
// rather replace it with a brand new version.

// You should only need one reducer. This reducer will control the todos 
// array property on the state tree.