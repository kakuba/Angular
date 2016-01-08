angular.module('app.books').factory('bookModalService', function () {
    'use strict';

    var id, title, authorList = [];
    
    return {
    	clear: function () {
    		title = null;
    		authorList = [];
    	},
    	getAuthorList: function () {
    		return authorList;
    	},
    	getAuthorString: function () {
    		var i, list = [];
    		
    		for (i = 0; i < authorList.length; i += 1) {
    			list.push(authorList[i].fname + " " + authorList[i].lname)
    		}
    		
    		return list.join(', ');
    	},
    	addAuthor: function (fname, lname) {
    		authorList.push({
    				fname: fname,
    				lname: lname
    		});
    	},
    	getTitle: function () {
    		return title;
    	},
    	setTitle: function (btitle) {
    		title = btitle;
    	},
    	getId: function () {
    		return id;
    	},
    	setId: function (bid) {
    		id = bid;
    	},
    	setAuthors: function (bauthors) {
    		var i, names, list = bauthors.split(', ');
    		
    		for (i = 0; i < list.length; i += 1) {
    			names = list[i].split(' ');
    			authorList.push({
    				fname: names[0],
    				lname: names[1]
    			})
    		}
    	}
    	
    };
});
