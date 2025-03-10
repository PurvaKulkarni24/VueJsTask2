new Vue({
    el: '#app',
    data: {
        players: [
            {
                "name": "Virat Kohli",
                "matches": "101",
                "role": 2,
                "runs": "10234",
                "50s": "23",
                "100s": "46",
                "highest_score": "183",
                "best_bowling_figures": 0,
                "team_id": 4,
                "team_name": "IND",
                "image": "https://resources.pulse.icc-cricket.com/players/130x150/164.png"
            },
            {
                "name": "Hardik Pandya",
                "matches": "100",
                "role": 3,
                "runs": "10234",
                "50s": "23",
                "100s": "46",
                "highest_score": "183",
                "best_bowling_figures": "1-23",
                "team_id": 4,
                "team_name": "IND",
                "image": "https://resources.pulse.icc-cricket.com/players/130x150/2740.png"
            },
            {
                "name": "Jasprit Bumrah",
                "matches": "100",
                "role": 4,
                "runs": "10234",
                "50s": "23",
                "100s": "46",
                "highest_score": "183",
                "best_bowling_figures": "5-23",
                "team_id": 4,
                "team_name": "IND",
                "image": "https://resources.pulse.icc-cricket.com/players/130x150/1124.png"
            },
            {
                "name": "David Warner",
                "matches": "100",
                "role": 2,
                "runs": "10234",
                "50s": "23",
                "100s": "46",
                "highest_score": "183",
                "best_bowling_figures": 0,
                "team_id": 1,
                "team_name": "AUS",
                "image": "https://resources.pulse.icc-cricket.com/players/210/170.png"
            },
            {
                "name": "Glen Maxwell",
                "matches": "100",
                "role": 3,
                "runs": "10234",
                "50s": "23",
                "100s": "46",
                "highest_score": "183",
                "best_bowling_figures": "1-23",
                "team_id": 1,
                "team_name": "AUS",
                "image": "https://resources.pulse.icc-cricket.com/players/130x150/282.png"
            },
            {
                "name": "Pat Cummings",
                "matches": "100",
                "role": 4,
                "runs": "10234",
                "50s": "23",
                "100s": "46",
                "highest_score": "183",
                "best_bowling_figures": "5-23",
                "team_id": 1,
                "team_name": "AUS",
                "image": "https://resources.pulse.icc-cricket.com/players/130x150/488.png"
            },
            {
                "name": "Babar Azam",
                "matches": "100",
                "role": 2,
                "runs": "10234",
                "50s": "23",
                "100s": "46",
                "highest_score": "183",
                "best_bowling_figures": 0,
                "team_id": 6,
                "team_name": "PAK",
                "image": "https://resources.pulse.icc-cricket.com/players/130x150/2759.png"
            },
            {
                "name": "Shaheen Afridi",
                "matches": "100",
                "role": 3,
                "runs": "10234",
                "50s": "23",
                "100s": "46",
                "highest_score": "183",
                "best_bowling_figures": "1-23",
                "team_id": 6,
                "team_name": "PAK",
                "image": "https://resources.pulse.icc-cricket.com/players/130x150/4530.png"
            },
            {
                "name": "Haris Rauf",
                "matches": "100",
                "role": 4,
                "runs": "10234",
                "50s": "23",
                "100s": "46",
                "highest_score": "183",
                "best_bowling_figures": "5-23",
                "team_id": 6,
                "team_name": "PAK",
                "image": ""
            },
            {
                "name": "Jhonny Bairstow",
                "matches": "100",
                "role": 2,
                "runs": "10234",
                "50s": "23",
                "100s": "46",
                "highest_score": "183",
                "best_bowling_figures": 0,
                "team_id": 5,
                "team_name": "ENG",
                "image": "https://resources.pulse.icc-cricket.com/players/130x150/506.png"
            },
            {
                "name": "Ben Stokes",
                "matches": "100",
                "role": 3,
                "runs": "10234",
                "50s": "23",
                "100s": "46",
                "highest_score": "183",
                "best_bowling_figures": "1-23",
                "team_id": 5,
                "team_name": "ENG",
                "image": "https://resources.pulse.icc-cricket.com/players/130x150/1154.png"
            },
            {
                "name": "James Anderson",
                "matches": "100",
                "role": 4,
                "runs": "10234",
                "50s": "23",
                "100s": "46",
                "highest_score": "183",
                "best_bowling_figures": "5-23",
                "team_id": 5,
                "team_name": "ENG",
                "image": "https://resources.pulse.icc-cricket.com/players/130x150/900.png"
            }
        ],
        teamFilter: 'ALL'
    },
    methods: {
        filteredPlayers(role) {
            const roleMap = {
                2: 'batsman',
                3: 'all-rounder',
                4: 'bowler'
            };
            return this.players.filter(player => 
                (this.teamFilter === 'ALL' || player.team_name === this.teamFilter) &&
                roleMap[player.role] === role
            );
        }
    }
});
