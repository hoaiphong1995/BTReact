import React from "react";
import Carousel from "./carousel";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import Listcard from "./listcard";
import Whatwedo from "./whatwedo";
export default function Baitap2() {
    return (
        <div>
            <h1>Baitap 2</h1>
            <Header />
            <Carousel />
            <div className="container">
                <div className="row">
                    < Whatwedo />
                    < Contact />
                </div>
                <Listcard />
            </div>
            <Footer />
        </div>
    )
}