// render 3 tables and matches/win% for each: Lane role, game mode, Faction

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlayerCounts } from '../helpers/opendota'

function LifetimeStats() {
  const { ID } = useParams()

  const [Counts, setCounts] = useState([])

  useEffect(() => {
    getPlayerCounts(ID).then((result) => setCounts(result))
  }, [ID])

  return (
    <div className="LifetimeStats">
      <section>
        <header>
          Statistics <small>All Time</small>
        </header>
        <article>
          {Counts ? (
            <table className="r-table lifetime-stats">
              <tbody>
                <tr>
                  <th>Role</th>
                  <th>Matches</th>
                  <th>Win Rate</th>
                </tr>
                <tr>
                  <td>Unknown</td>
                  <td>{Counts.lane_role[0].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.lane_role[0].win / Counts.lane_role[0].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>
                <tr>
                  <td>Safelane</td>
                  <td>{Counts.lane_role[1].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.lane_role[1].win / Counts.lane_role[1].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>
                <tr>
                  <td>Mid</td>
                  <td>{Counts.lane_role[2].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.lane_role[2].win / Counts.lane_role[2].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>
                <tr>
                  <td>Offlane</td>
                  <td>{Counts.lane_role[3].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.lane_role[3].win / Counts.lane_role[3].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>
                <tr>
                  <td>Jungle</td>
                  <td>{Counts.lane_role[4].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.lane_role[4].win / Counts.lane_role[4].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <th>Game Mode</th>
                  <th>Matches</th>
                  <th>Win Rate</th>
                </tr>
                <tr>
                  <td>All Pick</td>
                  <td>{Counts.game_mode[1].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.game_mode[1].win / Counts.game_mode[1].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>
                <tr>
                  <td>Captains Mode</td>
                  <td>{Counts.game_mode[2].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.game_mode[2].win / Counts.game_mode[2].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>
                <tr>
                  <td>Random Draft</td>
                  <td>{Counts.game_mode[3].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.game_mode[3].win / Counts.game_mode[3].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>
                <tr>
                  <td>Single Draft</td>
                  <td>{Counts.game_mode[4].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.game_mode[4].win / Counts.game_mode[4].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>

                <tr>
                  <td>All Random</td>
                  <td>{Counts.game_mode[5].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.game_mode[5].win / Counts.game_mode[5].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>

                <tr>
                  <td>All Draft</td>
                  <td>{Counts.game_mode[22].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.game_mode[22].win /
                          Counts.game_mode[22].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <th>Faction</th>
                  <th>Matches</th>
                  <th>Win Rate</th>
                </tr>
                <tr>
                  <td>Dire</td>
                  <td>{Counts.is_radiant[0].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.is_radiant[0].win /
                          Counts.is_radiant[0].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>
                <tr>
                  <td>Radiant</td>
                  <td>{Counts.is_radiant[1].games}</td>
                  <td>
                    {`${
                      Math.round(
                        (Counts.is_radiant[1].win /
                          Counts.is_radiant[1].games) *
                          100 *
                          100,
                      ) / 100
                    }%`}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            'Loading'
          )}
        </article>
      </section>
    </div>
  )
}

export default LifetimeStats
