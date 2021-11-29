

export const listItem=page=>fetch(`CONTENTLISTINGPAGE-PAGE${page}.json`,{
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }).then(res => res.json());

