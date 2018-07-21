import rp from 'request-promise';

export const postSearch = (query='', startYear='', endYear="") => {
  return rp({
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query + validateYears([startYear, endYear])}`,
    qs: {
      'api-key': 'e6c4c7ac070049fab4d34eaa40c38dbf'
    }
  }).then(body => JSON.parse(body))
}

const validateYears = (years) => {
  let result = years.map(year => {
    return (String(year.length) === 4 && year > 1899) ? `&begin_date=${year}0101` : '';
  }).join('');
  return result
}

export const defaultSearch = () => {
  // make request
  return rp({
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
    qs: {
      'api-key': 'e6c4c7ac070049fab4d34eaa40c38dbf'
    }
  })
  .then(res => JSON.parse(res))
  .catch(err => console.log(err))
}