import 'bootstrap-4-react'; import './main/main.css'; import React, { useState, useEffect } from 'react'; import Content from './content/content'; import Footer from './footer/footer'; import Menu from './menu/menu'; import Logo from './header/logo.svg'; import './header/style.css'; function App() { const [link, setLink] = useState("home"); const [open, setOpen] = useState(0); return ( <> <header> <ul> <li className="d-flex logo" onClick={() => setLink('home')}> <img src={Logo} style={{ marginRight: "10px", }} /> <h2>Gyber.org</h2> </li> <li> <ul className="d-flex space-between list"> {link == "home" ? <li>Home</li> : <li style={{color: "white"}} onClick={() => setLink('home')}>Home</li>} <li>Philosophy</li> <li>Lite Paper</li> </ul> </li> <li> {link == "home" ? <a onClick={() => setLink("sale")} className="rgbBtn">Private sale</a> : <a onClick={() => setLink("home")} className="rgbBtn">Home</a>} </li> <li> <div className="menu-btn"> <div className="stick"/> <div className="stick"/> <div className="stick"/> </div> </li> </ul><br/> <Menu link={link}/> </header> <main> <div className='container'> <Content name={link}/> </div> </main> <footer> <Footer/> </footer> </> ); function getWindowSize() { const {innerWidth, innerHeight} = window; return {innerWidth, innerHeight}; } } export default App;