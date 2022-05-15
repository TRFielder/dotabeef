import * as utilities from '../helpers/utilities'

describe('Testing utilities', () => {
  test('Submitting player slots returns their team correctly', () => {
    expect(utilities.checkPlayerTeam(0)).toEqual('Radiant')
    expect(utilities.checkPlayerTeam(1)).toEqual('Radiant')
    expect(utilities.checkPlayerTeam(2)).toEqual('Radiant')
    expect(utilities.checkPlayerTeam(3)).toEqual('Radiant')
    expect(utilities.checkPlayerTeam(4)).toEqual('Radiant')

    expect(utilities.checkPlayerTeam(128)).toEqual('Dire')
    expect(utilities.checkPlayerTeam(129)).toEqual('Dire')
    expect(utilities.checkPlayerTeam(130)).toEqual('Dire')
    expect(utilities.checkPlayerTeam(131)).toEqual('Dire')
    expect(utilities.checkPlayerTeam(132)).toEqual('Dire')
  })

  test('getDuration correctly outputs match duration in minutes:seconds', () => {
    expect(utilities.getDuration(1)).toEqual('00:01')
    expect(utilities.getDuration(2050)).toEqual('34:10')
    expect(utilities.getDuration(2238)).toEqual('37:18')
    expect(utilities.getDuration(1680)).toEqual('28:00')
  })

  test('checkPlayerWin correctly returns match result', () => {
    expect(utilities.checkPlayerWin('Radiant', true)).toBe(true)
    expect(utilities.checkPlayerWin('Radiant', false)).toBe(false)
    expect(utilities.checkPlayerWin('Dire', true)).toBe(false)
    expect(utilities.checkPlayerWin('Dire', false)).toBe(true)
    expect(utilities.checkPlayerWin('Unknown', true)).toEqual('Unknown result')
  })
})
