import React, { useRef } from "react";
import "./Modal-window.css";

const ModalWindow = (props) => {
  let name = useRef();
  let count = useRef();
  let width = useRef();
  let height = useRef();
  let color = useRef();
  let weight = useRef();

  return (
    <div className={`modal ${props.show ? "modal--show" : ""}`}>
      <div className='modal__input-wrap'>
        <div>
          <span>name</span>
          <input
            ref={name}
            onChange={() => {
              props.changeValue("name",name.current.value);
            }}
            placeholder={props.name}
            type='text'
          />
        </div>
        <div>
          <span>count</span>
          <input
            ref={count}
            onChange={() => {
              props.changeValue("count",count.current.value);
            }}
            placeholder={props.count}
            type='text'
          />
        </div>
        <div>
          <span>width</span>
          <input
            ref={width}
            onChange={() => {
              props.changeValue("width", width.current.value);
            }}
            placeholder={props.width}
            type='text'
          />
        </div>
        <div>
          <span>height</span>
          <input
            ref={height}
            onChange={() => {
              props.changeValue("height", height.current.value);
            }}
            placeholder={props.height}
            type='text'
          />
        </div>
        <div>
          <span>color</span>
          <input
            ref={color}
            onChange={() => {
              props.changeValue("color", color.current.value);
            }}
            placeholder={props.color}
            type='text'
          />
        </div>
        <div>
          <span>weight</span>
          <input
            ref={weight}
            onChange={() => {
              props.changeValue("weight", weight.current.value);
            }}
            placeholder={props.weight}
            type='text'
          />
        </div>
        <div>
          <button onClick={()=>{props.confirm()}}>ok</button>
          <button onClick={()=>{props.cancel()}}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
