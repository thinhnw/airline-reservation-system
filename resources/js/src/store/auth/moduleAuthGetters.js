
export default {
  userInfo: state => state.userInfo,
  isLogged: state => state.userInfo?.id
}
