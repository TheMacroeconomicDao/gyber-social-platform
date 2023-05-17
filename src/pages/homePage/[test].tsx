import React from 'react'

export default function Page({test}) {
  return (
    <div>{test}</div>
  )
}

export function getServerSideProps(ctx) {
  const {test} = ctx.query
  
  return {
    props: {test}
  }
}
