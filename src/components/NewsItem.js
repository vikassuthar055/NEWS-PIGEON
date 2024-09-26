 import React from 'react'
 
 const NewsItem = (props) => {  
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
      <div className="my-3" >
          <div className="card" style={{maxHeight:'450px',minHeight:'450px',boxSizing:'border-box'}}>
              <div style={{
                  display: 'flex',
                  justifyContent:'flex-end',
                  position: 'absolute',
                  right: '3px',
                  bottom:'10px',
                  
              }
              }> 
                  <span className="badge rounded-pill bg-danger " > {source} </span>
              </div>
              <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{title}...  </h5>
                  <p className="card-text">{description}...</p>
                  <p  className="card-text"><small style={{fontSize:'12px',fontWeight:'bold'}}  className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                  <a  style={{position:'absolute',bottom:"10px"}} rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
              </div>
          </div>
      </div>
  )

}
export default NewsItem
 