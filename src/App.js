import './App.css';
import Header from './components/Header';
import CharacterTable from './components/CharacterTable'
import axios from 'axios'
import React , {useEffect,useState} from 'react'
import Search from './components/Search';

const hash = "6476ca8058868b8676fdce4b2543bbbb"

function App() {
  const[items,setItems] = useState([])
  const[isLoading,setLoading] = useState(true)
  const[query,setQuery] = useState('')

  useEffect(()=>{
      const fetch=async()=>{
        if(query===''){
          const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=42a6dfe79599e8cc6a159837d92f4226&hash=${hash}`)
          console.log(result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)
        }else{
          const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=42a6dfe79599e8cc6a159837d92f4226&hash=${hash}`)
          console.log(result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)
        }
      
    }

    fetch()
  },[query])

  return (
    <div className="container">
      <Header />
      <Search search={(q)=>setQuery(q)}></Search>
      <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
