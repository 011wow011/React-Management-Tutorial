import React, { Component } from 'react'
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '강동호',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '강호동',
  'birthday': '950101',
  'gender': '남자',
  'job': '프로그래머'
},

{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '동강호',
  'birthday': '900514',
  'gender': '남자',
  'job': '디자이너'
},
]

class App extends Component {
  render () {
    return (
      <div>
      { customers.map(c => { return <Customer id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> }) }

      {/* <Customer
        id={customer[0].id}
        image={customer[0].image}
        name={customer[0].name}
        birthday={customer[0].birthday}
        gender={customer[0].gender}
        job={customer[0].job}
      />

      <Customer
        id={customer[1].id}
        image={customer[1].image}
        name={customer[1].name}
        birthday={customer[1].birthday}
        gender={customer[1].gender}
        job={customer[1].job}
      />

      <Customer
        id={customer[2].id}
        image={customer[2].image}
        name={customer[2].name}
        birthday={customer[2].birthday}
        gender={customer[2].gender}
        job={customer[2].job}
      /> */}
     </div>
    );
  }
}

export default App;
