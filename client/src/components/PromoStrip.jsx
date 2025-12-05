import React from 'react'

export default function PromoStrip() {
  return (
    <section className='max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='bg-gradient-to-r from-brand bg-brand text-white p-8 flex items-center'>
        <div>
          <h3 className='text-2xl font-bold  text-white'>Free shipping over $100</h3>
          <p className='mt-2 opacity-90 text-white'>Fast delivery across the country.</p>
        </div>
      </div>

      <div className='bg-white p-8 border border-slate-100 shadow-soft dark:bg-app-dark'>
        <h3 className='text-xl font-semibold'>Join our rewards</h3>
        <p className='mt-2 text-sm text-slate-600'>Earn points & get exclusive deals.</p>
        <button className='mt-6 px-5 py-2 bg-brand text-white rounded-md'>Learn more</button>
      </div>
    </section>
  )
}
