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

        $scope.teamsInPool = function(pool){
            var result = [];
            for(var i= 0, team; team = $scope.teams[i]; i++) {
                if(team.pool === pool) {
                    result.push(team);
                }
            }

            var sortedResult = _(result).chain().sortBy('nrr').sortBy('pts').reverse().value();
            return sortedResult;
        };

        MatchesSvc.getAllMatches()
            .success(function(response){

                MatchesSvc.setMatches(response.matches);

                $scope.teams = response.teams;
                $scope.poolATeams = $scope.teamsInPool('A');
                $scope.poolBTeams = $scope.teamsInPool('B');

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

angular.module('worldcup2015')
.service('MatchesSvc', ['_', 'moment', '$http', function(_, moment, $http) {

        this.matches = null;

        this.setMatches = function(matches) {
            this.matches = matches;
        }
        this.getAllMatches = function() {
            var params = {
                'itinora': new Date().getTime()
            };
            var config = {
                params: params
            };
            return $http.get("/worldcup2015/static/data/matches.json", config);
        };

        this.getAllVenues = function() {
            return _.unique(_.map(this.matches, function(match){
                return {'city': match.city, 'stadium': match.stadium, selected: false};
            }), false, function(v){
                return v.city;
            });
        };

        this.getAllMatchDates = function() {
            return _.unique(_.sortBy(_.map(this.matches, function(match){
                return {'date': match.match_date, selected: false, 'pool': match.pool};
            }), 'date'), false, function(v){
                return v.date;
            });
        }

        this.getMatchesForDate = function(date) {
            return _.where(this.matches, {match_date : date});
        }

        this.getMatchesForTeam = function(team) {
            return _.filter(this.matches, function(match) {
                return match.team_one_long === team.name || match.team_two_long === team.name;
            });
        }

        this.getMatchesForVenue = function(venue) {
            return _.where(this.matches, {city : venue.city});
        }
    }]);