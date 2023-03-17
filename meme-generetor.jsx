import React, { useState } from 'react'
import { memeTypes } from './data.js'
function MemeGeneretor() {
    const [valueTop, setValueTop] = useState("Top")
    const [valueSelect,setValueSelect] = useState()
    const [valueBottom, setValueBottom] = useState("Bottom")
    const [url, setUrl] = useState("")
    function generate(evt) {
        evt.preventDefault()
        const urlMeme = `https://apimeme.com/meme?meme=${valueSelect}&top=${valueTop}&bottom=${valueBottom}`
        setUrl(urlMeme)
    }
    const memeOption = memeTypes.map((el) => <option key={el.label}>{el.value}</option>)
    return (
        <div className='container'>
                <form onSubmit={generate}>
                    <select value={valueSelect} onChange={(e)=>{
                        setValueSelect(e.target.value)
                    }}>
                        {memeOption}
                        {/* {memeTypes.map((el)=>{
                        return(
                            <option>{el.value}</option>
                        )
                    })} */}
                    </select>
                    <input name='text' id='top' type="text" value={valueTop} onChange={(e) => {
                        setValueTop(e.target.value)
                    }} />
                    <input name='text' type="text" value={valueBottom} onChange={(e) => {
                        setValueBottom(e.target.value)
                    }} />
                    <button type='submit'>Generate</button>
                </form> 
            <div className="contentImg">
                {
                    url &&
                    <img src={url} alt="generate" />
                }

            </div>
        </div>
    )
}

export default MemeGeneretor