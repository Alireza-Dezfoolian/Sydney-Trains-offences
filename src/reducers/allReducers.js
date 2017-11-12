import { combineReducers } from 'redux';
import { getChartDataReducer } from './getChartDataReducer';
import { switchChartDataReducer } from './switchChartDataReducer';

const allReducers = combineReducers({
  chartData: getChartDataReducer,
  switchChartData: switchChartDataReducer
});

export default allReducers;