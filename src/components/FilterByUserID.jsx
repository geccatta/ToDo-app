import React from 'react'

const FilterByUserID = ({filterByUserID, setFilterByUserID}) => {

  return (
    <div className="flex items-center gap-2">
        Filter by:
        <select className="px-3 py-2 rounded-md text-sm border-2 border-black" onChange={(event) => setFilterByUserID(event.target.value)}
          value={filterByUserID}
        >
            <option value="all">All</option>
            <option value="1">User-1</option>
            <option value="2">User-2</option>
            <option value="3">User-3</option>
            <option value="4">User-4</option>
            <option value="5">User-5</option>
            <option value="6">User-6</option>
            <option value="7">User-7</option>
            <option value="8">User-8</option>
            <option value="9">User-9</option>
            <option value="10">User-10</option>
        </select>
    </div>
  )
}

export default FilterByUserID
