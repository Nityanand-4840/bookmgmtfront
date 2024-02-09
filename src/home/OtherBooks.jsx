import React, { useEffect, useState } from 'react'
import Bookcards from '../components/Bookcards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('https://bookmgmtback.onrender.com/all-books').then(res => res.json()).then(data => setBooks(data.slice(0,6)))

    }, [])
  return (
    <div>
        <Bookcards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks