import React from 'react'

const Datadisplay = (props) => {
  return (
      <div>
   {
       props.array.map(function(ele){
return <div className="card row col-5 offset-4">
<ul className="list-group list-group-flush">
  <li className="list-group-item">{ele._id}</li>
  <li className="list-group-item">{ele.picture}</li>
  <li className="list-group-item">{ele.name}</li>
  <li className="list-group-item">{ele.gender}</li>
  <li className="list-group-item">{ele.company}</li>
</ul>
</div>

       })
   }
   </div>
  )
}

export default Datadisplay
