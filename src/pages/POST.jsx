import React, { useState} from 'react'
import './SearchBar.css'
import {useNavigate, Link} from "react-router-dom"
import {toast} from "react-toastify"
import './post.css'


const initialState = {
    id: "",
    name: "",
    type: "",
    country:"",
    region:"",
    lon:"",
    lat:"",
    description:"",
    recommendations:"",
};


const POST = () => {
    const [state, setState] = useState(initialState);

    const {id, name, type, country, region, lon, lat, description, recommendations} = state;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!id || !name || !type || !country ||!region || !lon ||!lat || !description ||!recommendations ){
            toast.error("PLEASE PROVIDE VALUE IN EACH FIELD");
        } else {
            fetch.post("http://localhost:8800/post", {
                id,
                name,
                type,
                country,
                region,
                lon, 
                lat, 
                description,
                recommendations
        }).then(() => {
            setState({id: "", name: "", type: "", country: "", region: "", lon:"", lat:"", description:"", recommendations:""})
        })
        .catch((err) => toast.error(err.response.data));
        toast.success("ADDED SUCCESSFULLY")
        setTimeout(() => navigate.push("/"), 500);
        }

    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }

    return(
    <div style={{marginTop: "100px" }}>
        <form style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
        }}
        onSubmit={handleSubmit}
        >
            <label htmlFor="id">ID</label>
            <input
            type="text"
            id="id"
            name="id"
            placeholder="ID number..."
            value={id}
            onChange={handleInputChange}
            />
            <label htmlFor="name">Name</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="Name..."
            value={name}
            onChange={handleInputChange}
            />
            <label htmlFor="type">Type</label>
            <input
            type="text"
            id="type"
            name="type"
            placeholder="Type"
            value={type}
            onChange={handleInputChange}
            />
            <label htmlFor="country">Country</label>
            <input
            type="text"
            id="country"
            name="country"
            placeholder="Country"
            value={country}
            onChange={handleInputChange}
            />
            <label htmlFor="region">Region</label>
            <input
            type="text"
            id="region"
            name="region"
            placeholder="Region"
            value={region}
            onChange={handleInputChange}
            />
            <label htmlFor="lon">lon</label>
            <input
            type="text"
            id="lon"
            name="lon"
            placeholder="lon"
            value={lon}
            onChange={handleInputChange}
            />
            <label htmlFor="lat">lat</label>
            <input
            type="text"
            id="lat"
            name="lat"
            placeholder="lat"
            value={lat}
            onChange={handleInputChange}
            />
            <label htmlFor="description">Description</label>
            <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleInputChange}
            />
            <label htmlFor="recommendations">Recommendations</label>
            <input
            type="text"
            id="recommendations"
            name="recommendations"
            placeholder="Recommendations"
            value={recommendations}
            onChange={handleInputChange}
            />
            <input type='submit' value="save"/>
            <Link to="/">
                <input type="button" value="Go back"/>
            </Link>

        </form>
    </div>
)}

export default POST