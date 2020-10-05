const initialState = null;

const numberStatus = (state = initialState, action) => {
    if (action.type === 'ADD_NUMBER_STATUS') {
        return state;
    }
    return state;
};

export default numberStatus;
