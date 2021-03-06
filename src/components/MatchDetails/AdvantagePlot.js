import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../styles/AdvantagePlot.css'

function AdvantagePlot(props) {
  AdvantagePlot.propTypes = {
    matchData: PropTypes.object,
  }

  const [ExpData, setExpData] = useState([])
  const [GoldData, setGoldData] = useState([])
  const [expGraph, setExpGraph] = useState(false)

  useEffect(() => {
    setExpData([...props.matchData.radiant_xp_adv])
    setGoldData([...props.matchData.radiant_gold_adv])
  }, [props.matchData])

  function showExpGraph() {
    setExpGraph(true)
    document.getElementById('goldBtn').classList.remove('active')
    document.getElementById('expBtn').classList.add('active')
  }

  function showGoldGraph() {
    setExpGraph(false)
    document.getElementById('goldBtn').classList.add('active')
    document.getElementById('expBtn').classList.remove('active')
  }

  return ExpData === [] && GoldData === [] ? (
    <p>Waiting for data!</p>
  ) : (
    <div className="AdvantagePlot">
      <section className="rechart">
        <header>
          Team Advantages <small>Per Minute</small>
        </header>
        <article>
          <div className="button-bar">
            <button
              id="expBtn"
              type="button"
              onClick={() => {
                showExpGraph()
              }}
            >
              Experience
            </button>

            <button
              className="active"
              id="goldBtn"
              type="button"
              onClick={() => {
                showGoldGraph()
              }}
            >
              Net Worth
            </button>
          </div>
          <ResponsiveContainer width="95%" height={250}>
            {expGraph ? (
              <LineChart width={650} height={250} data={ExpData}>
                {
                  // Interval = {4} makes the interval every 5th array element, so every 5 minutes
                }
                <XAxis unit=":00" domain={[0, 'dataMax']} interval={4} />
                <YAxis />
                <CartesianGrid fill="#1C242D" />
                <Line
                  type="monotone"
                  dataKey={(v) => v}
                  stroke="#30BFD2"
                  dot={false}
                  strokeWidth={3}
                />
              </LineChart>
            ) : (
              <LineChart width={350} height={250} data={GoldData}>
                <XAxis unit=":00" domain={[0, 'dataMax']} interval={4} />
                <YAxis />
                <CartesianGrid fill="#1C242D" />
                <Line
                  type="monotone"
                  dataKey={(v) => v}
                  stroke="#FBB829"
                  dot={false}
                  strokeWidth={3}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </article>
      </section>
    </div>
  )
}

export default AdvantagePlot
