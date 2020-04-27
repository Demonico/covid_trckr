import numeral from 'numeral'
import React, { Fragment, useEffect, useState } from 'react'

import { currentStateData } from '../_fixtures/current_state_data'
import DataService from '../_services/data_service'

// import constants
import { findStateName } from '../_constants/index'

import Card from './layout/Card'

const pillStyle =
  'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold'

const pillColor = 'text-gray-700'

export default function AllStates(): JSX.Element {
  const [stateCurrent, setStateCurrent] = useState(currentStateData)

  // useEffect(() => {
  //   async function getCurrentStateData() {
  //     const currentStateData = await DataService.getStatesCurrentValues()
  //     console.log(currentStateData.data)
  //     setStateCurrent(currentStateData.data)
  //   }

  //   getCurrentStateData()
  // }, [])

  return (
    <Fragment>
      <div>
        <h1 className="text-6xl">All States</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 w-full">
        {stateCurrent &&
          stateCurrent.map((state: any) => {
            const stateName = findStateName(state.state)
            let bgColor = 'none'

            if (state.positive > 15000) {
              bgColor = 'red'
            }

            if (state.positive < 1000) {
              bgColor = 'green'
            }

            return (
              <div className="col-span-1">
                <Card key={state.state} title={stateName} bgColor={bgColor}>
                  <span className={`${pillStyle} ${pillColor} mr-2`}>
                    Total Cases: {numeral(state.positive).format('0,0')}
                  </span>
                  <span className={`${pillStyle} ${pillColor} mr-2`}>
                    Total Deaths: {numeral(state.death).format('0,0')}
                  </span>
                  <span className={`${pillStyle} ${pillColor} mr-2`}>
                    Total Recovered: {numeral(state.recovered).format('0,0')}
                  </span>
                  <span className={`${pillStyle} ${pillColor}`}>
                    Total Tests: {numeral(state.totalTestResults).format('0,0')}
                  </span>
                </Card>
              </div>
            )
          })}
      </div>
    </Fragment>
  )
}
