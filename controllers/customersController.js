'use strict';

app.controller('customersController', [
    '$scope', '$route', 'customersService', 'authService', function ($scope, $route, customersService, authService) {

        $scope.customers = [];
        $scope.customerSsoVisible = authService.authentication.access.CustomerSsoVisible;

        $scope.isCustomerList = true;

        customersService.getCustomers().then(function(results) {

            $scope.customers = results.data;

        }, function(error) {
            alert(error.data.message);
        });

        $scope.lock = function(isLock, customer) {

            customer.lockoutEnabled = isLock;

            customersService.setLock(customer).then(function(response) {
                    $route.reload();
                },
                function(err) {
                    $scope.message = err.error_description;
                });
        };

        $scope.setSso = function (customer) {
            customersService.setSso(customer).then(function (response) {
                $route.reload();
            },
            function (err) {
                alert(err);
            });
        }
    }
]);