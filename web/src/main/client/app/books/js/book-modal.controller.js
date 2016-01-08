angular.module('app.books').controller('BookModalController', function ($scope, $modal, $modalInstance, bookModalService, bookRestService) {
    'use strict';

    $scope.title = 'Dodawanie nowej książki';
    $scope.addAuthorButton = 'Dodaj autora';
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
    		title: bookModalService.getTitle(),
    		authors: bookModalService.getAuthorString()
    	});
    	bookModalService.clear();
    	$modalInstance.close();
    };
    
    $scope.addAuthor = function () {
        $modal.open({
            templateUrl: 'books/html/author-modal.html',
            controller: 'AuthorModalController',
            size: 'lg'
        });
    };
    
    $scope.close = function () {
    	bookModalService.clear();
    	$modalInstance.close();
    };
});
