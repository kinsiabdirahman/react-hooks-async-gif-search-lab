import React from 'react'

function GifSearch({ searchTerm, setSearchTerm, onHandleSubmit }) {
    return (
    <div>
        
            
        <form className="input-group p-3" onSubmit={onHandleSubmit} > 
            <input 
            placeholder='Search...'
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            />
            <button 
                type="submit"  
                className="btn btn-outline-success my-2 mx-auto">Submit
            </button>
        </form>
            
        
    </div>
    )
}

export default GifSearch