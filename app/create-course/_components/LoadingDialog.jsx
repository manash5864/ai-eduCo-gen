import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'

function LoadingDialog({loading}) {
  return (
    <div>
        <AlertDialog open = {loading}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogDescription>
            <div className='flex flex-col py-10 items-center'>
                <Image src={'/loding.gif'} width={100} height = {100} alt='no'/>
                <h2>Please wait... AI is working on your course</h2>
            </div>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}

export default LoadingDialog