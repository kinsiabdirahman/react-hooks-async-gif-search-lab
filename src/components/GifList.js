import React from 'react'

function GifList({gifs}) {
    return (
    <ul className='list-unstyled'>
        {gifs.map(gif => {
            return (
            <li key={gif.id} className='pb-5'>
                <h4>{gif.title}</h4>
                <img src={gif.images.original.url} alt={gif.title} />
            </li>
            )})}
    </ul>
    )
}

export default GifList