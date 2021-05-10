import './App.css';
import React, { useState, Fragment } from 'react'
import Card from './components/Card/Card';
import Plastic from './images/img1.jpg';
import Iron from './images/img2.jpg';
import Wood from './images/img3.jpg';
import ModalWindow from './components/Modal-window/Modal-window';



function App() {

  let [indexId, setIndexId] = useState(10)

  let comments = {
    product0:[
      {
      comentId: 12331,
       description: 'Some Comment 1',
       date: '14:00 22.08.2021',
      }
    ],
   
    product1:[
       {
        comentId: 1233,
        description: 'Nice price',
        date: '14:00 22.08.2021',
       },
       {
         comentId: 1223,
         description: 'SNice item',
         date: '14:00 22.08.2021',
        }
     ],

     product2:[
       {
        comentId: 123,
        description: 'recommend',
        date: '14:00 22.08.2021',
       },
      {
        comentId: 23,
        description: 'Nice item',
        date: '14:00 22.08.2021',
      },
      {
        comentId: 223,
        description: 'fantastic',
        date: '14:00 22.08.2021',
      }
     ],
     product3:[
      {
       comentId: 123,
       description: 'recommend',
       date: '14:00 22.08.2021',
      },
     {
       comentId: 23,
       description: 'Nice item',
       date: '14:00 22.08.2021',
     },
     {
       comentId: 223,
       description: 'fantastic',
       date: '14:00 22.08.2021',
     }
    ]
  }

  let [com, setCom] = useState(comments);

  let products = [
    {
      id: 0,
      src: Plastic,
      name: 'Product Plastic',
      productId:'product0',
      productCount: 4,
      width: 200,
      height: 200,
      weight: '200g',
      color: 'red',
      coments: com.product0,
    },
    {
      id: 1,
      src: Iron,
      name: 'Product Iron',
      productId:'product1',
      productCount: 3,
      width: 200,
      height: 200,
      weight: '200g',
      color: 'red',
      coments: com.product1,
    },
    {
      id: 2,
      src: Wood,
      name: 'B-Product Wood',
      productId:'product2',
      productCount: 7,
      width: 200,
      height: 200,
      weight: '2000g',
      color: 'red',
      coments: com.product2,
    },
    {
      id: 3,
      src: Plastic,
      name: 'A-Some Product',
      productId:'product3',
      productCount: 4,
      width: 200,
      height: 200,
      weight: '200g',
      color: 'red',
      coments: com.product3,
    },
  ]
 
  let [newComment, setNewComment] = useState('');
  let [cards, setCards] = useState(products);

  function deleteCard(id) {
    let x = window.confirm('Delete Card ?');
   
    if ( x ) {
      let card = [...cards.filter(card => card.id !== id)];

      setCards(card);
    }
  }

  function writeComment(comment) {
    let newCom = comment;
    setNewComment(newCom);
  }

  function addComment(id) {
    let newCom = {...com}
    let newIndex = indexId;
     
    for (const iterator of Object.keys(newCom)) {
      if ( id === iterator) {
          newCom[iterator].push({
          comentId: indexId,
          description: newComment,
          date: '14:00 22.08.2021',
        })
      }
    }

    newIndex++;
    setIndexId(newIndex);
    setCom(newCom);
  }

  function deleteComment(description,id) {
    let newCom = {...com}
    let index = 0;
    newCom[id].forEach(element => {
      if (element.description === description) {
        index = newCom[id].indexOf(element);
      }
    });

    newCom[id].splice(index,1);
    setCom(newCom);
  }
  
  let [item, setItem] = useState();
  let [showModal, setShowModal] = useState(false);

  function edit(id) {
    let editItem  = cards.filter( item => item.id === id);

    setShowModal(showModal = !showModal);
    setItem(editItem[0]);
  }


  function changeValue(input,value) {
    let newChangeItem = {...item};
    newChangeItem[input] = value
    setItem(newChangeItem)
  }

  function setChange() {
    let newItem = [...cards]
    newItem.forEach((element,index)=>{
      if(item.id === element.id) {
        newItem[index] = item;
      }
    })
    console.log(newItem);
    setShowModal(showModal = !showModal);
    setCards(newItem);
  }


  function cancel() {
    setShowModal(showModal = !showModal);
  }

  function sort() {
    let newSort = [...cards];
    let names = newSort.map(item => item.name).sort();
    let newArr = [];

      names.forEach((element)=>{
        for (const iterator of newSort) {

            if (iterator.name === element) {
              newArr.push(iterator)
            }
        }
      })
    setCards(newArr)
  }
  
  return (
    <Fragment>
      <div>
        <button onClick={()=>{sort()}}>sort by name</button>
      </div>
      <ModalWindow
        name={item?.name}
        count={item?.productCount}
        width={item?.width}
        height={item?.height}
        weight={item?.weight}
        color={item?.color}
        show={showModal}
        changeValue={(input,value)=>{changeValue(input,value)}}
        confirm={()=>{setChange()}}
        cancel={()=>{cancel()}}
      />
      <div className="card__wrap">
   
      {cards?.map((card)=>{
        return (
          <Card
            key={card.id}
            src={card.src}
            name={card.name}
            description={card.description}
            width={card.width}
            height={card.height}
            weight={card.weight}
            color={card.color}
            count={card.count}
            delete={()=>{deleteCard(card.id)}}
            comments={card.coments}
            writeComment={(comment)=>{writeComment(comment,card.id)}}
            addComment={()=>{addComment(card.productId)}}
            deleteComment={(description)=>{deleteComment(description,card.productId)}}
            edit={()=>{edit(card.id)}}
          />
        )
      })}
      </div>

    </Fragment>
  );
}

export default App;
