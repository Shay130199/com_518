import React, { useState} from 'react';
import './post.css'
import {Link} from "react-router-dom"

function PostDataForm(props)
{
  const [formvalue, setFormvalue]= useState({id: "", name: "", type: "", country: "", region: "", lon:"", lat:"", description:"", recommendations:""});

  const handleInput =(e)=>{
    const { name, value}= e.target;
    setFormvalue({...formvalue, [name]:value});
    //console.log(formvalue);
  }
  const handleFormsubmit= async (e)=>{
    e.preventDefault();
    
   await fetch('http://localhost:8800/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
		id:formvalue.id,
        name: formvalue.name,
        type: formvalue.type
      })
    });
   console.log("success");

  }

    return(
        <React.Fragment>
        
          <div className="row">
          <div className="col-sm-8 text-success">
            <h1 className="mt-3 mb-3  text-white">
            Post Form Data to Fetch API with React JS

            <Link to="/">
                <input type="button" value="Go back"/>
            </Link>

            </h1>
            <form className='row' onSubmit={ handleFormsubmit}>            
                <div className="col-md-3">  
                <label className="form-label text-white"></label>              
                <input  type="text" name='id' value={formvalue.id} onChange={ handleInput}  className='form-control'  placeholder='ID Number' />
              </div>

              <div className="col-md-3">  
                <label className="form-label text-white"></label>              
                <input  type="text" name='name' value={formvalue.name } onChange={ handleInput}  className='form-control'  placeholder='Name....' />
              </div>

              <div className="col-md-3">  
                <label className="form-label text-white"></label>              
                <input  type="text" name='type' value={formvalue.type} onChange={ handleInput}  className='form-control'  placeholder='Type...' />
                </div>

                <div className="col-md-3">  
                <label className="form-label text-white"></label>              
                <input  type="text" name='country' value={formvalue.country } onChange={ handleInput}  className='form-control'  placeholder='Country....' />
              </div>

              <div className="col-md-3">  
                <label className="form-label text-white"></label>              
                <input  type="text" name='region' value={formvalue.region } onChange={ handleInput}  className='form-control'  placeholder='Region....' />
              </div>

              <div className="col-md-3">  
                <label className="form-label text-white"></label>              
                <input  type="text" name='lon' value={formvalue.lon } onChange={ handleInput}  className='form-control'  placeholder='lon....' />
              </div>

              <div className="col-md-3">  
                <label className="form-label text-white"></label>              
                <input  type="text" name='lat' value={formvalue.lat } onChange={ handleInput}  className='form-control'  placeholder='Lat....' />
              </div>

              <div className="col-md-3">  
                <label className="form-label text-white"></label>              
                <input  type="text" name='description' value={formvalue.description } onChange={ handleInput}  className='form-control'  placeholder='Description....' />
              </div>

              <div className="col-md-3">  
                <label className="form-label text-white"></label>              
                <input  type="text" name='recommendations' value={formvalue.recommendations } onChange={ handleInput}  className='form-control'  placeholder='Recommendations....' />
                <button className='button '>Submit</button>
              </div>
               </form>
            </div>
        </div>
        </React.Fragment>
    );
}

export default PostDataForm;