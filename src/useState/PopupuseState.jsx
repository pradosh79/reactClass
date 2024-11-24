import React,{ useState } from 'react'

export default function PopupuseState() {
    const [name, setName] = useState();

    const handelName=(e)=>{
        setName(e.target.value);
  }
  const handelShow=()=>{
    alert(name);
};

  return (
    <>
    <div><input type='text' name='username' value={name} onChange={handelName}/>
      
         <button onClick={handelShow}>Submit</button>
    </div>
    </>
  );
}
