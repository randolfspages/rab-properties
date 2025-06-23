/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export default function MainSection(props: { children: any }) {
    const { children } = props
  return (
    <main className='container mx-auto flex-1'>
        {children}
    </main>
  )
}
