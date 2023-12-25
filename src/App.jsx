import React, { useEffect } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Service from './pages/Service'
import { Route, Routes } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function App() {
	useEffect(() => {
		AOS.init({disable: "phone"});

		window.addEventListener("scroll",()=>{
			window.scrollY >= 150 ? document.querySelector(".navbar").classList.add("hardened-top") : document.querySelector(".navbar").classList.remove("hardened-top");
			window.scrollY > 300 ? document.querySelector(".back-to-top").classList.remove("d-none") : document.querySelector(".back-to-top").classList.add("d-none")
		})
	}, [])
	
	return (
		<div>
			<Navbar/>
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/about' element={ <About /> } />
				<Route path='/service' element={ <Service /> } />
				<Route path='/menu' element={ <Menu /> } />
				<Route path='/contact' element={ <Contact /> } />
			</Routes>
			{/* //   BACK TO TOP BUTTON 👇 */}
			<button 
				className="btn btn-lg btn-primary position-fixed bottom-0 end-0 m-5 d-none back-to-top"
				onClick={()=> {document.documentElement.scrollTop = 0; document.body.scrollTop = 0}}
			><i className="fas fa-long-arrow-alt-up"></i></button>
		</div>
	)
}
