//the initial state of the basket is an empty array

export const initialState = {
    basket: [],
};


function reducer(state, action) {
switch(action.type) {
case "ADD TO BASKET": 
//logic for adding item to basket 
break;
case "REMOVE ITEM FROM BASKET":
    //logic for removing item from basket
    break;
    default:
        //if its nither, just return what it is
        return state;
}
}
export default reducer;

/*

*/