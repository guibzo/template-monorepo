import { Button } from '@valley/ui/button'
import { useState } from 'react'

export const Home = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <span className='text-3xl'>Hello World!</span>
      <Button onClick={() => setCounter((prev) => prev + 1)}>Click me</Button>
      <span className='text-xl font-semibold'>Count: {counter}</span>
    </div>
  )
}
