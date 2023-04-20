
import './App.css';
import Card from './Card.jsx';
import Counter from './Counter.jsx'
import Sentence from './Sentence';




function App() {


let image1 = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/6428991/1.jpg?9138";
let image2 = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/5227302/1.jpg?0006";
let image3 = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/0430622/1.jpg?0265";
let image4 = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/1084132/1.jpg?4284";
let image5 = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/7883402/1.jpg?4641";

  let animals = ["Cat", 'Lion', 'Elephant', 'Tiger', 'Dog', 'Monkey', 'Gorilla', 'Isreal', 'Julianah', 'Anu']
  let fruits = ['Mango', 'Pear', 'Strawberry', 'Banana', 'Grape', 'Orange', 'Paw-paw', 'Water Melon', 'Apple', 'Cucumber']

  const princ = () => {
    alert("Welcome to React Event");

  }
  const name = () =>{

    console.log("Prince Ndukwe")
  }
  
  
  
  return (
    <>
      <h1>List of Animals - Array</h1>
       { animals.map((ani) => (
          <ul>

            <li>{ani}</li>

          </ul>
        )
        )
}
    <h1>List of Fruits</h1>
    {
      fruits.map((fri) => (
        <ul>
          <li>{fri}</li>
        </ul>
      ) )
    }
<div className='d-flex'>


<div>
  <Card pic={image1} title="Samsung Phone"/>
<Card pic={image2} title = "Techno Phone"/>
<Card pic={image3} title ="Infinix Phone"/>
</div>
<div>
<Card pic={image4} title ="Oppo Phone"/>
<Card pic={image5} title ="Redmi Phone"/>
</div>
</div>

    
<div>
<button>Button1</button>
<button onClick={princ} >Click</button>
<button onClick={name}>Name</button>

</div>

<div>


  <Counter />



</div>

<div>

  <Sentence />
</div>


</>
  );




}

export default App;
