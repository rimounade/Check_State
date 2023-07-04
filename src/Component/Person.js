import React from "react"
class Person extends React.Component{
    constructor(props){ //ne9bel state
        super(props)
        this.state={
          count : 0
        }
        
}
componentDidMount = ()=>{
    setInterval( () => this.setState({count : this.state.count + 1}), 1000);
}
render(){
    return(
        // affichage de l'objet person
        <div className="comp">
            <h2 className="App">{this.state.count}</h2>
            <div className="person">
                <div className="biblio">
            <h1>{this.props.person.fullName}</h1>
            
            <p>{this.props.person.bio}</p>
            <h4>{this.props.person.profession}</h4> 
            </div>
            <img src={this.props.person.imgSrc} alt="not found"/> 
            </div>        
        </div>
    )
}
}
export default Person