import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/TeamScore.css'

function TeamScore(props) {
  TeamScore.propTypes = {
    matchData: PropTypes.object,
    team: PropTypes.string,
    Heroes: PropTypes.array,
    ItemIds: PropTypes.object,
    Items: PropTypes.object,
  }
  const [players, setPlayers] = useState([])

  useEffect(() => {
    if (props.team === 'The-Radiant') {
      setPlayers([...props.matchData.players.slice(0, 5)])
    } else {
      setPlayers([...props.matchData.players.slice(5, 10)])
    }
  }, [props.team, props.matchData])

  const getHeroByID = (heroID) =>
    props.Heroes.find((hero) => hero.id === parseInt(heroID, 10))

  const calcHeroDmgHeal = (value) => {
    if (value === 0) return 0
    if (value < 1000) return value
    return `${Math.round(value / 100) / 10}k`
  }

  const showOverview = () => {
    Array.from(document.getElementsByClassName('overview')).forEach(
      (element) => {
        element.classList.remove('hide-mobile')
      },
    )
    Array.from(document.querySelectorAll('.farm, .damage, .items')).forEach(
      (element) => {
        element.classList.add('hide-mobile')
      },
    )
  }

  const showFarm = () => {
    Array.from(document.getElementsByClassName('farm')).forEach((element) => {
      element.classList.remove('hide-mobile')
    })
    Array.from(document.querySelectorAll('.overview, .damage, .items')).forEach(
      (element) => {
        element.classList.add('hide-mobile')
      },
    )
  }

  const showDamage = () => {
    Array.from(document.getElementsByClassName('damage')).forEach((element) => {
      element.classList.remove('hide-mobile')
    })
    Array.from(document.querySelectorAll('.overview, .farm, .items')).forEach(
      (element) => {
        element.classList.add('hide-mobile')
      },
    )
  }

  const showItems = () => {
    Array.from(document.getElementsByClassName('items')).forEach((element) => {
      element.classList.remove('hide-mobile')
    })
    Array.from(document.querySelectorAll('.overview, .farm, .damage')).forEach(
      (element) => {
        element.classList.add('hide-mobile')
      },
    )
  }

  const getItemById = (ID) => props.Items[props.ItemIds[ID]]

  return (
    <div className="TeamScore">
      {players !== [] ? (
        <section className={props.team}>
          <header className={props.team === 'The-Radiant' ? 'green' : 'red'}>
            {props.team.replace('-', ' ')}
          </header>
          <article className="TeamScore-table">
            <div className="hide-desktop button-bar">
              <button type="button" onClick={() => showOverview()}>
                Overview
              </button>
              <button type="button" onClick={() => showFarm()}>
                Farm
              </button>
              <button type="button" onClick={() => showDamage()}>
                Damage
              </button>
              <button type="button" onClick={() => showItems()}>
                Items
              </button>
            </div>
            <table className={`teamscore-table ${props.team}`}>
              <thead>
                <tr>
                  <th>Hero</th>
                  <th>Player</th>
                  <th className="hide-mobile">Level</th>
                  <th className="overview">K</th>
                  <th className="overview">D</th>
                  <th className="overview">A</th>
                  <th className="gold overview">NET</th>
                  <th className="hide-mobile farm">LH / DN</th>
                  <th className="hide-mobile farm">GPM / XPM</th>
                  <th className="hide-mobile damage">DMG</th>
                  <th className="hide-mobile damage">HEAL</th>
                  <th className="hide-mobile damage">BLD</th>
                  <th className="hide-mobile items">Wards</th>
                  <th className="hide-mobile items">Items</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr key={player.player_slot}>
                    <td>
                      <img
                        src={`http://cdn.dota2.com/apps/dota2/images/dota_react/heroes/${
                          getHeroByID(player.hero_id).name.split(
                            'npc_dota_hero_',
                          )[1]
                        }.png?`}
                        alt={getHeroByID(player.hero_id).localized_name}
                        className="scoreboard-size"
                      ></img>
                    </td>

                    <td>
                      {'personaname' in player ? (
                        <Link
                          to={`../../players/${player.account_id}`}
                          className={
                            props.team === 'The-Radiant' ? 'green' : 'red'
                          }
                        >
                          {player.personaname}
                        </Link>
                      ) : (
                        'Anonymous'
                      )}
                    </td>

                    <td className="hide-mobile">{player.level}</td>

                    <td className="overview">{player.kills}</td>

                    <td className="overview">{player.deaths}</td>

                    <td className="overview">{player.assists}</td>

                    <td className="gold overview">{player.net_worth}</td>

                    <td className="hide-mobile farm">{`${player.last_hits} / ${player.denies}`}</td>

                    <td className="hide-mobile farm">{`${player.gold_per_min} / ${player.xp_per_min}`}</td>

                    <td className="hide-mobile damage">
                      {calcHeroDmgHeal(player.hero_damage)}
                    </td>

                    <td className="hide-mobile damage">
                      {calcHeroDmgHeal(player.hero_healing)}
                    </td>

                    <td className="hide-mobile damage">
                      {calcHeroDmgHeal(player.tower_damage)}
                    </td>

                    <td className="hide-mobile items">
                      <span className="color-observer-ward">
                        {player.obs_placed}
                      </span>{' '}
                      /{' '}
                      <span className="color-sentry-ward">
                        {player.sen_placed}
                      </span>
                    </td>
                    <td className="hide-mobile items inventory">
                      <div className="main-inventory-items">
                        {player.item_0 !== 0 ? (
                          <img
                            src={`http://cdn.dota2.com${
                              getItemById(player.item_0).img
                            }`}
                            alt="test text"
                            className="item-thumbnail"
                          ></img>
                        ) : (
                          <div className="no-item"></div>
                        )}
                        {player.item_1 !== 0 ? (
                          <img
                            src={`http://cdn.dota2.com${
                              getItemById(player.item_1).img
                            }`}
                            alt="test text"
                            className="item-thumbnail"
                          ></img>
                        ) : (
                          <div className="no-item"></div>
                        )}
                        {player.item_2 !== 0 ? (
                          <img
                            src={`http://cdn.dota2.com${
                              getItemById(player.item_2).img
                            }`}
                            alt="test text"
                            className="item-thumbnail"
                          ></img>
                        ) : (
                          <div className="no-item"></div>
                        )}
                        {player.item_3 !== 0 ? (
                          <img
                            src={`http://cdn.dota2.com${
                              getItemById(player.item_3).img
                            }`}
                            alt="test text"
                            className="item-thumbnail"
                          ></img>
                        ) : (
                          <div className="no-item"></div>
                        )}
                        {player.item_4 !== 0 ? (
                          <img
                            src={`http://cdn.dota2.com${
                              getItemById(player.item_4).img
                            }`}
                            alt="test text"
                            className="item-thumbnail"
                          ></img>
                        ) : (
                          <div className="no-item"></div>
                        )}
                        {player.item_5 !== 0 ? (
                          <img
                            src={`http://cdn.dota2.com${
                              getItemById(player.item_5).img
                            }`}
                            alt="test text"
                            className="item-thumbnail"
                          ></img>
                        ) : (
                          <div className="no-item"></div>
                        )}
                      </div>
                      <div className="neutral-item">
                        {player.item_neutral !== 0 ? (
                          <img
                            src={`http://cdn.dota2.com${
                              getItemById(player.item_neutral).img
                            }`}
                            alt="test text"
                            className="item-thumbnail"
                          ></img>
                        ) : (
                          <div className="no-item"></div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </section>
      ) : (
        'Loading match data'
      )}
    </div>
  )
}

export default TeamScore
