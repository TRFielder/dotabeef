import * as opendota from '../helpers/opendota'

describe('Testing opendota API functions', () => {
  test('Searching for a player by name returns an array', async () => {
    const data = await opendota.getPlayersByName('TestName')
    expect(Array.isArray(data)).toBe(true)
  })

  test('getPlayerData returns an object containing name, ', async () => {
    const data = await opendota.getPlayerData('22984464')
    expect(Object.keys(data)).toEqual([
      'name',
      'avatar',
      'avatarmedium',
      'avatarfull',
    ])
  })
  test('getRecentMatches returns an array, and every object in that array has the following keys: match id, player slot, radiant win, duration, game mode, lobby type, hero id, start time, version, kills, deaths, assists, skill, xp per min, gold per min, hero damage, tower damage, hero healing, last hits, lane, lane role, is roaming, cluster, leaver status and party size', async () => {
    const data = await opendota.getRecentMatches('22984464')
    expect(Array.isArray(data)).toBe(true)
    for (let i = 0; i < data.length; i += 1) {
      expect(Object.keys(data[i])).toEqual([
        'match_id',
        'player_slot',
        'radiant_win',
        'duration',
        'game_mode',
        'lobby_type',
        'hero_id',
        'start_time',
        'version',
        'kills',
        'deaths',
        'assists',
        'skill',
        'xp_per_min',
        'gold_per_min',
        'hero_damage',
        'tower_damage',
        'hero_healing',
        'last_hits',
        'lane',
        'lane_role',
        'is_roaming',
        'cluster',
        'leaver_status',
        'party_size',
      ])
    }
  })
  test("getPlayerWinLoss returns an object containing the player's number of wins and losses", async () => {
    const data = await opendota.getPlayerWinLoss('22984464')
    expect(Object.keys(data)).toEqual(['win', 'lose'])
  })

  test('getItems returns an array of objects, and searching for item ID 141 returns the item daedalus', async () => {
    const itemIds = await opendota.getItemIDs()
    const items = await opendota.getItems()
    expect(items[itemIds[141]].dname).toEqual('Daedalus')
  })
})
