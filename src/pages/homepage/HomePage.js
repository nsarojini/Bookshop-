import React from "react";
import Showcase from "../../components/layouts/showcase/Showcase";
// import ProductListing  from "../../components/layouts/productlisting/ProductListing ";
import ProductListing from "../../components/layouts/product-listing/ProductListing";
import Footer from '../../components/layouts/footer/Footer';

const HomePage = () => {
    return (
        <section>
       <Showcase />
       <ProductListing />
       <Footer />
        {/* <Navbar />  */}
       </section>
    )
}

export default HomePage;