import React,{useState,useEffect} from 'react'

const Home = () => {
    let [state,setState]=useState([]);
    const apiCall=()=>{
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data =>{
          console.log(data)
       setState(data)
    })
    }

    useEffect(function(){
        apiCall();
    },[])

  return (
    <div className='row'>

    {
       state.map(function(ele) {
       return    <div className='col-md-3 overflow-hidden' style={{marginTop:"40px"}}>
       <div className="card" style={{width: "20rem" ,height:"40rem"}}>,
        <img className="card-img-top" src={ele.image} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{ele.title}</h5>
          <p className="card-text">{ele.description}</p>
          <h3>Price: {ele.price}</h3>
          <button id="app" data-info={ele.title} className="btn btn-primary">  Add2Cart</button>
        </div>
      </div>
      </div>
    })
}
</div>
  )
}

export default Home
