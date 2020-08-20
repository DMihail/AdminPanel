const initialState = 'AUTH';

const Screen = (state = initialState, action) => {
    if (action.type === 'CHECK_SCREEN') {
        return action.payload;
    }
    return state;
};

export default Screen;
