import React from 'react'
import ArticlesListItem from './ArticlesListItem';
export const ArticlesList = ({data}) => {
  return(
    <div>
      {data.map((item, index) => <ArticlesListItem {...item} />)}
    </div>
  )
};

export default ArticlesList;