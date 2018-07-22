import React from 'react';
import ArticleS from './ArticleS';

const Saved = props => 
<div>
  <p className="tu b">Saved</p>
  <div>
    {props.articles.map(x => <ArticleS x={x} id={x._id} />)}
  </div>
</div>


export default Saved;