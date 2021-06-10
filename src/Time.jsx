import React,{useState} from 'react'

function Time() {
    let time = new Date().toLocaleTimeString();
    const[ctime,setCtime] = useState(time);

    const uupdateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }

    setInterval(uupdateTime,1000);
    return (
        <>
        <h2>{ctime}</h2>
            
        </>
    )
}

export default Time;
