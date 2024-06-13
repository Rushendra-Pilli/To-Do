import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { countercontext } from './components/context/context';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import List from './components/list/list';
import Count from './components/number/count'

function App() {
  let [task,settask]=useContext(countercontext);
  let {register,handleSubmit,formState:{errors}}=useForm()
   function submittask(userobj){
      settask([...task,userobj]);
   }
  return (
    <div className="App">
      <div className='d-flex justify-content-center m-5'>
        <div className='m-5 p-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h1 className='mb-4'>Add a TASK</h1>
        <form onSubmit={handleSubmit(submittask)}>
        <input type='text' placeholder='Add a Task...' {...register('addtask',{required:true})} className='w-100 mb-3'></input>
        {errors.addtask?.type==="required" && (<p className='text-danger'>Task is required</p>)}
        <button type='submit' className='btn btn-success'>Add</button>
        </form>
      </div>
      <div className='m-5 p-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <List/>
      </div>
      <div className='m-5 p-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <Count/>
      </div>
    </div>
  </div>
  );
}

export default App;
