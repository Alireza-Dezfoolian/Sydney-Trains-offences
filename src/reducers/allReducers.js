import { combineReducers } from 'redux';
import { getChartDataReducer } from './getChartDataReducer';
import { changeChartDataReducer } from './changeChartDataReducer';

const allReducers = combineReducers({
  chartData: getChartDataReducer,
  changeChartData: changeChartDataReducer
});

export default allReducers;