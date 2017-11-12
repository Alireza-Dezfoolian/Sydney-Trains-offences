import { chartSetting } from '../chartSetting';

function getArraysKeyInDescription(data, key) {
  let res = [];
  if (Array.isArray(data) && data && key) {
    let i = 0;
    while (i < data.length) {
      if (data[i] instanceof Object) {
        for (let o in data[i]) {
          const value = data[i][o].filter(x => x[key]);
          res.push(value && value[0] && value[0][key]);
        }
      }
      i++;
    }
  }
  return res;
}

function combineSettings(data) {
  return Object.assign(chartSetting.c3Setting, data);
}

function getCategories(data, category) {
  if (data && data[0] && category) {
    return Object.keys(data[0][category][0]);
  }
}

function sumArrayVales(arr) {
  return arr.reduce((v, i) => (v + i));
}

export function getTotal(data, type) {
  const result = [];
  let sign = chartSetting.useCurrencySign.includes(type) ? chartSetting.currencySign : '';
  let total = 0;
  if (data && type) {
    for (let i = 0; i < data.length; i++) {
      const key = [data[i].year] + ' ' + chartSetting.total;
      const value = sumArrayVales(getArraysKeyInDescription(data[i]['offence category'], type));
      result.push(key, numberFormater(value, sign));
      total += value;
    }
    result.push(chartSetting.grandTotal, numberFormater(total, sign));
    return [result];
  }
}

export function numberFormater(num, sign) {
  const n = num.toFixed(0).split('.');
  return (sign ? sign : '') + n[0].split('').reverse().reduce((acc, num, i, orig) => {
    return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
  }, '');
}

export function setAxis(data, type) {
  const sign = chartSetting.useCurrencySign.includes(type) ? chartSetting.axisCurrencySign : '';
  const newAxis = Object.assign({}, chartSetting.c3SetAxis);
  newAxis.x.categories = getCategories(data, 'offence category');
  newAxis.y.tick.format = d => numberFormater(d);
  newAxis.y.label.text = sign;
  return newAxis;
}

export function prepareChartData(data, type) {
  const preparedChartData = {};
  preparedChartData['columns'] = [];
  if (data) {
    for (let i = 0; i < data.length; i++) {
      preparedChartData['columns'].push([data[i].year]);
      preparedChartData['columns'][i] = preparedChartData['columns'][i]
        .concat(getArraysKeyInDescription(data[i]['offence category'], type));
    }
    return combineSettings(preparedChartData);
  }
}
