import React from 'react'
import { countercontext } from '../context/context'
import { useContext } from 'react'

function List() {
    let [task,settask]=useContext(countercontext);
    function del(ind){
      let copy=[...task];
      copy.splice(ind,1);
      settask(copy);
    }
  return (
    <div>
      <h1>List of tasks</h1>
      {
        task.map((e,i)=>(
            <div className='mt-2' key={i}>
            <h5 className='text-info d-inline p-1'>{e.addtask}</h5> 
            <button onClick={()=>del(i)} className='btn btn-outline-danger'>X</button>
            </div>
        )
        )
      }
    </div>
  )
}

export default List
