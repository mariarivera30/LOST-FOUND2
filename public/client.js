// app.js
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
		
		// url will be /form/interests
		.state('form.newsfeeds', {
			url: '/newsfeeds',
			templateUrl: 'newsfeeds.html'
		})
		
		// url will be /form/payment
		.state('form.reportfound', {
			url: '/reportfound',
			templateUrl: 'reportfound.html'
		});
		
	// catch all route
	// send users to the form page 
	$urlRouterProvider.otherwise('/form/newsfeeds');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
	
	// we will store all of our form data in this object
	$scope.formData = {};
	
	// function to process the form
	$scope.processForm = function() {
		alert('awesome!');
	};
	
});


function doctor() {

 
	$.mobile.loading("show");
	$.ajax({
		url : "http://localhost:3000/doctor/all",
		contentType: "application/json",
		success : function(data, textStatus, jqXHR){
			var categoryList = data.doctors;
			
			var list = $("#listview");
			list.empty();
			for (var key in categoryList){ 
				
					list.append("<li>" +categoryList[key].doctor_name+" " +categoryList[key].doctor_last +" "+categoryList[key].doctor_email+
					
					
					
					"</a></li>");
				

			}
			list.listview("refresh");
			$.mobile.loading("hide");
		},
		error: function(data, textStatus, jqXHR){
			console.log("textStatus: " + textStatus);
			//alert("Data not found!");
			$.mobile.navigate("#404ErrorPage");
		}

}); }
function addDoctor(){
	//need to fill all of these fields to submit a new product
	var name = document.getElementById("name").value;
	var last = document.getElementById("last").value;

	var jsonData = {"name": name,
					"last": last
					};
					//alert("ADDdOC");
					//alert(JSON.stringify(jsonData));

	$.ajax({
		url : "http://localhost:3000/doctor/signup1",
		type: 'POST',
		data: JSON.stringify(jsonData),
		contentType: "application/json",
		success: function(data, textStatus, jqXHR){
			alert("added Doc");
		},
		error: function(data, textStatus, jqXHR){
			alert("error adding Doctor");

		}
	});
		

}

function getdoctorbyid() {
var id = document.getElementById("search").value;
 
	$.mobile.loading("show");
	
	$.ajax({
		url : "http://localhost:3000/doctor/single/" + id,
		contentType: "application/json",
		success : function(data, textStatus, jqXHR){
			var categoryList = data.doctors;
			
			var list = $("#listview");
			list.empty();
			for (var key in categoryList){ 
				
					list.append("<li>" +categoryList[key].doctor_name+" " +categoryList[key].doctor_last +" "+categoryList[key].doctor_email+
					
					"</a></li>");
				

			}
			list.listview("refresh");
			$.mobile.loading("hide");
		},
		error: function(data, textStatus, jqXHR){
			console.log("textStatus: " + textStatus);
			//alert("Data not found!");
			$.mobile.navigate("#404ErrorPage");
		}

}); }
 


