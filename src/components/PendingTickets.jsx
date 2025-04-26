import React from 'react'
import Ticket from '../components/Ticket';
import { MdOutlinePendingActions } from "react-icons/md";

const PendingTickets  = ({ tickets, onToggle }) => {
  return (
    <div className="bg-indigo-50 p-4 rounded shadow-md text-center max-w-sm w-full flex flex-col gap-4">
        <div className = "flex items-center justify-center gap-2 text-lg font-semibold mb-2 bg-indigo-200 rounded-lg mx-10 py-2">
            <MdOutlinePendingActions className="text-4xl text-indigo-900" />
            <div className="text-lg font-semibold mt-1">Pending...</div>
        </div>
        {tickets
        .filter((ticket) => !ticket.completed)
        .map((ticket) => (
            <Ticket
            key={ticket.id}
            ticket={ticket}
            statusChanger = {onToggle}
            />
        ))}
    </div>
  )
}

export default PendingTickets
