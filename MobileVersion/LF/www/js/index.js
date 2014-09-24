angular.module('LostFound', ['ionic'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            
         

            .state('main', {
                url : '/main',
                templateUrl : 'mainContainer.html',
                abstract : true,
                controller : 'MainController'
            })

        
            .state('main.home', {
                url: '/home',
                views: {
                    'main': {
                        templateUrl: 'home.html',
                        controller : 'homePageController'
                    }
                }
            })

            .state('main.item', {
                 url: '/item',
                 views: {
                     'main': {
                         templateUrl: 'item.html',
                         controller : 'itemPageController'
                     }
                 }
            })

             .state('main.reportitem1', {
                 url: '/reportitem1',
                 views: {
                     'main': {
                         templateUrl: 'reportitem1.html',
                         controller : 'reportitem1PageController'
                     }
                 }
            })
            .state('main.reportitem2', {
                 url: '/reportitem2',
                 views: {
                     'main': {
                         templateUrl: 'reportitem2.html',
                         controller : 'reportitem2PageController'
                     }
                 }
            })

            .state('main.info', {
                url: '/info',
                views: {
                    'main': {
                        templateUrl: 'info.html',
                        controller : 'InfoPageController'
                    }
                }
            })

             .state('main.feedback', {
                 url: '/feedback',
                 views: {
                     'main': {
                         templateUrl: 'feedback.html',
                         controller : 'feedbackPageController'
                     }
                 }
            })



        $urlRouterProvider.otherwise('/main/home');
    }])

    
    .controller('MainController', [ '$scope', function($scope) {
        $scope.toggleMenu = function() {
            $scope.sideMenuController.toggleLeft();
        }
    }])


    
    .controller('homePageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Lost/Found';
        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
         $scope.rightButtons = [{
            type: 'button-icon icon ion-paper-airplane',
            tap: function(e) {
                $state.go('main.reportitem1');
            }
        }];
    }])


    .controller('itemPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Item';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
        //  $scope.rightButtons = [{
        //     type: 'button-icon icon ion-navicon',
        //     tap: function(e) {
        //         $scope.toggleMenu();
        //     }
        // }];
    }])

    .controller('reportitem1PageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Report Item';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])
    .controller('reportitem2PageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Report Item';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
               
            }
        }];
        $scope.rightButtons = [{
            type: 'button-icon icon ion-ios7-upload-outline',
            tap: function(e) {
                $state.go('entry');
            }
        }];
    }])
  
    .controller('InfoPageController', [ '$scope', '$state', function($scope, $state) {
            $scope.navTitle = 'Info Page';

            $scope.leftButtons = [{
                type: 'button-icon icon ion-navicon',
                tap: function(e) {
                    $scope.toggleMenu();
                }
            }];
        }])

    .controller('feedbackPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Leave a FeedBack';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])
   




