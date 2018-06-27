import { combineReducers } from 'redux';
import YearsReducer from './reducer_years';

const rootReducer = combineReducers({
    years: YearsReducer
});

export default rootReducer;