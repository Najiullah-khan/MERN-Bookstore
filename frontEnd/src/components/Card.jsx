import React from 'react'

function Card(props) {
  return (
    <>
      <div className='mt-4  p-3'>
      <div className="card bg-base-100 w-96 shadow-xl max-w-[350px] hover:scale-105 ">
  <figure>
    <img
      src={props.data.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {props.data.name}
      <div className="badge badge-secondary">{props.data.category}</div>
    </h2>
    <p>{props.data.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{props.data.price}</div>
      <div className="cursor-pointer badge badge-outline hover:bg-pink-500 ">Buy now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Card
