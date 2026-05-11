import React,{useState} from 'react'
import ProductCard from './ProductCard'

export default function Cart({cart}){
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <li>Test item</li>
        {cart.map((item) => (
          <li key={item.id}>{item.name} is in your cart.</li>
        ))}
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
      </ul>
    </div>
  )
}
