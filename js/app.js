var policeApp = angular.module('policeApp', []);

policeApp.controller('formController', function ($scope, $http) {

    $scope.citizenships = [
        { id: 0, name: "Eesti Vabariik" },
        { id: 1, name: "Soome Vabariik" },
        { id: 2, name: "Läti Vabariik" },
        { id: 3, name: "Leedu Vabariik" }
    ]

});

policeApp.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
            });
        }
    };
});

function MyCtrl($scope) {
    $scope.gPlace;
}
