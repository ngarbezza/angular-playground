'use strict';

PlaygroundApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  //$urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('parent', {
      url: '/parent',
      templateUrl: "views/partials/parent.html"
    })
    .state('parent.state1', {
      url: "/state1",
      templateUrl: "views/partials/state1.html"
    })
    .state('parent.state2', {
      url: "/state2",
      templateUrl: "views/partials/state2.html"
    });
});
