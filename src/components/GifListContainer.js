import React, { useEffect, useState }  from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
    const API_KEY = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YP5CdPfb9yRGPvdL3l3JhXK9oyJG3OGz&rating=g"

    const [gifs, setGifs] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch(API_KEY)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setGifs(data.data.slice(0,3))
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`${API_KEY}&q=${searchTerm}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setGifs(data.data.slice(0,3))
        })
    }

    return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <GifSearch 
                onHandleSubmit={handleSubmit}
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} />
            <div className='col-md-6'>
                <GifList gifs={gifs}/>
            </div>
            </div>
        </div>
    </div>
    )
}

export default GifListContainer