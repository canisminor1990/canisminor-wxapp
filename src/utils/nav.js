import { stringify } from 'query-string';
import { forEach } from 'lodash';

function handleNav(e) {
  const data = e.currentTarget.dataset;
  if (!data.src) data.src = '/routes/Qrcode/index';
  console.log('[handleNav]', data);
  wx.navigateTo({ url: `${data.src}?${stringify(data)}` });
}

function handleNavData(option) {
  const data = {};
  forEach(option, (item, key) => (data[key] = key !== ('src' | 'url') ? decodeURI(item) : item));
  return data;
}

function handleBack(url) {
  const pages = getCurrentPages().length;
  if (pages > 1) {
    wx.switchTab({ url: url });
  } else {
    wx.navigateBack();
  }
}

function handleShare(title) {
  const pages = getCurrentPages(); // eslint-disable-line
  const currentPage = pages[pages.length - 1]; // 获取当前页面的对象
  const url = currentPage.route; // 当前页面url
  const opt = currentPage.options; // 如果要获取url中所带的参数可以查看options

  return {
    title: title ? `${title} - CanisMinor` : 'CanisMinor',
    path: `${url}?${stringify(opt)}`,
  };
}

export { handleNav, handleNavData, handleShare, handleBack };
