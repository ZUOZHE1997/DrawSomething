import { createStore } from 'redux'

const initState = {
  name: '',
  comment: [],
  userNum: 0,
  inDraw: '',
}
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'setUserName':
      return {
        name: action.name,
      }
    case 'getComment':
      return {
        comment: action.comment,
      }
    case 'GetUserNum':
      return {
        userNum: action.userNum,
      }
    case 'getDraw':
      return {
        inDraw: action.inDraw,
      }
    default:
      return state
  }
}

export const store = createStore(reducer)

// store.subscribe(() => { // 监听变化
//   console.log(store.getState())
// })
// store.dispatch(actions.red())
// store.dispatch(actions.add())
// store.dispatch(actions.add())
