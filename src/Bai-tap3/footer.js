import React from "react";

export default function Footer() {
    return (
        <div className="footer-3">
            <h1 className="text-center text-black pt-3 pb-3">PROMOTION</h1>
            <div className="container bg-light pt-5 pb-5">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 ">
                        <div className="container promotion">
                            <img src="./img/promotion_1.png" alt style={{ Width: '100%' }} />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 ">
                        <div className="container promotion">
                            <img src="./img/promotion_2.png" alt style={{ Width: '100%' }} />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 ">
                        <div className="container promotion">
                            <img src="./img/promotion_3.jpg" alt style={{ maxWidth: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}