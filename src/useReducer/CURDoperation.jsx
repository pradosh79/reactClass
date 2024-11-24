import React, { useReducer } from 'react'

const formOperation = (state , action) => {
    switch (action.type){
        case "CHANGE" : 
            return {name : action.name , age : action.age , data: state.data};
        case "SUBMIT" : 
        console.log(state);
        
        return {name : "" , age : "" , data : [...state.data , ...[{name : state.name , age : state.age}]]};
        case "DELETE" : 
            
                return {...state , data : state.data.filter((obj,index) => action.idx != index)}

            
        default :
            return {name : "" , age: ""};
    }
}
export default function CurdOperation() {
    const initialValue = {
        name : "",
        age : "",
        data: []
    }
    const[formState, formDispatch] = useReducer(formOperation , initialValue);
    console.log(formState);
    const deleteAction = e => {
        if(window.confirm("Are you sure?")){
            const idx = e.target.dataset['idx'];
            console.log(idx);
            formDispatch({ ...formState ,type:"DELETE" , idx})
        }else{
            return false;
        }
    }
  return (
    <div>
        <table >
            <thead>
                <tr>
                    <th colSpan={2}>Add Screen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td><input type='text' value={formState.name} onInput={e => formDispatch({...formState ,name : e.target.value , type: 'CHANGE'})} /></td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td><input type='text' value={formState.age} onInput={e => formDispatch({...formState,age : e.target.value , type: 'CHANGE'})} /></td>
                </tr>
                <tr >
                    <td colSpan={2}><button onClick={(e) => formDispatch( { type : "SUBMIT"}) }>Submit</button></td>
                </tr>
            </tbody>
        </table>

        <h1>CURD OPERATION</h1>
        <table width="100%" border={1} >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {formState.data.map((dataOne, key) => 

                <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{ dataOne.name}</td>
                    <td>{ dataOne.age }</td>
                    <td><button onClick={deleteAction} data-idx={key}>X</button></td>
                </tr>

                )}
            </tbody>
        </table>
    </div>
  )
}