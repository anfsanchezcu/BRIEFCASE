import { title } from 'process'
import React from 'react'
type Props = {
  title ?: string,
  children : React.ReactNode
}

const Section = ({ title, children }: Props) => {
  return (
    <section id={title} className='h-screen w-full flex md:items-center justify-center md:justify-end snap-center'>
      <div className='h-4/5 w-5/6 backdrop-blur-sm bg-white/10 rounded-2xl  m-5'>
        {children}
      </div>
    </section>
  )
}

export default Section