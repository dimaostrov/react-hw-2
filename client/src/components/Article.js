import React from 'react';

const Article = (props) => 
<div className="ba mw6 bg-washed-green b--gold br3 pa3 ma0">
  <div>{props.x.headline.main}</div>
  <div>
    {props.x.snippet}
  </div>
  <div>
    Published on {props.x.pub_date}
  </div>
  <div>
    link {props.x.web_url}
  </div>
  <button className="bg-red bt b--silver bw2 br1">Save</button>
</div>

export default Article;