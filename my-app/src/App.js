import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import {Navbar ,Feed,VideoDetail,ChannelDetail,SearchFeed} from "./components"
function App() {
  return (
 <Router>
  <div>
<Navbar/>
<Routes>

        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        <Route exact path='/' element={<Feed />} />

</Routes>

</div>
 </Router>
  );
}
//instalation ta3 roboto 
//fl app ykon browserrouter fih  nav wl routes 
//3 router ta3 var
//comp folder fih nav feed videodetailles channelid search 
export default App;
