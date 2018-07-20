import React from 'react';

const Search = props => 
<div className="mw8 center ba pa4">
  <form className="flex flex-column mw6 center" action="">
    <label htmlFor="">Search</label>
    <input type="text" value={props.topic} name="topic" onChange={props.change}/>
    <label htmlFor="">Start Year</label>
    <input type="text" value={props.sY} name="startYear" onChange={props.change}/>
    <label htmlFor="">End Year</label>
    <input type="text" value={props.eY} name="endYear" onChange={props.change}/>
    <button className="br bw3 b--gold br4 bg-washed-green pa3 mt5 mw4 center" onSubmit={props.submit}>Search</button>
  </form>
</div>

export default Search;