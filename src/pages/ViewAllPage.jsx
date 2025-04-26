import React from 'react';
import { useEffect, useState } from "react";
import PendingTickets from '../components/PendingTickets';
import CompletedTickets from '../components/CompletedTickets';
import FilterByUserID from '../components/FilterByUserID';
import SortByTitle from '../components/SortByTitle';
// import SortByDateCompleted from '../components/SortByDateCompleted';



const ViewAllPage = () => {
    const [tickets, setTickets] = useState([]);
    const [allTickets, setAllTickets] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [sortType, setSortType] = useState("any");
    const [filterByUserID, setFilterByUserID] = useState("all");
  
    useEffect(() => {
      const fetchTicket = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos')
          const data = await response.json()
          const updatedData = data.map(ticket => {
            return {...ticket, dateCompleted: ticket.completed ? new Date().toLocaleString() : null}
          })

          setTickets(updatedData)
          setAllTickets(updatedData)
        } catch (error) {
          console.log("Error fetching data!", error)
        }
        // finally {
        //   setLoading(false);
        // }
      }

      fetchTicket()
    }, []);

    useEffect(() => {
      const filter = filterByUserID === "all" ? allTickets : allTickets.filter((ticket) => ticket.userId === Number(filterByUserID));

      setTickets(filter);
    }, [filterByUserID, allTickets]);

    const ticketStatusHandler = (ticketID) => {
      setTickets((tickets) => {
        return tickets.map((ticket) => {
          if(ticket.id === ticketID) {
            return {...ticket, completed: !ticket.completed, dateCompleted: ticket.completed ? null : new Date().toLocaleString()};
          }else{
            return ticket
          }
        })
      })
    }

    const sortPendingTickets = (tickets) => {
        return [...tickets.filter((ticket) => !ticket.completed)].sort((ticket1, ticket2) => {
        if(sortType === "asc") {
          return ticket1.title.localeCompare(ticket2.title)
        }else if(sortType === "desc") {
          return ticket2.title.localeCompare(ticket1.title)
        }
        return 0
      })
    }

  return (
    <div className="flex flex-col flex-grow px-[8%] py-10 gap-10">

      <div className="bg-indigo-50 mx-28 p-8 rounded shadow-md">
        <div className="flex flex-row items-center gap-3">
          <FilterByUserID filterByUserID={filterByUserID} setFilterByUserID={setFilterByUserID}/>
          <SortByTitle  sortType={sortType} setSortType={setSortType}/>
        </div>
      </div>

        <section className="flex justify-evenly px-[8%] gap-10 flex-wrap">
          <PendingTickets tickets = {sortPendingTickets(tickets)}  
            onToggle = {ticketStatusHandler}
          />
          <CompletedTickets tickets={tickets.filter((ticket) => ticket.completed)} onToggle={ticketStatusHandler}/>
        </section>
    </div>
  );
};

export default ViewAllPage;