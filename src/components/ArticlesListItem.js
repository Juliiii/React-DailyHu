import React from 'react'
export const ArticlesListItem = ({thumbnail, title, date, url}) => {
  return(
    <div>
      <img src={thumbnail} alt="thumbnail" />
      <h2>{title}</h2>
      <span>{date}</span>
    </div>
  );
}

export default ArticlesListItem;