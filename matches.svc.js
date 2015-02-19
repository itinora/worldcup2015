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
            return $http.get("/static/data/matches.json", config);
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