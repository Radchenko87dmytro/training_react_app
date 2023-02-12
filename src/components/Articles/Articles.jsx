import React, {useState} from 'react'
import axios from "axios"
import styles from "./Articles.module.scss"

const Articles = () => {
  //const [city, setCity] = useState('mos')
  const [posts, setPosts] = useState([])
  const [loading, setLoading]  = useState(true)
  //console.log(city)

React.useEffect(()=>{
  //console.log('city change')
  setLoading(true)
 const fetchData = async()=>{
   try{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
    //const data = await response.json()
    
    console.log(data)
    setPosts(data)
    
   } catch (error) {
    console.log(error)
   }
   
   setLoading(false)
 }

 fetchData()
}, [])

  return (
    <div>
       <h1>Articles</h1>

        {loading && "Load..."}

      <div className={styles.wrapper}>
        {posts.map(post=>(      

        <div key={post.id} className={styles.card}>
            
          
            <img src="" alt="" />
            
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <a href="">Read now</a>
        </div>
         ))}
      </div>
         
    

        

       {/* <input 
        type="text" 
        value={posts} 
        onChange={(e)=>setCity(e.target.value)} 
        defaultValue="Mosco" 
        placeholder="Enter city"/> */}

       
    </div>
  ) 
}

export default Articles