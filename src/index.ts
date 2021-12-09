/** 
 * @name:Deep copy
 * @param {Object} obj Objects to copy
 */
export function deepClone(values: any): any {
  var copy;

  // Handle the 3 simple types, and null or undefined
  if (null == values || "object" != typeof values) return values;

  // Handle Date
  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  }

  // Handle Array
  if (values instanceof Array) {
    copy = [];
    for (var i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }
    return copy;
  }

  // Handle Object
  if (values instanceof Object) {
    copy = {} as any;
    for (var attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy values! Its type isn't supported.");
}

/**
* @name: Shallow copy
* @param {Object} obj Objects to copy
*/
export function shallowClone<T>(obj: T): T {
  let result: any;
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      result = [];
      for (let i = 0; i < obj.length; i++) {
        result.push(obj[i]);
      }
    } else {
      result = {};
      for (let key in obj) {
        result[key] = obj[key];
      }
    }
  } else {
    result = obj;
  }
  return result;
}

/** 
* @name:Get the number of object attributes
* @param {Object} obj To get an object of the number of properties
*/
export function getObjectLength(obj: object): number {
  let count = 0;
  for (let i = 0; i < Object.keys(obj).length; i++) {
    count++;
  }
  return count;
}

/**
* @name: Time format X days ago
* @param {*} time Timestamp
* @return {*}
*/
export function timeFormat(time: any): any {
  let result;
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let month = day * 30;
  let now = new Date().getTime();
  let diffValue = now - time;
  if (diffValue < 0) {
    //console.log("结束日期不能小于开始日期！");
  }
  let monthC: any = diffValue / month;
  let weekC: any = diffValue / (7 * day);
  let dayC: any = diffValue / day;
  let hourC: any = diffValue / hour;
  let minC: any = diffValue / minute;
  if (monthC >= 1) {
    result = "发表于" + parseInt(monthC) + "个月前";
  } else if (weekC >= 1) {
    result = "发表于" + parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    result = "发表于" + parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    result = "发表于" + parseInt(hourC) + "个小时前";
  } else if (minC >= 1) {
    result = "发表于" + parseInt(minC) + "分钟前";
  } else result = "刚刚发表";
  return result;
}


/**
* @name: Package Ajax Promise
* @param {String} url Request address 
* @param {Object} data Request parameters 
* @param {String} method Request way get/post
* @returns
*/
export function ajax({ url, data, method = "GET" }: { url: string, data: any, method: string }): Promise<any> {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.status)
        }
      }
    }
    if (method === "GET") {
      xhr.send()
    } else {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
      xhr.send(data)
    }
  })
}

/**
* @name: Judging whether the array contains a value
* @param {Array} arr Array to be judged
* @param {any} value To determine the value
*/
export function isContain(arr: any[], value: any) {
  return arr.includes(value)
}

/** 
* @name: Array to heavy
* @param {Array} arr Array to be heavy
*/
export function unique(arr: any[]) {
  let result: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

/**
* @name: Generate random colors
*/
export function randomColor() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

/**
* @name: Array sort
* @param {Array} arr Array to be sorted
* @param {String} key Sort KEY
* @param {String} order Sort mode, ASC ascending, DESC descending
* @example
* sortBy([{name: 'a'}, {name: 'b'}], 'name', 'asc')
* // => [{name: 'a'}, {name: 'b'}]
* sortBy([{name: 'a'}, {name: 'b'}], 'name', 'desc')
* // => [{name: 'b'}, {name: 'a'}]
* sortBy([{name: 'a'}, {name: 'b'}], 'name')
* // => [{name: 'a'}, {name: 'b'}]
*/
export function sortBy(arr: any[], key: string, order: string = 'asc') {
  return arr.sort((a, b) => {
    if (a[key] > b[key]) {
      return order === 'asc' ? 1 : -1;
    } else if (a[key] < b[key]) {
      return order === 'asc' ? -1 : 1;
    } else {
      return 0;
    }
  })
}

/**
* @name: Random verification code
* @param {Number} len Verification code length
*/
export function randomCode(len: number) {
  let str = '';
  for (let i = 0; i < len; i++) {
    str += Math.floor(Math.random() * 10);
  }
  return str;
}

/**
* @name: Password verification regular
* @param {String} password password
*/
export function checkPassword(password: string) {
  let reg = /^[a-zA-Z0-9]{6,20}$/;
  return reg.test(password);
}

/**
* @name: Regular verification mailbox
* @param {String} email Mail
*/
export function checkEmail(email: string) {
  let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return reg.test(email);
}

/**
* @name: Regular verification mobile phone number
* @param {String} phone phone number
* @param {Boolean} isChina Is it a Chinese mobile phone number?
*/
export function checkPhone(phone: string, isChina: boolean = true) {
  let reg = isChina ? /^1[3-9]\d{9}$/ : /^[0-9]{8,15}$/;
  return reg.test(phone);
}

/**
* @name: Regular verification ID card number
* @param {String} idCard ID number
*/
export function checkIdCard(idCard: string) {
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(idCard);
}

/**
* @name: Regular verification bank card number
* @param {String} bankCard Bank card number
*/
export function checkBankCard(bankCard: string) {
  let reg = /^(\d{16}|\d{19})$/;
  return reg.test(bankCard);
}

/**
* @name:Judging the mobile phone system
*/
export function checkPhoneSystem() {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //Android terminal
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //iOS terminal
  return { isAndroid, isiOS };
}

/**
* @name: Judging the mobile phone number home
* @param {String} phone phone number
*/
export function getPhoneAttribution(phone: string) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=${phone}`);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        if (data.province) {
          resolve(data.province);
        } else {
          reject(new Error('Mobile phone number error'));
        }
      } else {
        reject(new Error('Request failed'));
      }
    }
    xhr.send();
  })
}

interface setting {
  method?: string, // Request way
  body?: any, // Request body
  headers?: any, // Request head
  mode?: string, // Request mode
  credentials?: any, // Request credential
  cache?: string, // Request cache
  redirect?: string, // Request redirection
  dataType?: string, // Return data type
  data?: any, // Request parameters
}

/**
* @name: Package FETCH request
* @param {string} url Request address
* @param {string} setting Request configuration
*/
export function fetch(url: string, setting: setting) { // FETCH request package
  let opts = { // Set the initial value of the parameter
    method: (setting.method || 'GET').toUpperCase(), // Request way
    headers: setting.headers || {}, // Request head setting
    credentials: setting.credentials || true, // Set whether cookies send together
    body: setting.body || {},
    mode: setting.mode || 'no-cors', // Can set cors, no-cors, same-origin
    redirect: setting.redirect || 'follow', // follow, error, manual
    cache: setting.cache || 'default' // Set cache mode(default, reload, no-cache)
  }
  let dataType = setting.dataType || 'json' // Parsing
  let data = setting.data || '' // parameter
  let paramsFormat = function (obj: any) { // Parameter format
    var str = ''
    for (var i in obj) {
      str += `${i}=${obj[i]}&`
    }
    return str.split('').slice(0, -1).join('')
  }

  if (opts.method === 'GET') {
    url = url + (data ? `?${paramsFormat(data)}` : '')
  } else {
    setting.body = data || {}
  }
  return new Promise((resolve, reject) => {
    fetch(url, opts).then(async (res: any) => {
      let data = dataType === 'text' ? await res.text() : dataType === 'blob' ? await res.blob() : await res.json()
      resolve(data)
    }).catch(e => {
      reject(e)
    })
  })
}

//Determine if it is a PC
export function isPC() { // Is it a PC side?
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

/**
* @name: Remove string spaces
* @param {string} str String
* @param {string} type Type 1: All space type 2: front and rear space type 3: Front space type 4: rear
*/
export function trim(str: string, type: number) {
  type = type || 1
  switch (type) {
    case 1:
      return str.replace(/\s+/g, '')
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '')
    case 3:
      return str.replace(/(^\s*)/g, '')
    case 4:
      return str.replace(/(\s*$)/g, '')
    default:
      return str
  }
}

/**
* @name: Filter HTML code
* @param {string} str String
*/
export function filterHTML(str: string) {
  return str.replace(/<\/?[^>]*>/g, '').replace(/[ | ]*\n/g, '\n').replace(/\n[\s| | ]*\r/g, '\n').replace(/&nbsp;/ig, '')
}

/**
* @name: Judging whether it is a floating point number 
* @param {any} val 
*/
export function isFloat(val: any) {
  return /^\d+\.\d+$/.test(val)
}

/**
 * @name: Judgment is an integer
 * @param {any} val 
 */
export function isInteger(val: any) {
  return /^\d+$/.test(val)
}

/**
* @name: Object serialization
* @param  {Object} obj 
* @return {String}
*/
export function stringifyQueryString(obj: any): string {
  if (!obj) return '';
  var pairs = [];

  for (var key in obj) {
    var value = obj[key];

    if (value instanceof Array) {
      for (var i = 0; i < value.length; ++i) {
        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
      }
      continue;
    }

    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }

  return pairs.join('&');
}

/**
 * @desc Get the distance from the top of the scroll bar
 */
export function getScrollTop(): number {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

/**
 * 
 * @desc H5 soft keyboard is retracted, bounce back
 * When the software keyboard pops up will change the current Window.innerHeight, monitor this value change
 * @param {Function} downCb When the soft keyboard bounces, the retracted callback
 * @param {Function} upCb When the soft keyboard bounces
 */

export function windowResize(downCb: Function, upCb: Function): void {
  var clientHeight = window.innerHeight;
  downCb = typeof downCb === 'function' ? downCb : function () { }
  upCb = typeof upCb === 'function' ? upCb : function () { }
  window.addEventListener('resize', () => {
    var height = window.innerHeight;
    if (height === clientHeight) {
      downCb();
    }
    if (height < clientHeight) {
      upCb();
    }
  });
}
