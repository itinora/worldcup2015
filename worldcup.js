angular.module('worldcup2015', [])
.controller('ScheduleCtrl', [ '$scope', function ($scope) {
        'use strict';

        $scope.dates = [
            { 'date': '2015-02-14', 'selected': false},
            { 'date': '2015-02-15', 'selected': false},
            { 'date': '2015-02-16', 'selected': false},
            { 'date': '2015-02-17', 'selected': false},
            { 'date': '2015-02-19', 'selected': false},
            { 'date': '2015-02-20', 'selected': false},
            { 'date': '2015-03-01', 'selected': false},
            { 'date': '2015-03-02', 'selected': false},
            { 'date': '2015-03-03', 'selected': false}
        ];
        $scope.month = function(date) {
            return date.substr(6,1) === '2' ? 'Feb' : 'Mar';
        };
        $scope.dateOfMonth = function(date) {
            return date.substr(8,2);
        };

        $scope.onDateSelect = function(date) {
            $scope.deselectAll();
            $scope.teams[2].selected = true;
            $scope.teams[7].selected = true;
            $scope.teams[10].selected = true;
            $scope.venues[1].selected = true;
            $scope.venues[8].selected = true;
        };

        $scope.onDateDeselect = function(date) {
            for(var i= 0, team; team = $scope.teams[i];i++) {
                team.selected = false;
            }
        };

        $scope.teams = [
            {'name': 'England', 'pool': 'A', 'selected': false},
            {'name': 'Australia', 'pool': 'A', 'selected': false},
            {'name': 'Sri Lanka', 'pool': 'A', 'selected': false},
            {'name': 'Bangladesh', 'pool': 'A', 'selected': false},
            {'name': 'New Zealand', 'pool': 'A', 'selected': false},
            {'name': 'Afghanistan', 'pool': 'A', 'selected': false},
            {'name': 'Scotland', 'pool': 'A', 'selected': false},
            {'name': 'South Africa', 'pool': 'B', 'selected': false},
            {'name': 'India', 'pool': 'B', 'selected': false},
            {'name': 'Pakistan', 'pool': 'B', 'selected': false},
            {'name': 'West Indies', 'pool': 'B', 'selected': false},
            {'name': 'Zimbabwe', 'pool': 'B', 'selected': false},
            {'name': 'Ireland', 'pool': 'B', 'selected': false},
            {'name': 'United Arab Emirates', 'pool': 'B', 'selected': false},
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
        $scope.onTeamSelect = function(team) {
            $scope.deselectAll();
            $scope.dates[2].selected = true;
            $scope.dates[4].selected = true;
            $scope.venues[5].selected = true;
            $scope.venues[9].selected = true;
        };

        $scope.onVenueSelect = function(venue) {
            $scope.deselectAll();
            $scope.dates[0].selected = true;
            $scope.dates[1].selected = true;
            $scope.dates[5].selected = true;
            $scope.teams[4].selected = true;
            $scope.teams[8].selected = true;
            $scope.teams[11].selected = true;
        };

        $scope.deselectAll = function() {
            for(var i= 0, date; date = $scope.dates[i];i++) {
                date.selected = false;
            }
            for(var i= 0, team; team = $scope.teams[i];i++) {
                team.selected = false;
            }
            for(var i= 0, venue; venue = $scope.venues[i];i++) {
                venue.selected = false;
            }
        };


        $scope.venues =  [
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false},
            {'stadium': 'Stadium 1', 'city': 'Melbourne', 'selected': false}
        ];
    }]);
