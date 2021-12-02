const changeTodo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {item: action.payload, id:state.length+1}
            ];
        case 'DELETE_TODO':
           const newList = state.filter((elem) => elem.id !== action.payload);
           return newList;
        case 'EDIT_TODO':
            const  newState = state.map((ele) => {
                if (action.payload.id === ele.id) {
                    return {...ele, item:action.payload.data}
                }
                return ele;
            });
            return newState;
        default:
            return state;
    }
}

export default changeTodo;