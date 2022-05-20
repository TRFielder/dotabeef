import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlayerCounts } from '../../helpers/opendota'
import '../../styles/LifetimeStats.css'

function LifetimeStats() {
  const { ID } = useParams()

  const [Counts, setCounts] = useState([])

  useEffect(() => {
    getPlayerCounts(ID).then((result) => {
      setCounts(result)
    })
  }, [ID])

  return (
    <div className="LifetimeStats">
      <section>
        <header>
          Statistics <small>All Time</small>
        </header>
        <article>
          {Counts.length !== 0 ? (
            <>
              <table className="r-table lifetime-stats multitable-top">
                <tbody>
                  <tr className="r-row">
                    <th>Role</th>
                    <th>Matches</th>
                    <th>Win Rate</th>
                  </tr>
                  <tr className="r-row">
                    <td>Unknown</td>
                    <td>{Counts.lane_role[0].games}</td>
                    <td>
                      {`${
                        Math.round(
                          (Counts.lane_role[0].win /
                            Counts.lane_role[0].games) *
                            100 *
                            100,
                        ) / 100
                      }%`}
                    </td>
                  </tr>

                  <tr>
                    <td>Safelane</td>
                    {Counts.lane_role[1] === undefined ? (
                      <>
                        <td>0</td>
                        <td>0%</td>
                      </>
                    ) : (
                      <>
                        <td>{Counts.lane_role[1].games}</td>
                        <td>
                          {`${
                            Math.round(
                              (Counts.lane_role[1].win /
                                Counts.lane_role[1].games) *
                                100 *
                                100,
                            ) / 100
                          }%`}
                        </td>
                      </>
                    )}
                  </tr>

                  <tr>
                    <td>Mid</td>
                    {Counts.lane_role[2] === undefined ? (
                      <>
                        <td>0</td>
                        <td>0%</td>
                      </>
                    ) : (
                      <>
                        <td>{Counts.lane_role[2].games}</td>
                        <td>
                          {`${
                            Math.round(
                              (Counts.lane_role[2].win /
                                Counts.lane_role[2].games) *
                                100 *
                                100,
                            ) / 100
                          }%`}
                        </td>
                      </>
                    )}
                  </tr>

                  <tr>
                    <td>Offlane</td>
                    {Counts.lane_role[3] === undefined ? (
                      <>
                        <td>0</td>
                        <td>0%</td>
                      </>
                    ) : (
                      <>
                        <td>{Counts.lane_role[3].games}</td>
                        <td>
                          {`${
                            Math.round(
                              (Counts.lane_role[3].win /
                                Counts.lane_role[3].games) *
                                100 *
                                100,
                            ) / 100
                          }%`}
                        </td>
                      </>
                    )}
                  </tr>

                  <tr>
                    <td>Jungle</td>
                    {Counts.lane_role[4] === undefined ? (
                      <>
                        <td>0</td>
                        <td>0%</td>
                      </>
                    ) : (
                      <>
                        <td>{Counts.lane_role[4].games}</td>
                        <td>
                          {`${
                            Math.round(
                              (Counts.lane_role[4].win /
                                Counts.lane_role[4].games) *
                                100 *
                                100,
                            ) / 100
                          }%`}
                        </td>
                      </>
                    )}
                  </tr>
                </tbody>
              </table>
              <table className="r-table lifetime-stats">
                <tbody>
                  <tr>
                    <th>Game Mode</th>
                    <th>Matches</th>
                    <th>Win Rate</th>
                  </tr>
                  <tr>
                    <td>All Pick</td>
                    {Counts.game_mode[1] === undefined ? (
                      <>
                        <td>0</td>
                        <td>0%</td>
                      </>
                    ) : (
                      <>
                        <td>{Counts.game_mode[1].games}</td>
                        <td>
                          {`${
                            Math.round(
                              (Counts.game_mode[1].win /
                                Counts.game_mode[1].games) *
                                100 *
                                100,
                            ) / 100
                          }%`}
                        </td>
                      </>
                    )}
                  </tr>

                  <tr>
                    <td>Captains Mode</td>
                    {Counts.game_mode[2] === undefined ? (
                      <>
                        <td>0</td>
                        <td>0%</td>
                      </>
                    ) : (
                      <>
                        <td>{Counts.game_mode[2].games}</td>
                        <td>
                          {`${
                            Math.round(
                              (Counts.game_mode[2].win /
                                Counts.game_mode[2].games) *
                                100 *
                                100,
                            ) / 100
                          }%`}
                        </td>
                      </>
                    )}
                  </tr>

                  <tr>
                    <td>Random Draft</td>
                    {Counts.game_mode[3] === undefined ? (
                      <>
                        <td>0</td>
                        <td>0%</td>
                      </>
                    ) : (
                      <>
                        <td>{Counts.game_mode[3].games}</td>
                        <td>
                          {`${
                            Math.round(
                              (Counts.game_mode[3].win /
                                Counts.game_mode[3].games) *
                                100 *
                                100,
                            ) / 100
                          }%`}
                        </td>
                      </>
                    )}
                  </tr>

                  <tr>
                    <td>Single Draft</td>
                    {Counts.game_mode[4] === undefined ? (
                      <>
                        <td>0</td>
                        <td>0%</td>
                      </>
                    ) : (
                      <>
                        <td>{Counts.game_mode[4].games}</td>
                        <td>
                          {`${
                            Math.round(
                              (Counts.game_mode[4].win /
                                Counts.game_mode[4].games) *
                                100 *
                                100,
                            ) / 100
                          }%`}
                        </td>
                      </>
                    )}
                  </tr>

                  <tr>
                    <td>All Random</td>
                    {Counts.game_mode[5] === undefined ? (
                      <>
                        <td>0</td>
                        <td>0%</td>
                      </>
                    ) : (
                      <>
                        <td>{Counts.game_mode[5].games}</td>
                        <td>
                          {`${
                            Math.round(
                              (Counts.game_mode[5].win /
                                Counts.game_mode[5].games) *
                                100 *
                                100,
                            ) / 100
                          }%`}
                        </td>
                      </>
                    )}
                  </tr>

                  <tr>
                    <td>All Draft</td>
                    {Counts.game_mode[22] === undefined ? (
                      <>
                        <td>0</td>
                        <td>0%</td>
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                  </tr>
                </tbody>
              </table>
              <table className="r-table lifetime-stats">
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
            </>
          ) : (
            'Loading'
          )}
        </article>
      </section>
    </div>
  )
}

export default LifetimeStats
