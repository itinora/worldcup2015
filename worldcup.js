var worldcupApp  = angular.module('worldcup2015', [])
    .factory('_', function() {
        return window._; // assumes underscore has already been loaded on the page
});

worldcupApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

worldcupApp
    .controller('ScheduleCtrl', [ '$scope', 'MatchesSvc', '_', '$log', function ($scope, MatchesSvc, _, $log) {
        'use strict';

        $scope.dates = MatchesSvc.getAllMatchDates();

        $scope.month = function(date) {
            return date.substr(6,1) === '2' ? 'Feb' : 'Mar';
        };
        $scope.dateOfMonth = function(date) {
            return date.substr(8,2);
        };

        $scope.selectedMatches = {};
        $scope.onDateSelect = function(date) {
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
            $scope.selectedMatches = MatchesSvc.getMatchesForTeam(team);
            highlightDatesForSelectedMatches();
            highlightVenuesForSelectedMatches();
        };

        $scope.onVenueSelect = function(venue) {
            $scope.deselectAll();
            $scope.selectedMatches = MatchesSvc.getMatchesForVenue(venue);
            highlightDatesForSelectedMatches();
            highlightTeamsForSelectedMatches();
        };

        $scope.deselectAll = function() {
            $scope.selectedMatches = {};

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

        $scope.venues = MatchesSvc.getAllVenues();
    }]
);
