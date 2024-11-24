import React, { useState }from 'react'

export default function UsestateCountryCapitialchnage() {
    const [capital, setCapital] = useState();
    const capitals = [
        { label: "India", value: "New Delhi" },
        { label: "Bangladesh", value: "Dakha" },
        { label: "Chinya", value: "Bejing" },
        { label: "Pakistan", value: "Lahore" },
      ];
      const onChangeFun = (e) => {
        console.log(e);
        setCapital(e.target.value);
      };
    
      console.log(capital, "capital");
    
  return (
    <>
        <select value={capital} onChange={onChangeFun}>
        {capitals.map((capital) => (
          <option value={capital.value}>{capital.label}</option>
        ))}
      </select>
      <div>{capital}</div>
     </>
    
  );
}
