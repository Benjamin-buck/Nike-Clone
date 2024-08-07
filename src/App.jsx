import CustomerReviews from './sections/CustomerReviews';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import PopularProducts from './sections/PopularProducts';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';
import Nav from './components/Nav';

const App = () => {
  return (
    <main className="relative">
      <Nav />

      {/* HERO SECTION */}
      <section className="xl:padding-l wide:padding-r padding:b">
        <Hero />
      </section>


      {/* POPULAR PRODUCTS SECTION */}
      <section className="padding">
        <PopularProducts />
      </section>


      {/* SUPER QUALITY SECTION */}
      <section className="padding">
        <SuperQuality />
      </section>


      {/* SERVICES SECTION */}
      <section className="padding-x py-10">
        <Services />
      </section>


      {/* SPECIAL OFFER SECTION */}
      <section className="padding">
        <SpecialOffer />
      </section>

      
      {/* CUSTOMER REVIEWS SECTION */}
      <section className="padding bg-pale-blue">
        <CustomerReviews/>
      </section>


      {/* SUBSCRIBE SECTION */}
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>


      {/* FOOTER SECTION */}
      <section className="padding-x padding-t bg-black pb-8">
        <Footer></Footer>
      </section>
    </main>
  )
}

export default App