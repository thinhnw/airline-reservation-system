
export default {
  userInfo: state => state.userInfo,
  isLogged: state => state.isLogged,
  isAdmin: state => state.userInfo?.user_type === 'admin',
  isMeFetched: state => state.isMeFetched
}
