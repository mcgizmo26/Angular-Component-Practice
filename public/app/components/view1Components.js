angular.module('angularApp')
	.component('view1Component', {

		bindings: {
			name: '<',
			age: '<'
		},

		controller: function($scope, family) {
			$scope.familyData = function() {
				$scope.familyMember = family;
			}
			$scope.familyData();

		},

		templateUrl: "./app/views/view1/view1Component.html"
	})
