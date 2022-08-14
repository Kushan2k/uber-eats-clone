let defaultState = {
  selectedItems: {
    items: [],
    restuarentName:'',
  }
}

const reducer = (state = defaultState, action) => {
  
  
  
  switch (action.type) {
    case 'ADD_TO_CART':
      let newState = {...state}
      if (action.payload.checkboxValue) {
        
        console.log(newState)
        newState.selectedItems = {
          items: [...(newState.selectedItems.items), action.payload],
          restuarentName: action.payload.restuarentName

       }
      } else {
        newState.selectedItems = {
          items: [...newState.selectedItems.items.filter((item) => item.title != action.payload.title)],
          restuarentName: action.payload.restuarentName
        }
      }
      
      
      // console.log(newState)
      
      return newState
      
    default:
      return state
  }
}

export default reducer