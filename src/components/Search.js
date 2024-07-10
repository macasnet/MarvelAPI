import React, {useState} from 'react'

const Search = ({search}) => {
    const[text,setText] = useState('')

    const onSearch=(q)=>{
        setText(q)
        search(q)
    }

  return (
    <section className='search'>
      <form>
        <input type='text'
        className='form-control'
        placeholder='Karakter araştır!'
        autoFocus
        onChange={(e) => onSearch(e.target.value)}
        value={text} />
      </form>
    </section>
  )
}

export default Search
