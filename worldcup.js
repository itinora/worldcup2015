var worldcupApp  = angular.module('worldcup2015', [])
    .factory('_', function() {
        return window._; // assumes underscore has already been loaded on the page
    })
    .factory('moment', function() {
        return window.moment;
    });

worldcupApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

worldcupApp
    .controller('ScheduleCtrl', [ '$scope', 'MatchesSvc', '_', '$log', 'moment', function ($scope, MatchesSvc, _, $log, moment) {
        'use strict';

        $scope.timeFlag = false;
        $scope.toggleTimeFlag = function() {
            $scope.timeFlag = !$scope.timeFlag;
        }

        MatchesSvc.getAllMatches()
            .success(function(response){

                MatchesSvc.setMatches(response.matches);

                $scope.dates = MatchesSvc.getAllMatchDates();

                $scope.venues = MatchesSvc.getAllVenues();

                $scope.showTodaysMatches = function() {
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth()+1;
                    var yyyy = today.getFullYear();
                    if(dd<10) {
                        dd='0'+dd
                    }

                    if(mm<10) {
                        mm='0'+mm
                    }

                    today = yyyy + '-' + mm + '-' + dd;
                    $scope.onDateSelect(today);
                    highlightDatesForSelectedMatches();
                };

                $scope.showTodaysMatches();
        });

        $scope.month = function(date) {
            return date.substr(6,1) === '2' ? 'Feb' : 'Mar';
        };
        $scope.dateOfMonth = function(date) {
            return date.substr(8,2);
        };

        $scope.getTime = function(match) {
            if ($scope.timeFlag) {
                return $scope.month(match.match_date).toUpperCase()
                    + " " + $scope.dateOfMonth(match.match_date).toUpperCase()
                    + " " + match.start_time.toUpperCase();
            } else {
                return moment(match.match_datetime).format("MMM DD hh:mm A").toUpperCase();
            }
        };

        $scope.selectedMatches = {};

        $scope.onDateSelect = function(date, staySelected) {
            staySelected = staySelected || false;
            if(!$scope.staySelected && staySelected) {
                $scope.staySelected = true;
            }

            $scope.deselectAll();

            $scope.selectedMatches = MatchesSvc.getMatchesForDate(date);
            highlightTeamsForSelectedMatches();
            highlightVenuesForSelectedMatches();
        };

        var highlightDatesForSelectedMatches = function() {
            $scope.dates = _.map($scope.dates, function(date) {
                _.each($scope.selectedMatches, function(match) {
                    if(match.match_date === date.date) {
                        date.selected = true;
                    }
                });
                return date;
            });
        };

        var highlightTeamsForSelectedMatches = function() {
            $scope.teams = _.map($scope.teams, function(team) {
                _.each($scope.selectedMatches, function(match) {
                    if(match.team_one_long === team.name || match.team_two_long === team.name) {
                        team.selected = true;
                    }
                });
                return team;
            });
        };

        var highlightVenuesForSelectedMatches = function() {
            $scope.venues = _.map($scope.venues, function(venue) {
                _.each($scope.selectedMatches, function(match) {
                    if(match.city === venue.city) {
                        venue.selected = true;
                    }
                });
                return venue;
            });
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
        $scope.onTeamSelect = function(team, staySelected) {
            staySelected = staySelected || false;
            if(!$scope.staySelected && staySelected) {
                $scope.staySelected = true;
            }
            $scope.deselectAll();
            $scope.selectedMatches = MatchesSvc.getMatchesForTeam(team);
            highlightDatesForSelectedMatches();
            highlightVenuesForSelectedMatches();
        };

        $scope.onVenueSelect = function(venue, staySelected) {
            staySelected = staySelected || false;
            if(!$scope.staySelected && staySelected) {
                $scope.staySelected = true;
            }
            $scope.deselectAll();
            $scope.selectedMatches = MatchesSvc.getMatchesForVenue(venue);
            highlightDatesForSelectedMatches();
            highlightTeamsForSelectedMatches();
        };

        $scope.deselectAll = function() {
            if(!$scope.staySelected) {
                $scope.selectedMatches = {};
            }

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

    }]
);
