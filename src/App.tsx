import React, { useEffect, useState } from 'react'

import DataService from './_services/data_service'

import { currentStateData } from './_fixtures/current_state_data'

// import constants
import { findStateName } from './_constants/index'

export default function App() {
  const [stateCurrent, setStateCurrent] = useState(currentStateData)

  useEffect(() => {
    async function getCurrentStateData() {
      const currentStateData = await DataService.getStatesCurrentValues()
      console.log(currentStateData.data)
      setStateCurrent(currentStateData.data)
    }

    getCurrentStateData()
  }, [])

  return (
    <div>
      <p>States</p>
      <ul>
        {stateCurrent &&
          stateCurrent.map((state: any) => (
            <li>
              {findStateName(state.state)} has {state.positive} cases.
            </li>
          ))}
      </ul>
    </div>
  )
}
