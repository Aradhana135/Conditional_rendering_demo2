import React from 'react'
import Mailbox from './Mailbox';
const Messages = () => {
    const messages = ['Aradhana', 'Ar: Aradhana', 'Ar:Ar: Aradhana'];
  return (
    <>
<Mailbox unreadMessages={messages} />
    </>
  )
}

export default Messages