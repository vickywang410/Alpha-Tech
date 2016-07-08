angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('loadingPage', {
    url: '/loading_page',
    templateUrl: 'templates/loadingPage.html',
    controller: 'loadingPageCtrl'
  })

  .state('homePage', {
    url: '/home',
    templateUrl: 'templates/homePage.html',
    controller: 'homePageCtrl'
  })

  .state('alarms', {
    url: '/alarms',
    templateUrl: 'templates/alarms.html',
    controller: 'alarmsCtrl'
  })

  .state('setting', {
    url: '/setting',
    templateUrl: 'templates/setting.html',
    controller: 'settingCtrl'
  })

$urlRouterProvider.otherwise('/loading_page')

  

});