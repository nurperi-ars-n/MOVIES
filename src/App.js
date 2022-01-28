import React from "react"
import {MovieCard} from "./components/MovieCard"
import "./App.css"

const API_KEY = "207cfbe5";

export class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data:null,
      error:null,
      loading:false,
      q:"London",
    }
  }
    componentDidMount(){
      fetch(`http://www.omdbapi.com/?s=${this.state.q}&apikey=${API_KEY}`)
      .then((res)=>res)
      .then((res) => res.json())
      .then ((res) => {
        this.setState(() =>({data:res.Search}))
      })
    }

  search = (event) =>{
   if(event.key == "Enter"){
    fetch(`http://www.omdbapi.com/?s=${event.target.value}&apikey=${API_KEY}`)
    .then((res)=>res)
    .then((res) => res.json())
    .then ((res )=> {
      this.setState(() =>({data:res.Search}))
    })

   }
  }
  render() {
      return <div>
        <input type="text" onKeyPress={this.search} />
        <div className="container">
            {
              this.state.data !== null &&
               this.state.data.map((el,id) =>{
                return <MovieCard el={el} key={id}/>
              })
            }
        </div>

      </div>
  }


}
