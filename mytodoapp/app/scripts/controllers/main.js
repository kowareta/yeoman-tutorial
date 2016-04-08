'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var vm =this;
    vm.todos = [];

    var todosInStore = localStorageService.get('todos');
    vm.todos = todosInStore || [];
    $scope.$watch('todos', function () {
      localStorageService.set('todos', vm.todos);
    }, true);

    vm.addTodo = function() {
      vm.todos.push(vm.todo);
      vm.todo = '';
    };

    vm.removeTodo = function(index) {
      vm.todos.splice(index, 1);
    };
  });
