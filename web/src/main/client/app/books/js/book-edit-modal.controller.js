angular.module('app.books').controller('BookEditModalController', function ($scope, $modalInstance, bookModalService, bookRestService) {
    'use strict';

    $scope.title = 'Edytowanie książki';
    $scope.btitle = bookModalService.getTitle();
    $scope.authorList = bookModalService.getAuthorList();
    $scope.submit = function(form) {
    	// Trigger validation flag.
    	$scope.submitted = true;

    	// If form is invalid, return and let AngularJS show validation errors.
    	if (form.$invalid) {
    		return;
    	}
	  
    	bookModalService.setTitle($scope.btitle);
    	
    	bookRestService.saveBook({
    		id: bookModalService.getId(),
    		title: bookModalService.getTitle(),
    		authors: bookModalService.getAuthorString()
    	});
    	bookModalService.clear();
    	$modalInstance.close();
    };
    
    
    $scope.close = function () {
    	bookModalService.clear();
    	$modalInstance.close();
    };
});
