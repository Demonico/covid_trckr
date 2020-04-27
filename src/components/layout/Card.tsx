import React from 'react'
import numeral from 'numeral'

const pillStyle =
  'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold'

const pillColor = 'text-gray-700'

enum backgroundColor {
  red,
  green,
  none,
}

export const Card = ({
  stateName,
  caseCount,
  deathCount,
  recovered,
  testCount,
  bgColor,
}: {
  stateName: string
  caseCount: number
  deathCount: number
  testCount: number
  recovered: number
  bgColor: string
}) => {
  const bgCo: any = {
    red: 'bg-red-300',
    green: 'bg-green-300',
    noColor: '',
  }
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${bgCo[bgColor]}`}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{stateName}</div>
      </div>
      <div className="px-6 py-4">
        <span className={`${pillStyle} ${pillColor} mr-2`}>
          Total Cases: {numeral(caseCount).format('0,0')}
        </span>
        <span className={`${pillStyle} ${pillColor} mr-2`}>
          Total Deaths: {numeral(deathCount).format('0,0')}
        </span>
        <span className={`${pillStyle} ${pillColor} mr-2`}>
          Total Recovered: {numeral(recovered).format('0,0')}
        </span>
        <span className={`${pillStyle} ${pillColor}`}>
          Total Tests: {numeral(testCount).format('0,0')}
        </span>
      </div>
    </div>
  )
}
