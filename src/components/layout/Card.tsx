import React from 'react'

interface cardProps {
  children: JSX.Element[] | JSX.Element
  title: string
  bgColor: string
}

export default function Card({
  children,
  title,
  bgColor,
}: cardProps): JSX.Element {
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
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 py-4">{children}</div>
    </div>
  )
}
