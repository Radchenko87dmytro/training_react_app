
import './App.css';
import Articles from './components/Articles/Articles';
import Header from './components/Header/Header';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import About from './About';
 

const App=()=> {
  return (
    <div>
      
      {/* <About />*/}
      <Header/>
      <Articles/> 
    
    
      {/*<BrowserRouter> 
      
        <Switch>
          <Route path='/' exact={true}>
            <Articles/>
          </Route>  
            
          
          <Route path="/about">
            <About />
          </Route>
        </Switch>
       </BrowserRouter>*/} {/* */}

  </div>
  )
}

export default App;
