import { SET_SIDEBAR_COMPONENT_INDEX } from '../types/sidebarTypes/actionTypes'

export const setDashBoardComponent = (index) => async (dispatch) => {
   dispatch({ type: SET_SIDEBAR_COMPONENT_INDEX, payload: index })
}
