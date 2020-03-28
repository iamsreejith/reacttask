import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";


function SelectFilter({setFilter ,posts}) {
    
    const [rFilter, setRFilter] = useState(0);
    const [tFilter, setTFilter] = useState('');

 
    return (
        <div className="container border border-dark rounded">


            

            <div className="typeFilter">
            <h4><p className="text-center ">Select Some Filter</p></h4>
                <p>Select type <br></br>
      <button className="btn btn-secondary btn-sm" onClick={() =>  setTFilter("Comedy")}>Comedy</button>
      <button className="btn btn-secondary btn-sm m-2" onClick={() => setTFilter("Action")}>Action</button>
      </p>
      </div>
      <div className="ratingFilter">
      <p>Select Rting <br></br>
      <button className="btn btn-secondary btn-sm m-2" onClick={() => setRFilter(1)}>Above 1</button>
      <button className="btn btn-secondary btn-sm m-2" onClick={() => setRFilter(2)}>Above 2</button>
      <button className="btn btn-secondary btn-sm m-2" onClick={() => setRFilter(3)}>Above 3</button>
      <button className="btn btn-secondary btn-sm m-2" onClick={() => setRFilter(4)}>Above 4</button>
      </p>
      </div>
      


      {/* <button  onClick={() =>  handleFilterone({rFilter})}>test</button> */}
      <button className="btn btn-outline-primary" onClick={() => setFilter(posts.filter(person => person.rating >= rFilter && person.type === tFilter  ))}>Apply </button><br/><br/>
      <button className="btn btn-outline-warning" onClick={() => setFilter(posts)}>Remove Filters</button>
        </div>
    )
}

export default SelectFilter
