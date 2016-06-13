angular.module('firebase.config', [])
  .constant('FBURL', 'https://pomp-9a862.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
