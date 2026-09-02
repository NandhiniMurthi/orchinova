import type { ReactNode } from 'react'
import './Card.css'

type CardProps = {
  children: ReactNode
}

function Card({ children }: CardProps) {
  return <section className="card">{children}</section>
}

export default Card