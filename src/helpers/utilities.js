function checkPlayerTeam(slot) {
  const Radiant = [0, 1, 2, 3, 4]
  const Dire = [128, 129, 130, 131, 132]

  if (Radiant.includes(slot)) return 'Radiant'
  if (Dire.includes(slot)) return 'Dire'
  return 'Invalid player slot'
}

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
  if (date === undefined) return 'No games'
  const timeUnix = Date.parse(date)
  const dateObj = new Date(timeUnix)
  return `${dateObj.getDate()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear()}`
}

export { checkPlayerTeam, getDuration, checkPlayerWin, dateToReadableFormat }
