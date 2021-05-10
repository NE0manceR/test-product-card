import React, { useRef } from 'react';
import './Card.css';

const Card = (props) => {
  let input = useRef()

    return (
        <div className="card">
          <img className="card__img" src={props.src} alt="img"/>
          <span className="card__name">{props.name}</span>
          <span>{props.description}</span>
          <span>width: {props.width}</span>
          <span>height: {props.height}</span>
          <span>weight: {props.weight}</span>
          <span>color: {props.color}</span>
          <span className="card__count">product count {props.count}</span>
          {props.comments?.map(({description , comentId})=>{
            return (
              <div key={comentId} className="card__comment-wrap">
                <span className='card__comment'>{description}</span>
                <span
                onClick={()=>{props.deleteComment(description)}}
                 className="card__comment-delete"
                >
                   delete
                </span>
              </div>
            )
          })}
          <input ref={input} type="text"
            onChange={()=>{props.writeComment(input.current.value)}}
          />
          <button
          className="card__add"
          onClick={()=>{props.addComment()}}
          >add comment</button>
          <button
          className="card__edit"
          onClick={()=>{props.edit()}}
          >edit</button>

          <button
            onClick={()=>{props.delete()}}
            className="card__delete"  
          >
            delete
          </button>
        </div>
    );
};

export default Card;
