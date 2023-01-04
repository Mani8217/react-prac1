import memeData from "../memeData";
import { useState } from "react";
export default function Meme(){
    const [memeImage, setMemeImage] = useState("")
 function getMemeImage(){
    const memesArray = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].image)
 }


    return(
        <main>
            
            <div className="form">
                <input 
                type="text" 
                placeholder="Top-Text"
                className="form--input"
                
                /><input 
                type="text"
                placeholder="Bottom-Text"
                className="form--input"
                
                />
                <button
                onClick={getMemeImage}
                className="form--button"
                >
                    Get a new Meme Image 🖼️
                </button>
                
            </div>
            <p id="meme-container">
                <img src={memeImage} alt="" />
                </p>
        </main>
    )
}