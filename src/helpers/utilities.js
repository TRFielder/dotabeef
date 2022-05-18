function getDuration(durationSeconds) {
  // Input is 1680, we want that to be 28 minutes and 0 seconds
  let minutes = Math.floor(durationSeconds / 60)
  let seconds = durationSeconds % 60
  if (minutes === 0) minutes = '00'
  if (seconds < 10) seconds = `0${seconds}`

  return `${minutes}:${seconds}`
}

function checkPlayerWin(team, radiantwin) {
  if (team === 'Radiant' && radiantwin === true) return true
  if (team === 'Radiant' && radiantwin === false) return false
  if (team === 'Dire' && radiantwin === true) return false
  if (team === 'Dire' && radiantwin === false) return true
  return 'Unknown result'
}

function dateToReadableFormat(date) {
  if (date === undefined) return 'not found'
  const timeUnix = Date.parse(date)
  if (Number.isNaN(timeUnix)) return 'invalid'
  const dateObj = new Date(timeUnix)
  return `${dateObj.getDate()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear()}`
}

function to8BitUnsigned(number) {
  return number.toString(2).padStart(8, '0')
}

function to16BitUnsigned(number) {
  return number.toString(2).padStart(16, '0')
}

function getPlayerSlot(number) {
  // Team | Blank | Blank | Blank | Blank | Position | within | team (0-4)
  // Team false if radiant, true if dire
  const playerSlotArray = Array.from(number)
  const playerTeam = playerSlotArray[0] === '0' ? 'Radiant' : 'Dire'
  const playerSlot = parseInt(
    [playerSlotArray[5], playerSlotArray[6], playerSlotArray[7]].join(''),
    2,
  )

  return { playerTeam, playerSlot }
}

export {
  getDuration,
  checkPlayerWin,
  dateToReadableFormat,
  to8BitUnsigned,
  to16BitUnsigned,
  getPlayerSlot,
}
