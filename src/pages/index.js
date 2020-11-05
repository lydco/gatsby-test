import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{color:'red'}}>
      <Header headerText="Homepage" />
      <p>Wow, nice.</p>
      <Link to="/contact/">Contact</Link>
    </div>
  )
}
