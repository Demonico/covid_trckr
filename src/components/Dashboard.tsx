import React, { Fragment, useEffect, useState } from 'react'

import { currentStateData } from '../_fixtures/current_state_data'
import DataService from '../_services/data_service'

// import constants
import { findStateName } from '../_constants/index'

import { Card } from './layout/Card'

export const Dashboard = () => {
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
        <p>States</p>
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
              <Card
                key={state.state}
                stateName={stateName}
                caseCount={state.positive}
                deathCount={state.death}
                recovered={state.recovered}
                testCount={state.totalTestResults}
                bgColor={bgColor}
              />
            )
          })}
      </div>
    </Fragment>
  )
}
