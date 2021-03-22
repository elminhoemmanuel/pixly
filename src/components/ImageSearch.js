import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {

    const [enteredtext, setSearchText] = useState('');

    const handleChange = (e) =>{
        setSearchText(e.target.value);
        searchText(enteredtext);
    } 
    
    const submitSearch = (e) =>{
        e.preventDefault();
        searchText(enteredtext);
    }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={submitSearch} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input onChange={handleChange} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
            <button className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Search
            </button>
        </div>
      </form>
	</div>
  )
}

export default ImageSearch;
