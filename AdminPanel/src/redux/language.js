const initialState = 'uk';

const Language = (state = initialState, action) => {
    if (action.type === 'UK') {
        return 'uk';
    } else if (action.type === 'RU') {
        return 'rus';
    }
    return state;
};

export default Language;
