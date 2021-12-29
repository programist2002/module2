import React from 'react'
import styles from './Module2.css'

const Module2 = ({item}) => {

    const {author, comments, post, title} = item;

    return (
        <div className="wrapperPost">
            <h5>{title}</h5>
            <div> Автор: {author}</div>
            <div>Пост:</div>
            <div>{post}</div>
            <div className="comment">Коментарі:</div>
            <div>{
            
            comments ?  comments.map((item, index) => (
                <div key={index}>{item.comment}</div>
            ))
            :
                <div>Даний пост не має ще жодного коментаря</div>
           
            }</div>
        </div>
    )
}

export default Module2