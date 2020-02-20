import React, { Component } from 'react'
import config from './config'
import Loader from './Loader'
import './search.css'

class Search extends Component {

    state={
        films:[],
        people:[],
        planets:[],
        species:[],
        starships:[],
        vehicles:[],
        searchQuery:'',
        select:'',
        results:'',
        loading:false,
        error:null,
    }

    setFilms=(newFilms)=>{
        this.setState({films:newFilms,
                        results:newFilms,
                        loading:false})
    }

    setPeople=(peeps)=>{
        this.setState({people:peeps,
                        results:peeps,
                        loading:false})
    }

    setPlanets=(newPlanets)=>{
        this.setState({planets:newPlanets,
                        results:newPlanets,
                        loading:false})
    }

    setSpecies=(newSpecies)=>{
        this.setState({species:newSpecies,
                        results:newSpecies,
                        loading:false})
    }

    setStarships=(newStarships)=>{
        this.setState({starships:newStarships,
                        results:newStarships,
                        loading:false})
    }

    setVehicles=(newVehicles)=>{
        this.setState({vehicles:newVehicles,
                        results:newVehicles,
                        loading:false})
    }

    setSearchQuery=(event)=>{
        this.setState({searchQuery:event.target.value})
    }

    handleSelect=(event)=>{
        this.setState({select:event.target.value})
    }

    handleSubmit=()=>{ 
        if(this.state.select==='' || this.state.searchQuery===''){
            alert('Please Use Dropdown and Enter Text to Search')
        } else {
            this.setState({loading:true}) 
            switch(this.state.select){
                case('people'):
                fetch(config.API_URL + `people/?search=` + this.state.searchQuery,  {
                    method:'GET',
                })
                .then(res => {
                    if(!res.ok){
                        throw new Error(res.status)
                    }
                    return res.json()
                })
                .then(this.setPeople)
                .catch(error => this.setState({error}))
                break;

                case('film'):
                fetch(config.API_URL + `films/?search=` + this.state.searchQuery,  {
                    method:'GET',
                })
                .then(res => {
                    if(!res.ok){
                        throw new Error(res.status)
                    }
                    return res.json()
                })
                .then(this.setFilms)
                .catch(error => this.setState({error}))
                break;

                case('planets'):
                fetch(config.API_URL + `planets/?search=` + this.state.searchQuery,  {
                    method:'GET',
                })
                .then(res => {
                    if(!res.ok){
                        throw new Error(res.status)
                    }
                    return res.json()
                })
                .then(this.setPlanets)
                .catch(error => this.setState({error}))
                break;

                case('species'):
                fetch(config.API_URL + `species/?search=` + this.state.searchQuery,  {
                    method:'GET',
                })
                .then(res => {
                    if(!res.ok){
                        throw new Error(res.status)
                    }
                    return res.json()
                })
                .then(this.setSpecies)
                .catch(error => this.setState({error}))
                break;
                
                case('starships'):
                fetch(config.API_URL + `starships/?search=` + this.state.searchQuery,  {
                    method:'GET',
                })
                .then(res => {
                    if(!res.ok){
                        throw new Error(res.status)
                    }
                    return res.json()
                })
                .then(this.setStarships)
                .catch(error => this.setState({error}))
                break;

                case('vehicles'):
                fetch(config.API_URL + `vehicles/?search=` + this.state.searchQuery,  {
                    method:'GET',
                })
                .then(res => {
                    if(!res.ok){
                        throw new Error(res.status)
                    }
                    return res.json()
                })
                .then(this.setVehicles)
                .catch(error => this.setState({error}))
                break;
            }
        }
    }  
    
    showObject=(result)=>{
        let newString=''
        let div=''
        let array=[]
        let count = 1;
        for (let [key, value] of Object.entries(result)) {
            newString = key + ' : '  +  value
            div = <div className='entry' key={count}>{newString}</div>
            array.push(div)
            count++;
        }
        return array
    }
    
    noResults=()=>{
        if(this.state.results.results && this.state.results.results.length === 0){
            return('No results to display')
        }    
    }

    render() {
        return(
            <div className='Search'>
                <h2>Select search type from dropdown and enter your query</h2>
                <form>
                <input type='text' onChange={(event)=>this.setSearchQuery(event)} required></input>
                    <select required onChange={(event)=>this.handleSelect(event)}>
                        <option disable='true' defaultValue> Please Select From Below : </option>
                        <option value='film'>Film</option>
                        <option value='people'>People</option>
                        <option value='planets'>Planets</option>
                        <option value='species'>Species</option>
                        <option value='starships'>Starships</option>
                        <option value='vehicles'>Vehicles</option>
                    </select>
                    
                    <div className='submitArea'>
                    <button type='button' onClick={()=>this.handleSubmit()}>Submit</button>
                    </div>
                </form>
                <div className='results'>
                    <div className='loader'>
                        {this.state.loading ? <Loader /> : null }
                        {this.noResults()}
                    </div>
                    {this.state.results? this.state.results.results.map((result, index)=>{
                        return (
                            <ul key={index}>
                                {this.showObject(result)}
                            </ul>
                        )
                    }): null}
                </div>
            </div>
        )
    }
}

export default Search