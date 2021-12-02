export const addNewTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload : data
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}

export const editTodo = (id,data) => {
    console.log(data);
    return {
        type: 'EDIT_TODO',
        payload: {id, data}
    }
}

