
import './App.css'
import Card from './component/Card'

function App() {
  const respone=[
    { img:'https://thumbs.dreamstime.com/b/portrait-funny-longhair-cat-licking-lips-square-image-isolated-black-background-portrait-funny-longhair-cat-licking-lips-295945153.jpg',
      name:'cat',
      p1:'The cat is a very adorable animal',
      p2:'Cats can be kept as pets in our houses as well.'
    },//0

    { img:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1Zo9USSzvn7sWI0jPPH7j4mfetlETM6pC8RvGZpRrhSzEoKnX',
      name:'rabbit',
      p1:' Rabbits are small mammals with fluffy',
      p2:' with long ears, short fluffy tails, and strong'},//1

      { img:'https://media.wired.com/photos/61fa9154844ec857b713851b/1:1/w_1800,h_1800,c_limit/Science_GettyImages-924600910.jpg',
      name:'Monkey',
      p1:'Monkeys. are clever, social animals.',
      p2:'known for running and leaping through trees with ease.'}//2
  ];
  return (
    <>
    <h1><b>All Animal</b></h1>
    <Card img={respone[0].img} name={respone[0].name} p1={respone[0].p1} p2={respone[0].p2}></Card>
    <Card img={respone[1].img} name={respone[1].name} p1={respone[1].p1} p2={respone[1].p2}></Card>
    <Card img={respone[2].img} name={respone[2].name} p1={respone[2].p1} p2={respone[2].p2}></Card>
    
    </>
  )
}

export default App
