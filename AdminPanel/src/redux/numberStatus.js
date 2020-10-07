const initialState = null;

const numberStatus = (state = initialState, action) => {
    if (action.type === 'ADD_NUMBER_STATUS') {
        return action.payload;
    }
    return state;
};

export default numberStatus;
