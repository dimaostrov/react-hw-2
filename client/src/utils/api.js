import request from 'request';

export const postSearch = (query, startYear, endYear) => {
  
  // make request
  request.post({
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query + validateYears([startYear, endYear])}`,
    qs: {
      'api-key': 'e6c4c7ac070049fab4d34eaa40c38dbf'
    }
  }, (err, response, body) => {
    body = JSON.parse(body);
    return body;
  })
}

const validateYears = (years) => {
  let result = years.map(year => {
    return (String(year.length) === 4 && year > 1899) ? `&begin_date=${year}0101` : '';
  }).join('');
  return result
}