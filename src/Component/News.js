import PropTypes from 'prop-types'
import { Component } from 'react'
import Naya from './Naya'
import App from '../App'





export class News extends Component {
   static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
    
   }




   static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string,
   }
  constructor() {
    super();
     
    this.state = {
      articles: [],
      loading:false,
      page:1    
      

    }
  }
  async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=ab736851528d409793eb3db0f1230abe&page=1";
    this.setState({loading:true});
    let data= await fetch(url)
    let parsedData= await data.json()
    
    this.setState({articles:parsedData.articles, loading:false})

  }

  handlePrevClick= async ()=>{
    console.log("Next");

    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=ab736851528d409793eb3db0f1230abe&page=1";
    this.setState({loading:true});
    let data= await fetch(url)
    let parsedData= await data.json()
    this.setState({loading:false})
    this.setState({articles:parsedData.articles})
  }





  
  handleNextClick= async ()=>{
    console.log("Next");
    
    let url ='https://newsapi.org/v2/top-headlines?country=in&apiKey=ab736851528d409793eb3db0f1230abe&page=2';
    this.setState({loading:true});
    
    let data= await fetch(url);
    let parsedData= await data.json()
    
    
    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles,
      loading:false
    })
  }

  render() {
 
    return (
      

      <div className="container mx-5 ">
        
        <br/>
        <h1 className="text-center color:white my-3" style={{margin:'40px 0px'}}> <center>Top Headlines</center></h1>
        {/* <Spinner/> */}

        <br/>
        
        <div className="row">
          {this.state.articles.map((element) => {

            return <div className="col-md-3 mx-auto  ">
              <Naya key={element.url} title={element.title?element.title.slice(0,45):""}  description= {element.description?element.description.slice(0,88):"" } imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
           
          })}
      </div>

      <div className="container d-flex justify-content-between my-3">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark"  onClick={this.handlePrevClick}> &larr; Previous</button>
      <button disabled={this.state.page===2} type="button" className="btn btn-dark"  onClick={this.handleNextClick}>Next &rarr;</button>
      </div>

      </div>

    )
  }
}

export default News