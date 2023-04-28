import  React, {useEffect, useState} from 'react'
import './Search.css';

export default function Search() {
    const [data, setData] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    const [filterVal, setFilterVal] = useState('')
    useEffect(()=> {
        const fetchData=()=> {
            fetch('http://localhost:8800/regions')
            .then(response => response.json())
            .then(json =>{
                setData(json)
                setSearchApiData(json)
            })
        }
        fetchData()
    }, [])
    const handleFilter=(e)=> {
        if(e.target.value === '') {
            setData(searchApiData)
        } else {
            const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setData(filterResult)
        }
        setFilterVal(e.target.value)
    }

    return (
        <div style={{margin: '30px 10%'}}>
            <div>
                <input placeholder='Search' value={filterVal} onInput={(e)=>handleFilter(e)}/>
            </div>
            <table class="content-table">
                <th>ID:</th>
                <th>Name:</th>
                <th>Region:</th>
                <th>Country:</th>
                {
                    data.map(item => {
                        return(
                            <tr>
                                <td>{item.ID}</td>
                                <td>{item.name}</td>
                                <td>{item.region}</td>
                                <td>{item.country}</td>
                            </tr>
                        )

                    })
                }
            </table>
        </div>
    )
}
