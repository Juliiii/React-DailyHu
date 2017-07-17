import React from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
export const ArticlesListItem = ({thumbnail, title, date, url}) => {
  return(
    <WingBlank size="sm">
      <WhiteSpace size="sm" />
      <div className="articlesItem-wrapper">
        <img src={thumbnail} alt="thumbnail" className="articlesItem-img" />
        <h4 className="articlesItem-title">{title}</h4>
        <span className="articlesItem-date">{date}</span>
      </div>
      <WhiteSpace size="sm" />
    </WingBlank>
  );
}

export default ArticlesListItem;