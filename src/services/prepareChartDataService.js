import { chartSetting } from '../chartSetting';

const keys = Object.keys;
const assign = Object.assign;
const isArray = Array.isArray;

function getArraysKeyInDescription(data, key) {
  if (isArray(data) && data && key) {
    let res = [], i = -1;
    while (++i < data.length) if (data[i] instanceof Object && data[i] !== null)
      for (let o in data[i]) {
        const value = data[i][o].filter(x => x[key]);
        res.push(value && value[0] && value[0][key]);
      }
    return res;
  }
}

function combineSettings(data) {
  return assign(chartSetting.c3Setting, data);
}

function getCategories(data, category) {
  if (isArray(data) && category) {
    return keys(data[0][category] && data[0][category][0]);
  }
}

function sumArrayValues(arr) {
  return arr.reduce((v, i) => v + i);
}

export function getTotal(data, type) {
  if (data && type) {
    const result = [], sign = chartSetting.useCurrencySign.includes(type) ? chartSetting.currencySign : '';
    let total = 0, i = 0;
      for (; i < data.length; i++) {
        const key = [data[i].year] + ' ' + chartSetting.total;
        const value = sumArrayValues(getArraysKeyInDescription(data[i]['offence category'], type));
        result.push(key, numberFormatter(value, sign));
        total += value;
      }
      result.push(chartSetting.grandTotal, numberFormatter(total, sign));
      return [result];
  }
}

export function numberFormatter(number, sign='') {
  const n = number.toFixed(0).split('.');
  return sign + n[0].split('').reverse().reduce((acc, num, i, orig) => {
    return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
  }, '');
}

export function setAxis(data, type) {
  const sign = chartSetting.useCurrencySign.includes(type) ? chartSetting.axisCurrencySign : '',
  newAxis = assign({}, chartSetting.c3SetAxis);
  newAxis.x.categories = getCategories(data, 'offence category');
  newAxis.y.tick.format = d => numberFormatter(d);
  newAxis.y.label.text = sign;
  return newAxis;
}

export function prepareChartData(data, type) {
  if (data && type) {
    const preparedChartData = {};
    preparedChartData['columns'] = [];
    for (let i = 0; i < data.length; i++) {
      preparedChartData['columns'].push([data[i].year]);
      preparedChartData['columns'][i] = preparedChartData['columns'][i]
        .concat(getArraysKeyInDescription(data[i]['offence category'], type));
    }
    return combineSettings(preparedChartData);
  }
}
