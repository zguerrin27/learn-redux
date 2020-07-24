function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      // return existing state plus new comment 
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      // return state without deleted comment 
      return [
        ...state.slice(0, action.index), //from start to the one we want to delete
        ...state.slice(action.index + 1), // after one we want to delete to end of array of comments
      ]
    default:
      return state;
  }
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined'){
    return {
      // take current state
      ...state,
      // overwrite this post with a new one 
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;