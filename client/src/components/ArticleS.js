import React from 'react'

const deleteArticle = x => {
  let data = x
  fetch(`/api/articles/${data}`, {
    method: "DELETE",
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
};

const ArticleS = props => (
  <div className="ba mw6 bg-washed-green b--gold br3 pa3 ma0">
    <div>{props.x.title}</div>
    <div>Published on {props.x.date}</div>
    <div>link {props.x.url}</div>
    <button
      className="bg-red bt b--silver bw2 br1"
      onClick={() => deleteArticle(props.x._id)}
    >
      Delete
    </button>
  </div>
);


export default ArticleS;