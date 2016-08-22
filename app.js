var app = angular.module('WAAApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'angularUtils.directives.dirPagination']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app/views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html"
    });

    $routeProvider.when("/administrator", {
        controller: "administratorController",
        templateUrl: "/app/views/administrator.html"
    });

    $routeProvider.when("/administrator/statistics", {
        controller: "administratorController",
        templateUrl: "/app/views/statistics.html"
    });

    $routeProvider.when("/administrator/employees", {
        controller: "employeesController",
        templateUrl: "/app/views/customers.html"
    });

    $routeProvider.when("/administrator/newEmployee", {
        controller: "newEmployeeController",
        templateUrl: "/app/views/newEmployee.html"
    });
    
    $routeProvider.when("/clients/orders", {
        controller: "ordersController",
        unsetCache: true,
        templateUrl: "/app/views/orders.html"
    });

    $routeProvider.when("/clients/files", {
        controller: "clientsController",
        templateUrl: "/app/views/files.html"
    });

    $routeProvider.when("/clients/orderDetails/:orderId", {
        controller: "orderDetailsController",
        templateUrl: "/app/views/orderDetails.html"
    });

    $routeProvider.when("/clients/submitAuctionbids", {
        controller: "submitAuctionbidsController",
        templateUrl: "/app/views/submitAuctionbids.html"
    });

    $routeProvider.when("/waa-team", {
        controller: "waateamController",
        templateUrl: "/app/views/waateam.html"
    });

    $routeProvider.when("/waa-team/statistics", {
        controller: "administratorController",
        templateUrl: "/app/views/statistics.html"
    });

    $routeProvider.when("/waa-team/orders", {
        controller: "ordersController",
        templateUrl: "/app/views/orders.html"
    });

    $routeProvider.when("/waa-team/orderDetails/:orderId", {
        controller: "orderDetailsController",
        templateUrl: "/app/views/orderDetails.html"
    });

    $routeProvider.when("/waa-team/clients", {
        controller: "customersController",
        templateUrl: "/app/views/customers.html"
    });

    $routeProvider.when("/refresh", {
        controller: "refreshController",
        templateUrl: "/app/views/refresh.html"
    });

    $routeProvider.when("/tokens", {
        controller: "tokensManagerController",
        templateUrl: "/app/views/tokens.html"
    });

    $routeProvider.when("/associate", {
        controller: "associateController",
        templateUrl: "/app/views/associate.html"
    });

    $routeProvider.when("/congratulation/:email", {
        controller: "congratulationController",
        templateUrl: "/app/views/congratulation.html"
    });

    $routeProvider.when("/confirmation/:email/:securityStamp", {
        controller: "confirmationController",
        templateUrl: "/app/views/confirmation.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });

});

var serviceBase = 'http://localhost:26264/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', '$rootScope', '$templateCache', function (authService, $rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {        
        $templateCache.removeAll();
    });
    authService.fillAuthData();
}]);
