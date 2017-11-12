export const getChartDataReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_CHART_DATA_SUCCESS':
      return action.data;
    default:
      return state;
  }
}