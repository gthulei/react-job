export const getRedicectPath = (avatar) => {
  let url = avatar  ? '/me' : '/userInfo'
  return url;
}