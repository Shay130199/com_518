import React, {useEffect, useState} from 'react'
import './SearchBar.css'


function AjaxDetails() {
  const [data, setData] = useState([])

  const url = "http://localhost:8800/regions/create"
  useEffect(() => {
    fetch(url, {
      header: {
        ID:'213213213'
      }
    } )
    .then(response =>response.json()).then(json => {
      console.log("json", json)
      setData(json)

    }).catch(e => {
      console.log("e", e)
    })
  }, [])

  const postPutEvent = () => {
    const data = {
      id: '12243',
      name: 'London',
      country: 'UK',
      region: 'London',
      recommendations:'Lovely'
    }
    const url = data.id ? "http://localhost:8800/regions/create"+data.id : "http://localhost:8800/regions/create"
      fetch(url, {
        method:data.id ? 'PUT' : 'POST',
        header:{
          'Content-Type':'application/json',
          'Access-Control-Allow-Orgin': '*'
        },
        body:JSON.stringify(data)
      })
      .then(response=> {
        console.log("response", response)
        if(response.state === 200){
          alert("Sucess")
        }

      }).catch(e => {
        console.log("e", e)
      })
  }
  
  return (
    <div className="AjaxDetails">
      <h2>Hello</h2>
      {
        data.map(item => {
          return(
            <div>{item.name}</div>
          )
        })
      }
      <button onClick={postPutEvent}>hello</button>
    </div>
  )
}

export default AjaxDetails
