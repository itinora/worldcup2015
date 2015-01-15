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

        $scope.teams = [
            {'name': 'England', 'pool': 'A'},
            {'name': 'Australia', 'pool': 'A'},
            {'name': 'Sri Lanka', 'pool': 'A'},
            {'name': 'Bangladesh', 'pool': 'A'},
            {'name': 'New Zealand', 'pool': 'A'},
            {'name': 'Afghanistan', 'pool': 'A'},
            {'name': 'Scotland', 'pool': 'A'},
            {'name': 'South Africa', 'pool': 'B'},
            {'name': 'India', 'pool': 'B'},
            {'name': 'Pakistan', 'pool': 'B'},
            {'name': 'West Indies', 'pool': 'B'},
            {'name': 'Zimbabwe', 'pool': 'B'},
            {'name': 'Ireland', 'pool': 'B'},
            {'name': 'United Arab Emirates', 'pool': 'B'},
        ];
        $scope.teamsInPool = function(pool){
            var result = [];
            for(var i= 0, team; team = $scope.teams[i]; i++) {
                if(team.pool === pool) {
                    result.push(team);
                }
            }
            return result;
        };

        $scope.venues =  [
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'},
            {'stadium': 'Stadium 1', 'city': 'Melbourne'}
        ];
    }]);
