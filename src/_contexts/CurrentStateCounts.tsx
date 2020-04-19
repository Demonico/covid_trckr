import React, { useReducer } from 'react'

export const CurrentStateCountsContext = React.createContext({})
CurrentStateCountsContext.displayName = 'CurrentStateCounts'

const StateCountsProvider = CurrentStateCountsContext.Provider

// TODO abstract to another file and change type annotation
function currentStateCountsReducer(state: any, action: any) {
  switch (action.type) {
    case 'UPDATE_PAGINATION':
      return {
        ...state,
        resultGroup: action.payload.resultGroup,
      }
    case 'UPDATE_RESULT_SET_SIZE':
      return {
        ...state,
        resultSize: action.payload.resultSize,
      }
    default:
      return state
  }
}

// TODO set up default config
//! resultGroup = 0
//! resultSize = 5
//! sort direction = ascending (descending for case count)
//! property to sort by = state abbr or case count

export default function CurrentStateCounts({
  children,
}: {
  children: JSX.Element
}) {
  const [currentStateCounts, dispatch] = useReducer(
    currentStateCountsReducer,
    {}
  )
  // pagination

  // sort by abbr
  // sort by case count
  // sort by deaths

  return (
    <StateCountsProvider value={currentStateCounts}>
      {children}
    </StateCountsProvider>
  )
}
