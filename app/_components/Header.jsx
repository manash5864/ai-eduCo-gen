
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

function Header() {
  
  return (
    <div className='flex justify-between p-5 shadow-md'>
        <Image src={'/logo1.jpg'} width = {100} height={50} alt='no'/>
        <Button><Link href="/dashboard" className='cursor-pointer'>Get started</Link></Button>
        
    </div>
  )
}

export default Header