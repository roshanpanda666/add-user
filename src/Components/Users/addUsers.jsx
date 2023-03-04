import './addUsers.css'
import { useState } from 'react'
function AddUsers(props) {
    
    const[title,seTtitle]=useState('')
    const[name,updateName]=useState('')

    const[number,seNumber]=useState('')
    const[nameafter,updatenameafter]=useState('')

    const onSubmit=(event)=>{
        event.preventDefault()

        seTtitle(event.target.value)
    }

    const onSubmitnum=(eventN)=>{
        eventN.preventDefault()

        seNumber(eventN.target.value)
    }

    
    

    const clicked=()=>{
      
      updateName(title)
      updatenameafter(number)
      
    }
    

  return (
    <div className='father'>
      <div className="bindsom">

        <label className='NameL' htmlFor="text">Name</label>
        <input type="text" className='TxtForm'onChange={onSubmit} value={title}/>
        
        <label className='NameL2' htmlFor="text">Age(year)</label>
        <input type="number" className='NumberAge'onChange={onSubmitnum} value={number}/>
        

        <button className='finnalbtn' onClick={clicked} >click</button>
      </div>
        

        <div className="show">
            <div className="names">
              name = {name}
            </div>
            <div className="ages">
              age = {nameafter}
            </div>
        </div>
      
    </div>
  )
}

export default AddUsers

