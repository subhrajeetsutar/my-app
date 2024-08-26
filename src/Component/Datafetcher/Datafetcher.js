import React, {useEffect, useState} from 'react'

function Datafetcher() {
    const [data, setData] = useState(null);
    const dataapi = async ()=>{
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            setData(res.data);
            console.log(res.data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        dataapi();
    },[]);
  return (
    <div>
      <h1>Fetched datas are:</h1>
      {data?(
        <div>
{data}
        </div>
        
      ):
      (
        <div>
            <h1>No Data found</h1>
        </div>
      )}
    </div>
  )
}

export default Datafetcher
