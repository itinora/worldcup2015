var worldcupApp  = angular.module('worldcup2015', [])
    .factory('_', function() {
        return window._; // assumes underscore has already been loaded on the page
    })
    .factory('moment', function() {
        return window.moment;
    });
//worldcupApp.service('tzdetect', ['moment', function() {
//    this.names = moment.tz.names();
//    this.matches =  function(base){
//        var results = [], now = Date.now(), makekey = function(id){
//            return [0, 4, 8, -5*12, 4-5*12, 8-5*12, 4-2*12, 8-2*12].map(function(months){
//                var m = moment(now + months*30*24*60*60*1000);
//                if (id) m.tz(id);
//                return m.format("DDHHmm");
//            }).join(' ');
//        }, lockey = makekey(base);
//        this.names.forEach(function(id){
//            if (makekey(id)===lockey) results.push(id);
//        });
//        return results;
//    }
//}]);
worldcupApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

// , 'match_datetime': '2015-02-14T11:00+13:00','timezone': 'Pacific/Auckland'
// , 'match_datetime': '2015-02-14T14:30+11:00', 'timezone': 'Australia/Melbourne', Hobart, Sydney
// , 'match_datetime': '2015-02-15T14:00+10:30', 'timezone': 'Australia/Adelaide'
// , 'match_datetime': '2015-02-14T13:30+10:00', 'timezone': 'Australia/Brisbane'
// , 'match_datetime': '2015-03-04T14:30+08:00', 'timezone': 'Australia/Perth'

worldcupApp
    .controller('ScheduleCtrl', [ '$scope', 'MatchesSvc', '_', '$log', 'moment',  function ($scope, MatchesSvc, _, $log, moment) {
        'use strict';

        //moment.tz.setDefault(match.timezone);
        //var userLocal = moment("2015-02-15T14:00+10:30");
        //$log.log(userLocal.format());
        //$log.log(userLocal.tz("Australia/Adelaide").format());
        //var userLocal = venueLocal.tz(tzdetect.matches()[0]).format('ha z');;
        $scope.timeFlag = false;
        $scope.toggleTimeFlag = function() {
            $scope.timeFlag = !$scope.timeFlag;
        }

        $scope.dates = MatchesSvc.getAllMatchDates();

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
                return moment(match.match_datetime).format("MMM DD HH:mm A").toUpperCase();
            }
        }

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

        $scope.venues = MatchesSvc.getAllVenues();
    }]
);
