export const switchChartDataReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHART_DATA_CHANGED':
      return action.payload;
    default:
      return state;
  }
}