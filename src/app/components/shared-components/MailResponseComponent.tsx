'use client'
import { IMailResponseComponent } from '@/app/interfaces/shared-components/IMailResponseComponent'
import { Dialog, DialogBody } from '@material-tailwind/react'
import React from 'react'
import { MdCancel, MdOutlineDone } from 'react-icons/md'



export const MailResponseComponent:React.FC<IMailResponseComponent> = ({mailDialog, setMailDialog}) => {
    return (
        <Dialog
            open={mailDialog !== ""}
            size='sm'
            handler={() => { setMailDialog("") }}
            className='bg-white/70'
             onResize={() => {}} onResizeCapture={() => {}} placeholder={""} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}
        >

            <DialogBody className='flex items-center justify-center text-black text-2xl py-[130px]'  onResize= {() => {}} onResizeCapture= {() => {}} placeholder={""} onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                <div className='flex flex-col items-center justify-center'>
                    {
                        mailDialog !== "Successful"
                            ? <MdCancel className='size-[100px] text-black' />

                            : <MdOutlineDone className='size-[100px] text-blue-800' />
                    }


                    <h1 className={` text-center`}>
                        {mailDialog}
                    </h1>

                </div>
            </DialogBody>

        </Dialog>

    )
}
