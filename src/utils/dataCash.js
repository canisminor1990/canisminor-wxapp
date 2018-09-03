import Taro from '@tarojs/taro';
import _ from 'lodash';

export default class DataCash {
  constructor(namespace, timeout = 60000) {
    this.namespace = namespace;
    this.timeout = timeout;
  }

  get() {
    const local = Taro.getStorageSync(this.namespace);
    if (local && _.size(local.data) > 0 && local.time && Date.now() - local.time < this.timeout) {
      return local.data;
    }
    return false;
  }

  set(data) {
    Taro.setStorageSync(this.namespace, { time: Date.now(), data });
  }
}
