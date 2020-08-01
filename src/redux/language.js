const initialState = 'uk';

const List = (state = initialState, action) => {
    if (action.type === 'UK') {
        return 'uk';
    } else if (action.type === 'RU') {
        return 'rus';
    }
    return state;
};

export default List;
