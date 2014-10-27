/* jshint unused: false */
'use strict';

/**
 * @ngdoc directive
 * @name assemstylecomApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('assemstylecomApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the navbar directive');
      // }
    };
  });
