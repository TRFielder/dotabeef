import * as utilities from '../helpers/utilities'

describe('Testing utilities', () => {
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

  test('Converts numbers to 8 bit unsigned integers', () => {
    expect(utilities.to8BitUnsigned(63)).toEqual('00111111')
    expect(utilities.to8BitUnsigned(51)).toEqual('00110011')
    expect(utilities.to8BitUnsigned(1)).toEqual('00000001')
  })

  test('Converts numbers to 16 bit unsigned integers', () => {
    expect(utilities.to16BitUnsigned(2046)).toEqual('0000011111111110')
    expect(utilities.to16BitUnsigned(390)).toEqual('0000000110000110')
  })
})

describe('Testing match information parsing', () => {
  test('Correctly parses player slot and team information', () => {
    expect(utilities.getPlayerSlot(utilities.to8BitUnsigned(3))).toEqual({
      playerTeam: 'Radiant',
      playerSlot: 3,
    })

    expect(utilities.getPlayerSlot(utilities.to8BitUnsigned(130))).toEqual({
      playerTeam: 'Dire',
      playerSlot: 2,
    })
  })

  test('Correctly parses tower status array', () => {
    expect(utilities.getTowerStatus(utilities.to16BitUnsigned(2046))).toEqual({
      t4bot: true,
      t4top: true,
      t3bot: true,
      t2bot: true,
      t1bot: true,
      t3mid: true,
      t2mid: true,
      t1mid: true,
      t3top: true,
      t2top: true,
      t1top: false,
    })

    expect(utilities.getTowerStatus(utilities.to16BitUnsigned(390))).toEqual({
      t4bot: false,
      t4top: false,
      t3bot: true,
      t2bot: true,
      t1bot: false,
      t3mid: false,
      t2mid: false,
      t1mid: false,
      t3top: true,
      t2top: true,
      t1top: false,
    })
  })

  test('Correctly parses barracks status array', () => {
    expect(utilities.getBarracksStatus(utilities.to8BitUnsigned(63))).toEqual({
      botR: true,
      botM: true,
      midR: true,
      midM: true,
      topR: true,
      topM: true,
    })

    expect(utilities.getBarracksStatus(utilities.to8BitUnsigned(51))).toEqual({
      botR: true,
      botM: true,
      midR: false,
      midM: false,
      topR: true,
      topM: true,
    })
  })

  test('Correctly returns game mode', () => {
    expect(utilities.getGameMode(1)).toEqual('All Pick')
    expect(utilities.getGameMode(22)).toEqual('All Pick')
  })
})
