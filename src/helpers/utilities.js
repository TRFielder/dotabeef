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

function dateFromUnixTime(date) {
  const dateObj = new Date(date * 1000)
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

function getTowerStatus(number) {
  // Blank | Blank | Blank | Blank | Blank | T4 bot | T4 top | T3 bot | T2 bot | T1 bot | T3 mid | T2 mid | T1 mid | T3 top | T2 top | T1 top
  const towerStatusArray = Array.from(number)
  const towerStatus = {
    t4bot: towerStatusArray[5] === '1',
    t4top: towerStatusArray[6] === '1',
    t3bot: towerStatusArray[7] === '1',
    t2bot: towerStatusArray[8] === '1',
    t1bot: towerStatusArray[9] === '1',
    t3mid: towerStatusArray[10] === '1',
    t2mid: towerStatusArray[11] === '1',
    t1mid: towerStatusArray[12] === '1',
    t3top: towerStatusArray[13] === '1',
    t2top: towerStatusArray[14] === '1',
    t1top: towerStatusArray[15] === '1',
  }

  return towerStatus
}

function getBarracksStatus(number) {
  // Blank | Blank | Bot R | Bot M | Mid R | Mid M | Top R | Top M
  const barracksStatusArray = Array.from(number)
  const barracksStatus = {
    botR: barracksStatusArray[2] === '1',
    botM: barracksStatusArray[3] === '1',
    midR: barracksStatusArray[4] === '1',
    midM: barracksStatusArray[5] === '1',
    topR: barracksStatusArray[6] === '1',
    topM: barracksStatusArray[6] === '1',
  }

  return barracksStatus
}

function getGameMode(mode) {
  switch (mode) {
    case 1:
      return 'All Pick'
    case 2:
      return "Captain's Mode"
    case 3:
      return 'Random Draft'
    case 4:
      return 'Single Draft'
    case 5:
      return 'All Random'
    case 6:
      return 'Intro'
    case 7:
      return 'Diretide'
    case 8:
      return "Reverse Captain's mode"
    case 9:
      return 'The Greevilling'
    case 10:
      return 'Tutorial'
    case 11:
      return 'Mid Only'
    case 12:
      return 'Least Played'
    case 13:
      return 'New Player'
    case 14:
      return 'Compendium'
    case 15:
      return 'Co-op vs Bots'
    case 16:
      return 'Captains Draft'
    case 18:
      return 'Ability Draft'
    case 20:
      return 'All Random Deathmatch'
    case 21:
      return '1v1 Mid Only'
    case 22:
      return 'All Pick'
    case 23:
      return 'Turbo'
    default:
      return 'Unknown'
  }
}

const timeSinceMatch = (date) => {
  const lastMatchMs = date * 1000
  const lastMatch = new Date(lastMatchMs)
  const today = new Date()
  const dayDiff = Math.round((today - lastMatch) / (1000 * 3600 * 24))
  const hourDiff = Math.round((today - lastMatch) / (1000 * 3600))
  return dayDiff >= 1 ? `${dayDiff} days ago` : `${hourDiff} hours ago`
}

export {
  getDuration,
  checkPlayerWin,
  dateToReadableFormat,
  dateFromUnixTime,
  to8BitUnsigned,
  to16BitUnsigned,
  getPlayerSlot,
  getTowerStatus,
  getBarracksStatus,
  getGameMode,
  timeSinceMatch,
}
