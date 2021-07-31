
export default {
  userInfo: state => state.userInfo,
  isLogged: state => state.userInfo?.id,
  isAdmin: state => state.userInfo?.user_type === 'admin'
}
