import { cloneDeep, isString } from 'lodash'

/**
 * 数据中 value 全部进行 trim 处理
 */
export const handleDataValuesTrim = (data) => {
  let _data = cloneDeep(data)
  let keys = Object.keys(_data)
  keys.forEach((key) => {
    if (isString(_data[key])) {
      _data[key] = _data[key].trim()
    }
  })
  return _data;
}

// 定义一个全局方法来格式化数字，保留两位小数
export const formatDecimal = (value) => {
  console.log(value, 'valuevaluevaluevalue');

  if (value === '' || value === null) return '';
  let num = parseFloat(value);
  if (isNaN(num)) return '';
  num = Math.round(num * 100) / 100;
  return num.toFixed(2);
}