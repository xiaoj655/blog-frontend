export default function loginGuard(to, from, next) {
  // check local access token
  if (to.name === 'login') {
    next();
  } else if (!!localStorage.getItem('access_token')) {
    next();
  } else {
    next({ name: 'login' });
  }
}
