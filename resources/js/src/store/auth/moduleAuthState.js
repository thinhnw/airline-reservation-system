export default {
  // userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}'),
  // adminInfo: JSON.parse(localStorage.getItem('adminInfo') || '{}'),
  userInfo: {},
  isLogged: localStorage.getItem('accessToken') ? true : false,
  isMeFetched: false
}

