angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {

    })
    .controller('SubscribeController', function($scope) {
        $scope.submitEmail = function (email) {
                firebase.database().ref().set({
                email: cheese,
                });
                console.log($scope.subscriberEmail);
            };
        })
    .controller('RegisterController', function($scope) {
    });

       
//       

