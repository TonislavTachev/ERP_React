import { SET_SIDEBAR_COMPONENT_INDEX } from '../types/sidebarTypes/actionTypes'
const initialState = {
   sidebarComponentIndex: 0,
}

export default (state = initialState, action) => {
   switch (action.type) {
      case SET_SIDEBAR_COMPONENT_INDEX: {
         return {
            ...state,
            sidebarComponentIndex: action.payload,
         }
      }
      default:
         return state
   }
}
