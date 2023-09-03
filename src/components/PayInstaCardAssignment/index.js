// Write your code here

import Header from '../Header'
import Login from '../Login'
import TropicalAdventure from '../TropicalAdventure'
import OurDestinations from '../OurDestinations'
import StudentDiscountSection from '../StudentDiscountSection'
import BookNowSection from '../BookNowSection'
import Testimonials from '../Testimonials'
import EndSection from '../EndSection'

import './index.css'

const PayInstaCardAssignment = () => (
  <div className="app-container">
    <Header />
    <Login />
    <TropicalAdventure />
    <OurDestinations />
    <StudentDiscountSection />
    <BookNowSection />
    <Testimonials />
    <EndSection />
  </div>
)

export default PayInstaCardAssignment
