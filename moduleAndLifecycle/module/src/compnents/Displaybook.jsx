import React, { useState } from 'react'

 const Displaybook = () => {
    let [input, setInput] = useState('')
    const [state,setState]=useState([]);
   
    
    function handalchange(event){
        setInput(event.target.value)  
    }


    const apiCall=()=>{
       
      fetch('https://www.googleapis.com/books/v1/volumes?q='+input)
      .then(response => response.json())
      .then(data =>{
       setState(data.items)
      });  

}
      

  return (

    <div>
      <input type="text" className='form-control'onChange={handalchange} style={{marginTop:"40px"}} placeholder={"Enter Subject name here" }/>
      <button type='button' onClick={apiCall} style={{marginTop:"40px"}} className="btn bg-info">Search Books</button>
      <div className='row'>
      {
       state.map(function(ele) {
        return <div className='col-md-3 overflow-hidden d-flex' style={{marginTop:"40px"}}>
       <div className="card" style={{width: "300px" ,height:"400px"}}>,
        <img className="card-img-top" src={ele.volumeInfo.imageLinks} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{ele.volumeInfo.title}</h5>
          <p className="card-text">{ele.volumeInfo.publisher}</p>
          <h3>Price: {ele.price}</h3>
          <button id="app" data-info={ele.title} className="btn btn-primary">  Add2Cart</button>
        </div>
      </div>
      </div>
     
    })
}
</div>
        </div> 
    
  )
}


export default Displaybook

