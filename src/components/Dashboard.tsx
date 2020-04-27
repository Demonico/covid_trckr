import React from 'react'

import Card from './layout/Card'

export default function Dashboard(): JSX.Element {
  return (
    <div>
      <div className="cards">
        <Card title="Most Deaths per Case" bgColor="none"></Card>
        <Card title="Most Deaths per Test" bgColor="none"></Card>
        <Card title="Most Deaths" bgColor="none"></Card>
      </div>
      <div className="table"></div>
    </div>
  )
}
