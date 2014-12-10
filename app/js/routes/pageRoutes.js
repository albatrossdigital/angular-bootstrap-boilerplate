'use strict';

angular.module('app.page', [
  'ui.router',
])

.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      $stateProvider

        .state("about", {
          url: "/about",
          data: { 
            title: 'About',                 // Sets meta title
            description: 'About the about', // Sets different meta description
            keywords: 'About, this, page',  // Sets different meta keywords
            skipScroll: false               // Skips scroll animation (embedded ui-views)
          },
          templateUrl: 'views/about.html'
        })


    }
  ]
);
