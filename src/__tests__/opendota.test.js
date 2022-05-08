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
  test('getRecentMatches returns an array', async () => {
    const data = await opendota.getRecentMatches('22984464')
    expect(Array.isArray(data)).toBe(true)
  })
  test("getPlayerWinLoss returns an object containing the player's number of wins and losses", async () => {
    const data = await opendota.getPlayerWinLoss('22984464')
    expect(Object.keys(data)).toEqual(['win', 'lose'])
  })
})
