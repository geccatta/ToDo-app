import React from 'react'

const SortByTitle = ({sortType, setSortType}) => {

    return (
        <div className="flex items-center gap-2">
            Sort by:
            <select className="px-3 py-2 rounded-md text-sm border-2 border-black" onChange={(event) => setSortType(event.target.value)} 
                value={sortType}
            >
              <option value="any">Any</option>
              <option value="asc">Titile(ASC)</option>
              <option value="desc">Titile(DESC)</option>
            </select>
        </div>
    )
}

export default SortByTitle
