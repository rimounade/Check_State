
import React from 'react';
import './App.css';
import Person from './Component/Person';
import { Container,Navbar } from 'react-bootstrap';
/*class app*/
class App extends React.Component{
state={
        show : false,
        person : {
          fullName:"Cristiano Ronaldo",
          bio:'Cristiano Ronaldo is a professional soccer player who has set records while playing for the Manchester United, Real Madrid and Juventus clubs, as well as the Portuguese national team.',
          imgSrc:"https://upload.wikimedia.org/wikipedia/commons/2/23/Cristiano_Ronaldo_WC2022_-_01.jpg",
          profession:'Footballer'
        }
       
    }
    


  render(){
    return(
      <div>
         <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">***Cristiano Ronaldo***</Navbar.Brand>
        </Container>
      </Navbar>
    </Container> 
        
        {/* button Show changement de valeur boutton */}
        <button className='btn' onClick={()=>this.setState({show: !this.state.show})}>{this.state.show?"Hide":"Show"}</button>
       {/* condition  */}
        {
          this.state.show && <Person person={this.state.person}/> //passer objet person props du pere au child
        }
        {/* <h3>{setInterval(greet, 1000)}</h3> */}
      </div>)
  }
}

export default App;