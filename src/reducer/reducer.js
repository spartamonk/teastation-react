import { NAVBAR_OPEN, NAVBAR_CLOSE } from '../actions'
export const reducer = (state, action) => {
 if(action.type === NAVBAR_OPEN) {
  return {
   ...state,
   isNavbarOpen: true
  }
 }
 if (action.type === NAVBAR_CLOSE) {
   return {
     ...state,
     isNavbarOpen: false,
   }
 }
 throw new Error(`No Matching "${action.type}" - action type`)
}
