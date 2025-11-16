import React from 'react'
import { useParams } from 'react-router-dom';

const MeetingDetails = () => {
    const { id } = useParams();
  return (
    <div>
      meetingId is {id}
    </div>
  )
}

export default MeetingDetails
