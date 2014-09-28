

// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	
		// route to show our basic form (/form)
		.state('form', {
			url: '/form',
			templateUrl: 'form.html',
			controller: 'formController'
		})
		
		// nested states 
		// each of these sections will have their own view
		// url will be nested (/form/profile)
		.state('form.reportlost', {
			url: '/reportlost',
			templateUrl: 'reportlost.html'
		})
		.state('form.edititem', {
			url: '/edititem',
			templateUrl: 'edit-item.html'
		})

		
		// url will be /form/interests
		.state('form.newsfeeds', {
			url: '/newsfeeds',
			templateUrl: 'newsfeeds.html'
		})
		
		// url will be /form/payment
		.state('form.reportfound', {
			url: '/reportfound',
			templateUrl: 'reportfound.html'
		})
		.state('form.reportitem', {
			url: '/reportitem',
			templateUrl: 'reportitem.html'
		})
		.state('form.edit', {
			url: '/edit',
			templateUrl: 'edit-item.html'
		})
		.state('form.addcomment', {
			url: '/comment',
			templateUrl: 'addcomment.html'
		})
		.state('form.viewitem', {
			url: '/view',
			templateUrl: 'viewItem.html'
		})
		.state('form.feedback', {
			url: '/feedback',
			templateUrl: 'contact-us-feedback.html'
		})
		.state('form.about', {
			url: '/about',
			templateUrl: 'about-us.html'
		})
		.state('form.admin', {
			url: '/admin',
			templateUrl: 'admin.html'
		})

  		.state('form.admin.users', {
    		parent: 'form.admin',
    		url: '/adminusers',
			 templateUrl: 'adminusers.html'})

		.state('form.admin.category', {
    		parent: 'form.admin',
    		url: '/admincategories',
			 templateUrl: 'admincategories.html'})

  		.state('form.admin.items', {
    		parent: 'form.admin',
    		url: '/adminitems',
			 templateUrl: 'adminitems.html'})

  		.state('form.admin.comments', {
    		parent: 'form.admin',
    		url: '/admincomments',
			 templateUrl: 'admincomment.html'})

  		.state('form.admin.settings', {
    		parent: 'form.admin',
    		url: '/adminsettings',
			 templateUrl: 'adminSettings.html'})

	.state('form.admin.login', {
    		parent: 'form.admin',
    		url: '/adminlogin',
			 templateUrl: 'adminlogin.html'})

	
		.state('form.help', {
			url: '/help',
			templateUrl: 'help.html'
		});
		
		
	// catch all route
	// send users to the form page 
	$urlRouterProvider.otherwise('/form/newsfeeds');

})

	// function to process the form
	
.controller('formController', function($scope) {
	
	// we will store all of our form data in this object
	$scope.items = [{'name': 'Maria Rivera',
	     'itemId': '#80',
	 	  'views': '12',
	 	  'status':'FOUND',
	 	  'location':'Fisica'},

	 	  {	'name': 'Juan Rivera',
          	'itemId': '#70',
 	  		'views': '13',
 	  		'status':'LOST',
 	 		'location':'STEFANI'},

 	  	  {'name': 'Irving Rivera',
	     	'itemId': '#80',
	 	 	'views': '12',
	 	  	'status':'FOUND',
	 	    'location':'Fisica'},
	 	  {'name': 'Xavier De La Torre',
     		'itemId': '#890',
 	  		'views': '130',
 	  		'status':'FOUND',
 	  		'location':'Cafeteria'}];


	
	// function to process the form
	$scope.processForm = function() {
		alert('awesome!');
	};
	
})
.controller('CategoryController', function($scope) {
	
	// we will store all of our form data in this object
	$scope.categories = [{'name': 'Date'},{'name': 'Electronics'},{'name': 'Books'},{'name': 'Bags'},{'name': 'Personal'},{'name': 'Clothes'}
	,{'name': 'Other'}];
	
})

.controller('itemViewController', function($scope) {
	
	// we will store all of our form data in this object
	$scope.comments = [{'name': 'Maria Rivera',
	     
	 	  'date':'03/08/15',
	 	   'comment':'Las vi en el departamento'
	 	},
	 	{'name': 'Juan del Pueblo',
	     
	 	  'date':'03/08/15',
	 	   'comment':'Las tiene Pedro'
	 	},
	 	{'name': 'Karla Rivera',
	     
	 	  'date':'03/08/15',
	 	   'comment':'Se te calleron en el zafacon.'
	 	},
	 	];

$scope.item = {'name': 'Maria Rivera',
'phone':'7879787978',
	     'itemId': '#80',
	 	  'views': '12',
	 	  'status':'FOUND',
	 	  'location':'Fisica',
	 	  'reportDate':'03/08/15',
	 	   'itemName':'Keys',
	 	   'description':'Tiene 6 llaves. ',
	 		'city':'San Juan',
	 		'thumbsDown':'60',
	 		'successDate':'undelivered',
	 		'picture':'PICTURE'
	 	};
	
	// function to process the form
	$scope.processForm = function() {
		alert('awesome!');
	};
	
})
;





