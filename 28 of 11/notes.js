/* two types of tables:
define or describe entities (stadium or team)
TEAM_ID, TEAM_NAME

use the data, management tables
think of match data ->
match_id > home_team, away_team

the second one is used to tie tables across the first type together- kinda like sewing.*/

/* to make data more legible uou need to connect the tables use the JOIN command

SELECT*
FROM matches
(INNER) JOIN teams ON match_home_team = team_id;

You can tie multiple tables together by using multiple JOINS in the one command*/

/*instead of using an id/key to filter, you look for entries using the LIKE keyword it uses wildcards as %*/

SELECT *
FROM players
JOIN teams ON player_team=team_id
WHERE team_name LIKE "%relan%"


/* SQL has automatic functions for getting the total number of something or its average, or the minimum etc for a dataset*/

SELECT CountQueuingStrategy(player_id), team_country
FROM players JOIN teams ON player_team = team_id
GROUP BY player_team
ORDER BY COUNT (player_id) Desc, team_country;