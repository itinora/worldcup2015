angular.module('worldcup2015', [])
.controller('ScheduleCtrl', [ '$scope', function ($scope) {
        'use strict';

        $scope.dates = ['2015-02-14', '2015-02-15', '2015-02-16', '2015-02-17', '2015-02-18', '2015-02-19', '2015-02-20' ];
        $scope.month = function(date){
            return date.substr(6,1) === '2' ? 'Feb' : 'Mar';
        };
        $scope.dateOfMonth = function(date){
            return date.substr(8,2);
        };
    }]);
