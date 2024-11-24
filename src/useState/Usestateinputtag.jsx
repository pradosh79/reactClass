import React,{useState} from 'react'

export default function Usestateinputtag() {
    const [name, setName] = useState();
    const[show, setShow]=useState();
    const handelName=(e)=>{
          setName(e.target.value);
    }
    console.log(name);
    const handelShow=()=>{
        setShow(name);
    };

  return (
    <>
    <div><input type='text' name='username' value={name} onChange={handelName}/>
      
         <button onClick={handelShow}>Submit</button>
    </div>
    <div>{show}</div>
    </>
    
    
  );
}
