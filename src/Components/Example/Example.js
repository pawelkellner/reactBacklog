import "./Example.css";

const Example = () =>{
    return(
        <article className="article" >
            <div className="name">
                <h1>Name:</h1>
                <p>You can start from typing just one letter to see what games are available!</p>
                <p className="alert">ALL FIELDS NEED TO BE FILLED IN FOR IT TO WORK!</p>
            </div>
            <div className="platforms">
                <h1>Platforms:</h1>
                <ul>
                    <li>PSP, PS2, PS3, PS4, PS5</li>
                    <li>NINTENDO SWITCH</li>
                    <li>WII</li>
                    <li>XBOX 360, XBOX ONE</li>
                    <li>PC</li>
                </ul>
            </div>
            <div className="types">
                <h1>Types:</h1>
                <ul>
                    <li>ACTION</li>
                    <li>ADVENTURE</li>
                    <li>HACK & SLASH</li>
                    <li>RPG</li>
                    <li>SHOOTER</li>
                    <li>THRILLER</li>
                </ul>
            </div>
        </article>
    )
}

export default Example;