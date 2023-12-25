import React from 'react'
import Header from '../components/Header'
import ServicesComp from '../components/ServicesComp'
import Information from '../components/Information'
import FoodMenu from '../components/FoodMenu'
import Reservation from '../components/Reservation'

export default function Home() {
	return (
		<div>
			<Header />
			<ServicesComp/>
			<Information/>
			<FoodMenu/>
			<Reservation/>
		</div>
	)
}
