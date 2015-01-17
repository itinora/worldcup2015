angular.module('worldcup2015')
.service('MatchesSvc', ['_', function(_) {
        var matches = [
            {
                'city' : 'Adelaide', 'stadium': 'Adelide Oval', 'match_date': '2015-02-15', 'match_day':'Sunday', 'match_type':'DN'
                , 'team_one_long': 'India', 'team_one_short': 'IND', 'team_two_long': 'Pakistan', 'team_two_short': 'PAK', 'start_time' : '02:00 pm', 'timezone': 'Australia/Adelaide', 'pool': 'B'
            },
            {
                'city' : 'Adelaide', 'stadium': 'Adelide Oval', 'match_date': '2015-03-09', 'match_day':'Monday', 'match_type':'DN'
                , 'team_one_long': 'England', 'team_one_short': 'ENG', 'team_two_long': 'Bangladesh', 'team_two_short': 'BAN', 'start_time' : '02:00 pm', 'timezone': 'Australia/Adelaide', 'pool' : 'A'
            },

            {
                'city' : 'Adelaide', 'stadium': 'Adelide Oval', 'match_date': '2015-03-15', 'match_day':'Sunday', 'match_type':'DN'
                , 'team_one_long': 'Pakistan', 'team_one_short': 'PAK', 'team_two_long': 'Ireland', 'team_two_short': 'IRE', 'start_time' : '02:00 pm', 'timezone': 'Australia/Adelaide', 'pool' : 'B'
            },

            {
                'city' : 'Adelaide', 'stadium': 'Adelide Oval', 'match_date': '2015-03-20', 'match_day':'Friday', 'match_type':'DN'
                , 'team_one_long': 'TBD', 'team_one_short': 'TBD', 'team_two_long': 'TBD', 'team_two_short': 'TBD', 'start_time' : '02:00 pm', 'timezone': 'Australia/Adelaide', 'pool' : 'F'
            },

            {
                'city' : 'Brisbane', 'stadium': 'Gabba', 'match_date': '2015-02-21', 'match_day':'Saturday', 'match_type':'DN'
                , 'team_one_long': 'Australia', 'team_one_short': 'AUS', 'team_two_long': 'Bangladesh', 'team_two_short': 'BAN', 'start_time' : '01:30 pm', 'timezone': 'Australia/Brisbane', 'pool' : 'A'
            },
            {
                'city' : 'Brisbane', 'stadium': 'Gabba', 'match_date': '2015-02-25', 'match_day':'Wednesday', 'match_type':'DN'
                , 'team_one_long': 'Ireland', 'team_one_short': 'IRE', 'team_two_long': 'United Arab Emirates', 'team_two_short': 'UAE', 'start_time' : '01:30 pm', 'timezone': 'Australia/Brisbane', 'pool' : 'B'
            },
            {
                'city' : 'Brisbane', 'stadium': 'Gabba', 'match_date': '2015-03-01', 'match_day':'Sunday', 'match_type':'DN'
                , 'team_one_long': 'Pakistan', 'team_one_short': 'PAK', 'team_two_long': 'Zimbabwe', 'team_two_short': 'ZIM', 'start_time' : '01:30 pm', 'timezone': 'Australia/Brisbane', 'pool' : 'B'
            },
            {
                'city' : 'Canberra', 'stadium': 'Manuka Oval', 'match_date': '2015-02-18', 'match_day':'Wednesday', 'match_type':'DN'
                , 'team_one_long': 'Bangladesh', 'team_one_short': 'BAN', 'team_two_long': 'Afghanistan', 'team_two_short': 'AFG', 'start_time' : '02:30 pm', 'timezone': 'Australia/Hobart', 'pool' : 'A'
            },
            {
                'city' : 'Canberra', 'stadium': 'Manuka Oval', 'match_date': '2015-02-24', 'match_day':'Tuesday', 'match_type':'DN'
                , 'team_one_long': 'West Indies', 'team_one_short': 'WI', 'team_two_long': 'Zimbabwe', 'team_two_short': 'ZIM', 'start_time' : '02:30 pm', 'timezone': 'Australia/Hobart', 'pool' : 'B'
            },
            {
                'city' : 'Canberra', 'stadium': 'Manuka Oval', 'match_date': '2015-03-03', 'match_day':'Tuesday', 'match_type':'DN'
                , 'team_one_long': 'South Africa', 'team_one_short': 'SA', 'team_two_long': 'Ireland', 'team_two_short': 'IRE', 'start_time' : '02:30 pm', 'timezone': 'Australia/Hobart', 'pool' : 'B'
            },
            {
                'city' : 'Hobart', 'stadium': 'Bellerive Oval', 'match_date': '2015-03-07', 'match_day':'Saturday', 'match_type':'DN'
                , 'team_one_long': 'Zimbabwe', 'team_one_short': 'ZIM', 'team_two_long': 'Ireland', 'team_two_short': 'IRE', 'start_time' : '02:30 pm', 'timezone': 'Australia/Hobart', 'pool' : 'B'
            },
            {
                'city' : 'Hobart', 'stadium': 'Bellerive Oval', 'match_date': '2015-03-11', 'match_day':'Wednesday', 'match_type':'DN'
                , 'team_one_long': 'Sri Lanka', 'team_one_short': 'SRI', 'team_two_long': 'Scotland', 'team_two_short': 'SCO', 'start_time' : '02:30 pm', 'timezone': 'Australia/Hobart', 'pool' : 'A'
            },
            {
                'city' : 'Hobart', 'stadium': 'Bellerive Oval', 'match_date': '2015-03-14', 'match_day':'Saturday', 'match_type':'DN'
                , 'team_one_long': 'Australia', 'team_one_short': 'AUS', 'team_two_long': 'Scotland', 'team_two_short': 'SCO', 'start_time' : '02:30 pm', 'timezone': 'Australia/Hobart', 'pool' : 'A'
            },
            {
                'city' : 'Melbourne', 'stadium' : 'MCG', 'match_date': '2015-02-14', 'match_day':'Saturday', 'match_type':'DN'
                , 'team_one_long': 'Australia', 'team_one_short': 'AUS', 'team_two_long': 'England', 'team_two_short': 'ENG', 'start_time' : '02:30 pm', 'timezone': 'Australia/Melbourne', 'pool' : 'A'
            },
            {
                'city' : 'Melbourne', 'stadium' : 'MCG', 'match_date': '2015-02-22', 'match_day':'Sunday', 'match_type':'DN'
                , 'team_one_long': 'South Africa', 'team_one_short': 'SA', 'team_two_long': 'India', 'team_two_short': 'IND', 'start_time' : '02:30 pm', 'timezone': 'Australia/Melbourne', 'pool' : 'B'
            },
            {
                'city' : 'Melbourne', 'stadium' : 'MCG', 'match_date': '2015-02-26', 'match_day':'Thursday', 'match_type':'DN'
                , 'team_one_long': 'Sri Lanka', 'team_one_short': 'SRI', 'team_two_long': 'Bangladesh', 'team_two_short': 'BAN', 'start_time' : '02:30 pm', 'timezone': 'Australia/Melbourne', 'pool' : 'B'
            },
            {
                'city' : 'Melbourne', 'stadium' : 'MCG', 'match_date': '2015-03-19', 'match_day':'Thursday', 'match_type':'DN'
                , 'team_one_long': 'TBD', 'team_one_short': 'TBD', 'team_two_long': 'TBD', 'team_two_short': 'TBD', 'start_time' : '02:30 pm', 'timezone': 'Australia/Melbourne', 'pool' : 'F'
            },
            {
                'city' : 'Melbourne', 'stadium' : 'MCG', 'match_date': '2015-03-29', 'match_day':'Sunday', 'match_type':'DN'
                , 'team_one_long': 'TBD', 'team_one_short': 'TBD', 'team_two_long': 'TBD', 'team_two_short': 'TBD', 'start_time' : '06:00 am', 'timezone': 'Australia/Melbourne', 'pool' : 'F'
            },
            {
                'city' : 'Perth', 'stadium' : 'WACA', 'match_date': '2015-02-28', 'match_day':'Saturday', 'match_type':'DN'
                , 'team_one_long': 'India', 'team_one_short': 'IND', 'team_two_long': 'United Arab Emirates', 'team_two_short': 'UAE', 'start_time' : '02:30 pm', 'timezone': 'Australia/Perth', 'pool' : 'B'
            },
            {
                'city' : 'Perth', 'stadium' : 'WACA', 'match_date': '2015-03-04', 'match_day':'Wednesday', 'match_type':'DN'
                , 'team_one_long': 'Australia', 'team_one_short': 'AUS', 'team_two_long': 'Afghanistan', 'team_two_short': 'AFG', 'start_time' : '02:30 pm', 'timezone': 'Australia/Perth', 'pool' : 'A'
            },
            {
                'city' : 'Perth', 'stadium' : 'WACA', 'match_date': '2015-03-06', 'match_day':'Friday', 'match_type':'DN'
                , 'team_one_long': 'India', 'team_one_short': 'IND', 'team_two_long': 'West Indies', 'team_two_short': 'WI', 'start_time' : '02:30 pm', 'timezone': 'Australia/Perth', 'pool' : 'B'
            },
            {
                'city' : 'Sydney', 'stadium' : 'SCG', 'match_date': '2015-02-27', 'match_day':'Friday', 'match_type':'DN'
                , 'team_one_long': 'South Africa', 'team_one_short': 'SA', 'team_two_long': 'West Indies', 'team_two_short': 'WI', 'start_time' : '02:30 pm', 'timezone': 'Australia/Sydney', 'pool' : 'B'
            },
            {
                'city' : 'Sydney', 'stadium' : 'SCG', 'match_date': '2015-03-08', 'match_day':'Sunday', 'match_type':'DN'
                , 'team_one_long': 'Australia', 'team_one_short': 'AUS', 'team_two_long': 'Sri Lanka', 'team_two_short': 'SRI', 'start_time' : '02:30 pm', 'timezone': 'Australia/Sydney', 'pool' : 'A'
            },
            {
                'city' : 'Sydney', 'stadium' : 'SCG', 'match_date': '2015-03-13', 'match_day':'Friday', 'match_type':'DN'
                , 'team_one_long': 'England', 'team_one_short': 'ENG', 'team_two_long': 'Afghanistan', 'team_two_short': 'AFG', 'start_time' : '02:30 pm', 'timezone': 'Australia/Sydney', 'pool' : 'A'
            },
            {
                'city' : 'Sydney', 'stadium' : 'SCG', 'match_date': '2015-03-18', 'match_day':'Wednesday', 'match_type':'DN'
                , 'team_one_long': 'TBD', 'team_one_short': 'TBD', 'team_two_long': 'TBD', 'team_two_short': 'TBD', 'start_time' : '02:30 pm', 'timezone': 'Australia/Sydney', 'pool' : 'F'
            },
            {
                'city' : 'Sydney', 'stadium' : 'SCG', 'match_date': '2015-03-26', 'match_day':'Thursday', 'match_type':'DN'
                , 'team_one_long': 'TBD', 'team_one_short': 'TBD', 'team_two_long': 'TBD', 'team_two_short': 'TBD', 'start_time' : '02:30 pm', 'timezone': 'Australia/Sydney', 'pool' : 'F'
            },
            {
                'city' : 'Auckland', 'stadium' : 'Eden Park', 'match_date': '2015-02-28', 'match_day':'Saturday', 'match_type':'DN'
                , 'team_one_long': 'Australia', 'team_one_short': 'AUS', 'team_two_long': 'New Zealand', 'team_two_short': 'NZ', 'start_time' : '02:00 pm', 'timezone': 'Pacific/Auckland', 'pool' : 'A'
            },
            {
                'city' : 'Auckland', 'stadium' : 'Eden Park', 'match_date': '2015-03-07', 'match_day':'Saturday', 'match_type':'DN'
                , 'team_one_long': 'South Africa', 'team_one_short': 'SA', 'team_two_long': 'Pakistan', 'team_two_short': 'PAK', 'start_time' : '02:00 pm', 'timezone': 'Pacific/Auckland', 'pool' : 'B'
            },
            {
                'city' : 'Auckland', 'stadium' : 'Eden Park', 'match_date': '2015-03-14', 'match_day':'Saturday', 'match_type':'DN'
                , 'team_one_long': 'India', 'team_one_short': 'IND', 'team_two_long': 'Zimbabwe', 'team_two_short': 'ZIM', 'start_time' : '02:00 pm', 'timezone': 'Pacific/Auckland', 'pool' : 'B'
            },
            {
                'city' : 'Auckland', 'stadium' : 'Eden Park', 'match_date': '2015-03-24', 'match_day':'Tuesday', 'match_type':'DN'
                , 'team_one_long': 'TBD', 'team_one_short': 'TBD', 'team_two_long': 'TBD', 'team_two_short': 'TBD', 'start_time' : '02:00 pm', 'timezone': 'Pacific/Auckland', 'pool' : 'F'
            },
            {
                'city' : 'Christchurch', 'stadium' : 'Hagley Oval', 'match_date': '2015-02-14', 'match_day':'Saturday', 'match_type':'D'
                , 'team_one_long': 'Sri Lanka', 'team_one_short': 'SRI', 'team_two_long': 'New Zealand', 'team_two_short': 'NZ', 'start_time' : '11:00 am', 'timezone': 'Pacific/Auckland', 'pool' : 'A'
            },
            {
                'city' : 'Christchurch', 'stadium' : 'Hagley Oval', 'match_date': '2015-02-21', 'match_day':'Saturday', 'match_type':'D'
                , 'team_one_long': 'Pakistan', 'team_one_short': 'PAK', 'team_two_long': 'West Indies', 'team_two_short': 'WI', 'start_time' : '11:00 am', 'timezone': 'Pacific/Auckland', 'pool' : 'B'
            },
            {
                'city' : 'Christchurch', 'stadium' : 'Hagley Oval', 'match_date': '2015-02-23', 'match_day':'Monday', 'match_type':'D'
                , 'team_one_long': 'England', 'team_one_short': 'ENG', 'team_two_long': 'Scotland', 'team_two_short': 'SCO', 'start_time' : '11:00 am', 'timezone': 'Pacific/Auckland', 'pool' : 'A'
            },
            {
                'city' : 'Dunedin', 'stadium' : 'University Oval', 'match_date': '2015-02-17', 'match_day':'Tuesday', 'match_type':'D'
                , 'team_one_long': 'New Zealand', 'team_one_short': 'NZ', 'team_two_long': 'Scotland', 'team_two_short': 'SCO', 'start_time' : '11:00 am', 'timezone': 'Pacific/Auckland', 'pool' : 'A'
            },
            {
                'city' : 'Dunedin', 'stadium' : 'University Oval', 'match_date': '2015-02-22', 'match_day':'Sunday', 'match_type':'D'
                , 'team_one_long': 'Sri Lanka', 'team_one_short': 'SRI', 'team_two_long': 'Afghanistan', 'team_two_short': 'AFG', 'start_time' : '11:00 am', 'timezone': 'Pacific/Auckland', 'pool' : 'A'
            },
            {
                'city' : 'Dunedin', 'stadium' : 'University Oval', 'match_date': '2015-02-26', 'match_day':'Thursday', 'match_type':'D'
                , 'team_one_long': 'Afghanistan', 'team_one_short': 'AFG', 'team_two_long': 'Scotland', 'team_two_short': 'SCO', 'start_time' : '11:00 am', 'timezone': 'Pacific/Auckland', 'pool' : 'A'
            },
            {
                'city' : 'Hamilton', 'stadium' : 'Seddon Park', 'match_date': '2015-02-15', 'match_day':'Sunday', 'match_type':'DN'
                , 'team_one_long': 'South Africa', 'team_one_short': 'SA', 'team_two_long': 'Zimbabwe', 'team_two_short': 'ZIM', 'start_time' : '02:00 pm', 'timezone': 'Pacific/Auckland', 'pool' : 'B'
            },
            {
                'city' : 'Hamilton', 'stadium' : 'Seddon Park', 'match_date': '2015-03-10', 'match_day':'Tuesday', 'match_type':'DN'
                , 'team_one_long': 'India', 'team_one_short': 'IND', 'team_two_long': 'Ireland', 'team_two_short': 'IRE', 'start_time' : '02:00 pm', 'timezone': 'Pacific/Auckland', 'pool' : 'B'
            },
            {
                'city' : 'Hamilton', 'stadium' : 'Seddon Park', 'match_date': '2015-03-15', 'match_day':'Sunday', 'match_type':'DN'
                , 'team_one_long': 'Bangladesh', 'team_one_short': 'BAN', 'team_two_long': 'New Zealand', 'team_two_short': 'NZ', 'start_time' : '02:00 pm', 'timezone': 'Pacific/Auckland', 'pool' : 'A'
            },
            {
                'city' : 'Napier', 'stadium' : 'Mclean Park', 'match_date': '2015-03-04', 'match_day':'Wednesday', 'match_type':'DN'
                , 'team_one_long': 'Pakistan', 'team_one_short': 'PAK', 'team_two_long': 'United Arab Emirates', 'team_two_short': 'UAE', 'start_time' : '02:00 pm', 'timezone': 'Pacific/Auckland', 'pool' : 'B'
            },
            {
                'city' : 'Napier', 'stadium' : 'Mclean Park', 'match_date': '2015-03-08', 'match_day':'Sunday', 'match_type':'D'
                , 'team_one_long': 'New Zealand', 'team_one_short': 'NZ', 'team_two_long': 'Afghanistan', 'team_two_short': 'AFG', 'start_time' : '11:00 am', 'timezone': 'Pacific/Auckland', 'pool' : 'A'
            },
            {
                'city' : 'Napier', 'stadium' : 'Mclean Park', 'match_date': '2015-03-15', 'match_day':'Sunday', 'match_type':'D'
                , 'team_one_long': 'West Indies', 'team_one_short': 'WI', 'team_two_long': 'United Arab Emirates', 'team_two_short': 'UAE', 'start_time' : '11:00 am', 'timezone': 'Pacific/Auckland', 'pool' : 'B'
            },
            {
                'city' : 'Nelson', 'stadium' : 'Saxton Oval', 'match_date': '2015-02-16', 'match_day':'Monday', 'match_type':'D'
                , 'team_one_long': 'West Indies', 'team_one_short': 'WI', 'team_two_long': 'Ireland', 'team_two_short': 'IRE', 'start_time' : '11:00 am', 'timezone': 'Pacific/Auckland', 'pool' : 'B'
            },
            {
                'city' : 'Nelson', 'stadium' : 'Saxton Oval', 'match_date': '2015-02-19', 'match_day':'Thursday', 'match_type':'D'
                , 'team_one_long': 'Zimbabwe', 'team_one_short': 'ZIM', 'team_two_long': 'United Arab Emirates', 'team_two_short': 'UAE', 'start_time' : '11:00 am', 'timezone': 'Pacific/Auckland', 'pool' : 'B'
            },
            {
                'city' : 'Nelson', 'stadium' : 'Saxton Oval', 'match_date': '2015-03-05', 'match_day':'Thursday', 'match_type':'D'
                , 'team_one_long': 'Bangladesh', 'team_one_short': 'BAN', 'team_two_long': 'Scotland', 'team_two_short': 'SCO', 'start_time' : '11:00 am', 'timezone': 'Pacific/Auckland', 'pool' : 'A'
            },
            {
                'city' : 'Wellington', 'stadium' : 'Regional Stadium', 'match_date': '2015-02-20', 'match_day':'Friday', 'match_type':'DN'
                , 'team_one_long': 'England', 'team_one_short': 'ENG', 'team_two_long': 'New Zealand', 'team_two_short': 'NZ', 'start_time' : '02:00 pm', 'timezone': 'Pacific/Auckland', 'pool' : 'A'
            },
            {
                'city' : 'Wellington', 'stadium' : 'Regional Stadium', 'match_date': '2015-03-01', 'match_day':'Sunday', 'match_type':'D'
                , 'team_one_long': 'England', 'team_one_short': 'ENG', 'team_two_long': 'Sri Lanka', 'team_two_short': 'SRI', 'start_time' : '11:00 am', 'timezone': 'Pacific/Auckland', 'pool' : 'A'
            },
            {
                'city' : 'Wellington', 'stadium' : 'Regional Stadium', 'match_date': '2015-03-12', 'match_day':'Thursday', 'match_type':'DN'
                , 'team_one_long': 'South Africa', 'team_one_short': 'SA', 'team_two_long': 'United Arab Emirates', 'team_two_short': 'UAE', 'start_time' : '02:00 pm', 'timezone': 'Pacific/Auckland', 'pool' : 'B'
            },
            {
                'city' : 'Wellington', 'stadium' : 'Regional Stadium', 'match_date': '2015-03-12', 'match_day':'Thursday', 'match_type':'DN'
                , 'team_one_long': 'TBD', 'team_one_short': 'TBD', 'team_two_long': 'TBD', 'team_two_short': 'TBD', 'start_time' : '02:00 pm', 'timezone': 'Pacific/Auckland', 'pool' : 'F'
            },

        ];

        this.getAllVenues = function() {
            return _.unique(_.map(matches, function(match){
                return {'city': match.city, 'stadium': match.stadium, selected: false};
            }), false, function(v){
                return v.city;
            });
        };

        this.getAllMatchDates = function() {
            return _.unique(_.sortBy(_.map(matches, function(match){
                return {'date': match.match_date, selected: false};
            }), 'date'), false, function(v){
                return v.date;
            });
        }

        this.getMatchesForDate = function(date) {
            return _.where(matches, {match_date : date});
        }

        this.getMatchesForTeam = function(team) {
            return _.filter(matches, function(match) {
                return match.team_one_long === team.name || match.team_two_long === team.name;
            });
        }

        this.getMatchesForVenue = function(venue) {
            return _.where(matches, {city : venue.city});
        }

    }]);