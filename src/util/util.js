export const getRedicectPath = (avatar) => {
  console.log(avatar)
  let url = avatar  ? '/home' : '/userInfo'
  return url;
}