import React from 'react'
import MeetingForm from './_components/MeetingForm'

const CreateMeetingPage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
        <div>
<MeetingForm/>
        </div>
        <div className='md:col-span-2'>

        </div>
    </div>
  )
}

export default CreateMeetingPage