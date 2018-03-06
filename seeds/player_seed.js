
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('saved_players').del()
    // .then()
    //  fetch request here
    //  populate object with fetch data
    //return the object to use (as a variable)
    //reference the variable in 'insert' as player_stats: json.stringify(variable)
    .then(function () {
      // Inserts seed entries
      return knex('saved_players').insert([
        {
          id: 1,
          player_name: 'kn33s#1861'
    //       player_stats: {
    //       "heroes": {
    //         "stats": {
    //           "competitive": {
    //             "torbjorn": {
    //               "general_stats": {
    //                 "objective_time": 0.005277777777777778,
    //                 "games_won": 0,
    //                 "critical_hits_most_in_life": 11,
    //                 "critical_hits_most_in_game": 13,
    //                 "games_lost": 1,
    //                 "weapon_accuracy_best_in_game": 0.31,
    //                 "medals_bronze": 1,
    //                 "all_damage_done": 13267,
    //                 "all_damage_done_most_in_game": 6098,
    //                 "eliminations": 16,
    //                 "solo_kill": 1,
    //                 "eliminations_most_in_game": 6,
    //                 "objective_kills_most_in_game": 5,
    //                 "games_played": 1,
    //                 "final_blows_most_in_game": 4,
    //                 "deaths": 5,
    //                 "all_damage_done_most_in_life": 4108,
    //                 "solo_kill_most_in_game": 1,
    //                 "medals_silver": 0,
    //                 "time_spent_on_fire_most_in_game": 38,
    //                 "weapon_accuracy": 0.35,
    //                 "time_played": 0.11666666666666667,
    //                 "barrier_damage_done": 5746,
    //                 "hero_damage_done_most_in_life": 2076,
    //                 "critical_hit_accuracy": 0.1,
    //                 "objective_kills": 11,
    //                 "eliminations_most_in_life": 6,
    //                 "time_spent_on_fire": 0.010555555555555556,
    //                 "barrier_damage_done_most_in_game": 2603,
    //                 "hero_damage_done": 7489,
    //                 "final_blows": 8,
    //                 "medals_gold": 1,
    //                 "eliminations_per_life": 3.2,
    //                 "hero_damage_done_most_in_game": 3490,
    //                 "critical_hits": 17,
    //                 "objective_time_most_in_game": 0.0036111111111111114,
    //                 "win_percentage": 0.17,
    //                 "kill_streak_best": 6,
    //                 "medals": 2
    //               }
    //             },
    //             "widowmaker": {
    //               "general_stats": {
    //                 "objective_time": 0.014722222222222222,
    //                 "card": 1,
    //                 "games_won": 3,
    //                 "critical_hits_most_in_life": 14,
    //                 "critical_hits_most_in_game": 16,
    //                 "games_lost": 2,
    //                 "weapon_accuracy_best_in_game": 0.53,
    //                 "turrets_destroyed": 2,
    //                 "medals_bronze": 3,
    //                 "all_damage_done": 67914,
    //                 "recon_assists_most_in_game": 16,
    //                 "time_spent_on_fire": 0.04722222222222223,
    //                 "barrier_damage_done_most_in_game": 3838,
    //                 "eliminations": 129,
    //                 "hero_damage_done_most_in_life": 3494,
    //                 "eliminations_most_in_game": 24,
    //                 "objective_kills_most_in_game": 8,
    //                 "medals": 9,
    //                 "final_blows": 82,
    //                 "deaths": 45,
    //                 "all_damage_done_most_in_life": 5691,
    //                 "all_damage_done_most_in_game": 12417,
    //                 "medals_silver": 3,
    //                 "time_spent_on_fire_most_in_game": 40,
    //                 "weapon_accuracy": 0.41,
    //                 "time_played": 1,
    //                 "barrier_damage_done": 16040,
    //                 "games_played": 5,
    //                 "critical_hit_accuracy": 0.14,
    //                 "objective_kills": 32,
    //                 "eliminations_most_in_life": 11,
    //                 "recon_assists": 72,
    //                 "hero_damage_done_most_in_game": 10002,
    //                 "final_blows_most_in_game": 16,
    //                 "hero_damage_done": 50165,
    //                 "medals_gold": 3,
    //                 "eliminations_per_life": 2.86,
    //                 "solo_kills": 32,
    //                 "critical_hits": 98,
    //                 "objective_time_most_in_game": 0.005833333333333333,
    //                 "win_percentage": 0.58,
    //                 "kill_streak_best": 11,
    //                 "solo_kills_most_in_game": 7
    //               }
    //             },
    //             "ana": {
    //               "general_stats": {
    //                 "objective_time": 0.008055555555555555,
    //                 "healing_done": 6773,
    //                 "games_won": 0,
    //                 "offensive_assists_most_in_game": 7,
    //                 "time_played": 0.13333333333333333,
    //                 "healing_done_most_in_game": 4662,
    //                 "games_lost": 0,
    //                 "weapon_accuracy_best_in_game": 0.14,
    //                 "all_damage_done": 3270,
    //                 "all_damage_done_most_in_game": 2637,
    //                 "eliminations": 10,
    //                 "hero_damage_done_most_in_life": 667,
    //                 "offensive_assists": 7,
    //                 "objective_kills_most_in_game": 4,
    //                 "games_played": 1,
    //                 "deaths": 5,
    //                 "all_damage_done_most_in_life": 876,
    //                 "hero_damage_done_most_in_game": 1631,
    //                 "medals_silver": 1,
    //                 "time_spent_on_fire_most_in_game": 106,
    //                 "weapon_accuracy": 0.18,
    //                 "barrier_damage_done": 1117,
    //                 "defensive_assists": 17,
    //                 "final_blows": 2,
    //                 "objective_kills": 4,
    //                 "eliminations_most_in_life": 4,
    //                 "eliminations_most_in_game": 9,
    //                 "time_spent_on_fire": 0.029166666666666667,
    //                 "barrier_damage_done_most_in_game": 1007,
    //                 "final_blows_most_in_game": 2,
    //                 "hero_damage_done": 2152,
    //                 "eliminations_per_life": 2,
    //                 "medals_gold": 0,
    //                 "defensive_assists_most_in_game": 17,
    //                 "objective_time_most_in_game": 0.005277777777777778,
    //                 "win_percentage": 0.72,
    //                 "kill_streak_best": 4,
    //                 "medals": 1
    //               }
    //             },
    //             "reaper": {
    //               "general_stats": {
    //                 "objective_time": 0.03666666666666667,
    //                 "card": 1,
    //                 "games_won": 1,
    //                 "critical_hits_most_in_life": 38,
    //                 "critical_hits_most_in_game": 96,
    //                 "games_lost": 1,
    //                 "weapon_accuracy_best_in_game": 0.24,
    //                 "medals_bronze": 1,
    //                 "all_damage_done": 38144,
    //                 "all_damage_done_most_in_game": 16943,
    //                 "eliminations": 66,
    //                 "hero_damage_done_most_in_life": 3733,
    //                 "eliminations_most_in_game": 25,
    //                 "objective_kills_most_in_game": 14,
    //                 "medals": 6,
    //                 "final_blows": 32,
    //                 "deaths": 14,
    //                 "all_damage_done_most_in_life": 6610,
    //                 "solo_kills": 3,
    //                 "medals_silver": 2,
    //                 "multikill": 1,
    //                 "time_spent_on_fire_most_in_game": 213,
    //                 "weapon_accuracy": 0.26,
    //                 "time_played": 0.3333333333333333,
    //                 "barrier_damage_done": 13275,
    //                 "games_played": 2,
    //                 "critical_hit_accuracy": 0.07,
    //                 "objective_kills": 27,
    //                 "eliminations_most_in_life": 13,
    //                 "time_spent_on_fire": 0.10694444444444445,
    //                 "barrier_damage_done_most_in_game": 5775,
    //                 "final_blows_most_in_game": 14,
    //                 "hero_damage_done": 24707,
    //                 "medals_gold": 3,
    //                 "eliminations_per_life": 4.71,
    //                 "hero_damage_done_most_in_game": 11051,
    //                 "critical_hits": 253,
    //                 "objective_time_most_in_game": 0.019444444444444445,
    //                 "win_percentage": 0.42,
    //                 "kill_streak_best": 13,
    //                 "multikill_best": 3,
    //                 "solo_kills_most_in_game": 3
    //               }
    //             },
    //             "sombra": {
    //               "general_stats": {
    //                 "objective_time": 0.0008333333333333334,
    //                 "medals_bronze": 0,
    //                 "weapon_accuracy": 0.18,
    //                 "hero_damage_done": 422,
    //                 "weapon_accuracy_best_in_game": 0.18,
    //                 "medals": 1,
    //                 "all_damage_done": 422,
    //                 "all_damage_done_most_in_game": 422,
    //                 "games_lost": 0,
    //                 "medals_gold": 0,
    //                 "objective_time_most_in_game": 0.0008333333333333334,
    //                 "hero_damage_done_most_in_life": 398,
    //                 "games_played": 0,
    //                 "deaths": 3,
    //                 "time_played": 0.016666666666666666,
    //                 "all_damage_done_most_in_life": 398,
    //                 "hero_damage_done_most_in_game": 422
    //               }
    //             },
    //             "tracer": {
    //               "general_stats": {
    //                 "objective_time": 0.0008333333333333334,
    //                 "games_won": 0,
    //                 "final_blow_most_in_game": 1,
    //                 "critical_hits_most_in_life": 8,
    //                 "medals_silver": 0,
    //                 "games_lost": 0,
    //                 "weapon_accuracy_best_in_game": 0.25,
    //                 "all_damage_done": 1008,
    //                 "eliminations_most_in_game": 2,
    //                 "eliminations": 2,
    //                 "hero_damage_done_most_in_life": 488,
    //                 "games_played": 0,
    //                 "deaths": 3,
    //                 "all_damage_done_most_in_life": 548,
    //                 "hero_damage_done_most_in_game": 888,
    //                 "barrier_damage_done": 120,
    //                 "weapon_accuracy": 0.26,
    //                 "time_played": 0.03333333333333333,
    //                 "final_blow": 1,
    //                 "critical_hit_accuracy": 0.08,
    //                 "hero_damage_done": 888,
    //                 "eliminations_most_in_life": 2,
    //                 "all_damage_done_most_in_game": 1008,
    //                 "barrier_damage_done_most_in_game": 120,
    //                 "critical_hits_most_in_game": 13,
    //                 "eliminations_per_life": 0.66,
    //                 "medals_gold": 0,
    //                 "critical_hits": 13,
    //                 "objective_time_most_in_game": 0.0008333333333333334,
    //                 "win_percentage": 1,
    //                 "kill_streak_best": 2,
    //                 "medals": 0
    //             }
    //             },
    //             "soldier76": {
    //               "general_stats": {
    //                 "healing_done": 15354,
    //                 "healing_done_most_in_game": 2187,
    //                 "eliminations_most_in_game": 33,
    //                 "turrets_destroyed": 4,
    //                 "all_damage_done": 108240,
    //                 "all_damage_done_most_in_game": 16956,
    //                 "critical_hits_most_in_life": 32,
    //                 "objective_kills_most_in_game": 21,
    //                 "quick_melee_accuracy": 0,
    //                 "games_played": 7,
    //                 "deaths": 47,
    //                 "all_damage_done_most_in_life": 8342,
    //                 "hero_damage_done_most_in_game": 13332,
    //                 "medals_bronze": 5,
    //                 "weapon_accuracy": 0.3,
    //                 "cards": 6,
    //                 "defensive_assists": 23,
    //                 "critical_hit_accuracy": 0.06,
    //                 "hero_damage_done": 79126,
    //                 "barrier_damage_done_most_in_game": 5028,
    //                 "final_blows_most_in_game": 16,
    //                 "eliminations_per_life": 4.23,
    //                 "medals_gold": 16,
    //                 "defensive_assists_most_in_game": 5,
    //                 "win_percentage": 0.54,
    //                 "time_played": 1,
    //                 "multikill_best": 4,
    //                 "solo_kills_most_in_game": 4,
    //                 "objective_time": 0.0725,
    //                 "games_won": 4,
    //                 "multikills": 2,
    //                 "games_lost": 3,
    //                 "weapon_accuracy_best_in_game": 0.32,
    //                 "time_spent_on_fire": 0.21444444444444447,
    //                 "eliminations": 199,
    //                 "hero_damage_done_most_in_life": 5423,
    //                 "solo_kills": 24,
    //                 "time_spent_on_fire_most_in_game": 202,
    //                 "barrier_damage_done": 25852,
    //                 "kill_streak_best": 18,
    //                 "objective_kills": 82,
    //                 "eliminations_most_in_life": 18,
    //                 "medals_silver": 2,
    //                 "melee_final_blow": 1,
    //                 "critical_hits_most_in_game": 44,
    //                 "final_blows": 101,
    //                 "medals": 24,
    //                 "critical_hits": 214,
    //                 "objective_time_most_in_game": 0.025555555555555554,
    //                 "melee_final_blow_most_in_game": 1
    //               }
    //             },
    //             "dva": {
    //               "general_stats": {
    //                 "objective_time": 0.10416666666666667,
    //                 "games_won": 2,
    //                 "critical_hits_most_in_life": 136,
    //                 "critical_hits_most_in_game": 230,
    //                 "games_lost": 2,
    //                 "weapon_accuracy_best_in_game": 0.21,
    //                 "turrets_destroyed": 4,
    //                 "medals_bronze": 3,
    //                 "all_damage_done": 56162,
    //                 "all_damage_done_most_in_game": 12251,
    //                 "eliminations": 101,
    //                 "hero_damage_done_most_in_life": 6186,
    //                 "eliminations_most_in_game": 30,
    //                 "objective_kills_most_in_game": 20,
    //                 "medals": 10,
    //                 "final_blows": 39,
    //                 "deaths": 21,
    //                 "all_damage_done_most_in_life": 6994,
    //                 "solo_kills": 7,
    //                 "medals_silver": 2,
    //                 "multikill": 1,
    //                 "time_spent_on_fire_most_in_game": 125,
    //                 "weapon_accuracy": 0.2,
    //                 "time_played": 0.7666666666666667,
    //                 "barrier_damage_done": 16365,
    //                 "games_played": 4,
    //                 "critical_hit_accuracy": 0.06,
    //                 "objective_kills": 51,
    //                 "eliminations_most_in_life": 16,
    //                 "time_spent_on_fire": 0.10583333333333332,
    //                 "barrier_damage_done_most_in_game": 4822,
    //                 "final_blows_most_in_game": 10,
    //                 "hero_damage_done": 38760,
    //                 "medals_gold": 5,
    //                 "eliminations_per_life": 4.8,
    //                 "hero_damage_done_most_in_game": 8910,
    //                 "critical_hits": 1105,
    //                 "objective_time_most_in_game": 0.030833333333333334,
    //                 "win_percentage": 0.47,
    //                 "kill_streak_best": 16,
    //                 "multikill_best": 4,
    //                 "solo_kills_most_in_game": 2,
    //                 "cards": 2
    //               }
    //             },
    //             "hanzo": {
    //               "general_stats": {
    //                 "eliminations_most_in_game": 41,
    //                 "turrets_destroyed": 9,
    //                 "games_won": 5,
    //                 "recon_assists": 95,
    //                 "all_damage_done": 161302,
    //                 "all_damage_done_most_in_game": 17599,
    //                 "critical_hits_most_in_life": 5,
    //                 "objective_kills_most_in_game": 22,
    //                 "quick_melee_accuracy": 0,
    //                 "games_played": 10,
    //                 "deaths": 89,
    //                 "all_damage_done_most_in_life": 8038,
    //                 "medals_gold": 8,
    //                 "medals_bronze": 7,
    //                 "weapon_accuracy": 0.21,
    //                 "critical_hit_accuracy": 0.08,
    //                 "hero_damage_done": 111035,
    //                 "barrier_damage_done_most_in_game": 7647,
    //                 "final_blows_most_in_game": 28,
    //                 "eliminations_per_life": 2.88,
    //                 "hero_damage_done_most_in_game": 12723,
    //                 "win_percentage": 0.45,
    //                 "time_played": 2,
    //                 "multikill_best": 3,
    //                 "solo_kills_most_in_game": 7,
    //                 "objective_time": 0.1716666666666667,
    //                 "card": 1,
    //                 "games_lost": 5,
    //                 "weapon_accuracy_best_in_game": 0.36,
    //                 "medals_silver": 10,
    //                 "time_spent_on_fire": 0.2722222222222222,
    //                 "eliminations": 257,
    //                 "hero_damage_done_most_in_life": 5025,
    //                 "solo_kills": 42,
    //                 "time_spent_on_fire_most_in_game": 324,
    //                 "barrier_damage_done": 47560,
    //                 "kill_streak_best": 13,
    //                 "objective_kills": 125,
    //                 "eliminations_most_in_life": 13,
    //                 "recon_assists_most_in_game": 19,
    //                 "critical_hits_most_in_game": 18,
    //                 "final_blows": 179,
    //                 "critical_hits": 96,
    //                 "objective_time_most_in_game": 0.042222222222222223,
    //                 "multikill": 1,
    //                 "medals": 24
    //               }
    //             },
    //             "mccree": {
    //               "general_stats": {
    //                 "objective_time": 0.0030555555555555553,
    //                 "games_won": 0,
    //                 "critical_hits_most_in_life": 2,
    //                 "critical_hits_most_in_game": 4,
    //                 "games_lost": 0,
    //                 "weapon_accuracy_best_in_game": 0.42,
    //                 "medals_bronze": 0,
    //                 "all_damage_done": 4694,
    //                 "all_damage_done_most_in_game": 3965,
    //                 "eliminations": 8,
    //                 "hero_damage_done_most_in_life": 2458,
    //                 "eliminations_most_in_game": 7,
    //                 "objective_kills_most_in_game": 2,
    //                 "games_played": 0,
    //                 "final_blows": 4,
    //                 "deaths": 5,
    //                 "all_damage_done_most_in_life": 2458,
    //                 "hero_damage_done_most_in_game": 3965,
    //                 "medals_silver": 0,
    //                 "multikill": 1,
    //                 "time_spent_on_fire_most_in_game": 24,
    //                 "weapon_accuracy": 0.38,
    //                 "time_played": 0.06666666666666667,
    //                 "critical_hit_accuracy": 0.06,
    //                 "objective_kills": 3,
    //                 "eliminations_most_in_life": 6,
    //                 "time_spent_on_fire": 0.006666666666666667,
    //                 "final_blows_most_in_game": 3,
    //                 "hero_damage_done": 4685,
    //                 "eliminations_per_life": 1.6,
    //                 "medals_gold": 1,
    //                 "critical_hits": 4,
    //                 "objective_time_most_in_game": 0.0019444444444444444,
    //                 "win_percentage": 0.7,
    //                 "kill_streak_best": 6,
    //                 "multikill_best": 3,
    //                 "medals": 2
    //               }
    //             },
    //             "zarya": {
    //               "general_stats": {
    //                 "objective_time": 0.0077777777777777776,
    //                 "offensive_assists_most_in_game": 3,
    //                 "final_blow_most_in_game": 1,
    //                 "medals_silver": 1,
    //                 "games_lost": 0,
    //                 "weapon_accuracy_best_in_game": 0.26,
    //                 "kill_streak_best": 4,
    //                 "eliminations_most_in_game": 6,
    //                 "eliminations": 6,
    //                 "hero_damage_done_most_in_life": 893,
    //                 "offensive_assists": 3,
    //                 "objective_kills_most_in_game": 4,
    //                 "games_played": 0,
    //                 "deaths": 3,
    //                 "all_damage_done_most_in_life": 1214,
    //                 "hero_damage_done_most_in_game": 1781,
    //                 "barrier_damage_done": 575,
    //                 "weapon_accuracy": 0.3,
    //                 "final_blow": 1,
    //                 "defensive_assists": 4,
    //                 "all_damage_done": 2356,
    //                 "objective_kills": 4,
    //                 "eliminations_most_in_life": 4,
    //                 "all_damage_done_most_in_game": 2356,
    //                 "barrier_damage_done_most_in_game": 575,
    //                 "hero_damage_done": 1781,
    //                 "eliminations_per_life": 2,
    //                 "medals_gold": 0,
    //                 "defensive_assists_most_in_game": 4,
    //                 "objective_time_most_in_game": 0.0077777777777777776,
    //                 "time_played": 0.05,
    //                 "medals": 1
    //               }
    //             },
    //             "doomfist": {
    //               "general_stats": {
    //                 "objective_time": 0.0013888888888888887,
    //                 "medals_bronze": 0,
    //                 "weapon_accuracy": 0.05,
    //                 "barrier_damage_done": 180,
    //                 "hero_damage_done": 357,
    //                 "weapon_accuracy_best_in_game": 0.05,
    //                 "medals": 0,
    //                 "barrier_damage_done_most_in_game": 180,
    //                 "all_damage_done": 537,
    //                 "all_damage_done_most_in_game": 537,
    //                 "games_lost": 0,
    //                 "medals_gold": 0,
    //                 "objective_time_most_in_game": 0.0013888888888888887,
    //                 "hero_damage_done_most_in_life": 288,
    //                 "games_played": 0,
    //                 "deaths": 2,
    //                 "time_played": 0.016666666666666666,
    //                 "all_damage_done_most_in_life": 456,
    //                 "hero_damage_done_most_in_game": 357
    //               }
    //             },
    //             "moira": {
    //               "general_stats": {
    //                 "objective_time": 0.049444444444444444,
    //                 "healing_done": 18650,
    //                 "card": 1,
    //                 "games_won": 2,
    //                 "time_played": 0.36666666666666664,
    //                 "multikills": 2,
    //                 "healing_done_most_in_game": 10107,
    //                 "games_lost": 1,
    //                 "medals_bronze": 1,
    //                 "all_damage_done": 13540,
    //                 "eliminations_most_in_game": 29,
    //                 "time_spent_on_fire": 0.04416666666666667,
    //                 "barrier_damage_done_most_in_game": 752,
    //                 "eliminations": 52,
    //                 "hero_damage_done_most_in_life": 1921,
    //                 "quick_melee_accuracy": 1,
    //                 "objective_kills_most_in_game": 17,
    //                 "medals": 8,
    //                 "deaths": 15,
    //                 "all_damage_done_most_in_life": 2279,
    //                 "hero_damage_done_most_in_game": 6906,
    //                 "medals_silver": 2,
    //                 "time_spent_on_fire_most_in_game": 159,
    //                 "barrier_damage_done": 1498,
    //                 "defensive_assists": 31,
    //                 "final_blows": 13,
    //                 "objective_kills": 28,
    //                 "eliminations_most_in_life": 10,
    //                 "all_damage_done_most_in_game": 7713,
    //                 "melee_final_blow": 1,
    //                 "final_blows_most_in_game": 8,
    //                 "hero_damage_done": 11981,
    //                 "eliminations_per_life": 3.46,
    //                 "medals_gold": 5,
    //                 "defensive_assists_most_in_game": 21,
    //                 "objective_time_most_in_game": 0.035833333333333335,
    //                 "games_played": 3,
    //                 "win_percentage": 0.77,
    //                 "kill_streak_best": 10,
    //                 "multikill_best": 3,
    //                 "melee_final_blow_most_in_game": 1
    //             }
    //           }
    //       },
    //       "playtime": {
    //         "competitive": {
    //           "widowmaker": 0.7586379218674113,
    //           "dva": 0.4887745558332438,
    //           "reaper": 0.21636520499286888,
    //           "sombra": 0.0180451387423312,
    //           "winston": 0,
    //           "soldier76": 0.8157161251275842,
    //           "mercy": 0,
    //           "genji": 0,
    //           "junkrat": 0,
    //           "bastion": 0,
    //           "symmetra": 0,
    //           "reinhardt": 0,
    //           "orisa": 0,
    //           "torbjorn": 0.08046524135920564,
    //           "tracer": 0.021658285305019516,
    //           "ana": 0.09182233268055039,
    //           "pharah": 0,
    //           "hanzo": 1.379472458516384,
    //           "lucio": 0,
    //           "mei": 0,
    //           "zenyatta": 0,
    //           "mccree": 0.05190705994412402,
    //           "roadhog": 0,
    //           "zarya": 0.03860892294630219,
    //           "doomfist": 0.016666666666666663,
    //           "moira": 0.24204803902551292
    //         }
    //       }
    //     }
    //   }
    // }
  }
])
})
    .then(() => {
      return knex.raw('ALTER SEQUENCE saved_players_id_seq RESTART WITH 2;')
    })
};
