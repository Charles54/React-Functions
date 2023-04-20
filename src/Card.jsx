import React from 'react'
import { FaOpencart } from "react-icons/fa";

const Card = (props) => {
    //let image1 = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/6428991/1.jpg?9138";
  return (
    <div>

<div class="card" style={{width: "18rem"}}>
  <img src={props.pic} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="google.com" class="btn btn-danger w-100 d-flex align-items-center justify-content-evenly"><FaOpencart/> Add to Cart</a>
  </div>
</div>



    </div>
  )
}

export default Card