/**
 * @desc 判断是否为外部链接
 * @param {string} url - 链接
 */
export function isHttpOrHttpsUrl(url: string): boolean {
  let reg = /(http|https):\/\/([\w.]+\/?)\S*/;
  return reg.test(url.toLowerCase());
}
