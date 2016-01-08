angular.module('app.books').controller('AuthorModalController', function ($scope, $modalInstance, bookModalService) {
    'use strict';

    $scope.title = 'Dodawanie nowego autora';
    
    $scope.submit = function(form) {
    	// Trigger validation flag.
    	$scope.submitted = true;

    	// If form is invalid, return and let AngularJS show validation errors.
    	if (form.$invalid) {
    		return;
    	}
	  
    	bookModalService.addAuthor($scope.fname,$scope.lname);
    	
    	$modalInstance.close();
    };
    
});
