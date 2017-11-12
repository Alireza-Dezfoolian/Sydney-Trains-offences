import Axios from 'axios';
import { chartSetting } from '../chartSetting';

const apiUrl = chartSetting.apiUrl;

export const getChartData = () => {
  return dispatch => {
    return Axios.get(apiUrl)
      .then(res => {
        dispatch(getChartDataSuccess(res.data))
      })
      .catch(err => {
        throw(err);
      });
  };
};

export const getChartDataSuccess = data => {
  return {
    type: 'GET_CHART_DATA_SUCCESS',
    data
  }
};