import React, { useState,useEffect } from 'react'
import NewsCard from './NewsDisplay'
import Footer from './Footer'
import './News.css'

function App() {

    const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=02b7dcd4625742ee99f8a9082b85326f"

    const [data, setData] = useState([]);

    const fetchData = async () => {
      const res = await fetch(url)
      const result = await res.json()
      return result.articles
    };

    useEffect(() => {
      const getNews = async () => {
        const newsFromServer = await fetchData()
        setData(newsFromServer);
      }
  
      getNews();


    }, [])

  if(data)
  {
    console.log(data)

    return (
      <div >
      <div className="Content__wrapper">
        <h1><b>Welcome to News App</b></h1>
      </div>
      <div className="container-fluid">
        <div className="row">
        {data.map((news) => {
          return(
            <div kay={news.url}  className="col-sm-3">
              <NewsCard news={news} />
            </div>
          )
        })}
        </div>
      </div>
      <div className="Content__wrapper">
        <Footer/>
      </div>
      </div>
    );
  }
  else
  {
    return (
      <div className="App">
        <h1>Data Not received</h1>
      </div>
    );
  }
  
}

export default App;
