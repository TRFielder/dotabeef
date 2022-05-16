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

  test('dateToReadableFormat correctly converts valid dates', () => {
    expect(utilities.dateToReadableFormat('2018-08-27T17:35:12.000Z')).toEqual(
      '27/8/2018',
    )
    expect(utilities.dateToReadableFormat('27 November 2019')).toEqual(
      '27/11/2019',
    )
    expect(utilities.dateToReadableFormat(undefined)).toEqual('not found')
    expect(utilities.dateToReadableFormat('Cheese')).toEqual('invalid')
  })
})
