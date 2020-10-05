import {combineReducers} from 'redux';
import language from './language';
import screen from './screens';
import numberStatus from './numberStatus';

export default combineReducers({
    language,
    screen,
    numberStatus,
});

