/* Functions for the open dota API go here

get win loss /players/{account_id}/wl
*/

const getPlayersByName = async (name) => {
  const response = await fetch(`https://api.opendota.com/api/search?q=${name}`)
  const searchResult = await response.json()

  return searchResult
}

const getPlayerData = async (accountID) => {
  const response = await fetch(
    `https://api.opendota.com/api/players/${accountID}`,
  )
  const searchResult = await response.json()
  const playerData = {
    name: searchResult.profile.personaname,
    avatar: searchResult.profile.avatar,
    avatarmedium: searchResult.profile.avatarmedium,
    avatarfull: searchResult.profile.avatarfull,
  }

  return playerData
}

const getRecentMatches = async (accountID) => {
  const response = await fetch(
    `https://api.opendota.com/api/players/${accountID}/recentMatches`,
  )
  const searchResult = await response.json()
  return searchResult
}

const getPlayerWinLoss = async (accountID) => {
  const response = await fetch(
    `https://api.opendota.com/api/players/${accountID}/wl`,
  )
  const data = await response.json()
  return data
}

export { getPlayersByName, getPlayerData, getRecentMatches, getPlayerWinLoss }
