import React from 'react'

export default function Content({ title, name, description}) {
  return (
    <>
      <div className="card-landing">
        <h2 className="h2-landing">{title}</h2>
        <h5 className="h5-landing">{name}</h5>
        <p className="p-landing">
          {description}
        </p>
      </div>
    </>
  )
}
