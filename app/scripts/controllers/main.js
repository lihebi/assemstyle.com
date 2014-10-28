/* global $ */
'use strict';

/**
 * @ngdoc function
 * @name assemstylecomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assemstylecomApp
 */
angular.module('assemstylecomApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $('#fullpage').fullpage({
      sectionsColor: ['#c63d0f', '#1bbc9b', '#7e8f7c'],
      navigation: true,
      navigationPosition: 'right',
      slidesNavigation: true,
      css3: true
    });
  });
