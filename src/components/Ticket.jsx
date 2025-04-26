import React from 'react'
import { IoArrowUndoCircleSharp } from "react-icons/io5";
import { FaCheckDouble } from "react-icons/fa";

const Ticket = ({ticket, statusChanger}) => {
  return (
    <>
      <div className="bg-white p-4 rounded shadow">
        <div className="relative inline-block group">
          <button className="ml-60 px-2 py-1 rounded-md hover:bg-slate-200" 
            onClick={() => statusChanger(ticket.id)}> {ticket.completed ? <IoArrowUndoCircleSharp style={{color: "#ff0000"}}/> 
                    : <FaCheckDouble  style={{color: "#37ff00"}}/>}
          </button>
        </div>
        <div className="text-xl font-bold">userID: {ticket.userId}</div>
        <h3 className="text-gray-900">Title: {ticket.title}</h3>
        <div className="border-b border-gray-300 my-2"></div>
        <div className="text-gray-600">{ticket.completed ? "Status: Completed" : "Status: In Progress..."}</div>
        <div className="text-green-700">{ticket.completed ? `Completed on: ${ticket.dateCompleted}` : null}</div>
      </div>
    </>
  );
};

export default Ticket
