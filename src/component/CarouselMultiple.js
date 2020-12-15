import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

export default function CarouselMultiple() {
    return (
        <div className='col-lg-12 p-0'>
            <OwlCarousel
                items='5'
                autoplay
                loop
                mouseDrag
                rewind
                dots={false}
            >
                <div className='item'>
                    <img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/119905732_3434582336563744_240351001628816415_o.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Sb-WPgfuY7oAX_3-Z2Y&_nc_ht=scontent-cdg2-1.xx&oh=95e0a6811a14516f082b779e10ea7aa4&oe=5FD5D386" className="img-fluid mx-auto d-block" alt="img1"/>
                </div>
                <div className='item'>
                    <img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/121156096_3498327016855942_472037261150964494_o.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Qy5klyKJUIcAX__TOoD&_nc_ht=scontent-cdg2-1.xx&oh=f5839e2e50f4421b55fdeb10099c6fae&oe=5FD77F4C" className="img-fluid mx-auto d-block" alt="img2"/>
                </div>
                <div className='item'>
                    <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/119788320_3431925866829391_5265550897053528910_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=dwRMQUi8LpwAX8Vnw8A&_nc_ht=scontent-cdt1-1.xx&oh=b165d803367315d512f23d88ed557832&oe=5FD7CEBF" className="img-fluid mx-auto d-block" alt="img3"/>
                </div>
                <div className='item'>
                    <img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/119858227_3431925733496071_597237782315092602_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8024bb&_nc_ohc=qgnf70BaCegAX-Sc67f&_nc_ht=scontent-cdg2-1.xx&oh=231035f16e1b676687dbb03dcf2171f6&oe=5FD77C14" className="img-fluid mx-auto d-block" alt="img4"/>
                </div>
                <div className='item'>
                    <img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/p720x720/121163593_3520027988019178_3035928325917747581_o.jpg?_nc_cat=108&ccb=2&_nc_sid=110474&_nc_ohc=y1tYZnK203cAX_j9SQq&_nc_ht=scontent-cdg2-1.xx&tp=6&oh=1b95d8d11bfe34b459439bcd7fdfa96a&oe=5FD80DE4" className="img-fluid mx-auto d-block" alt="img5"/>
                </div>
                <div className='item'>
                    <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/121659446_3520028161352494_8364909459432021731_o.jpg?_nc_cat=101&ccb=2&_nc_sid=110474&_nc_ohc=9sg0Qw13AwkAX8uCqxb&_nc_ht=scontent-cdt1-1.xx&oh=f3f1a079b41d8bb1ded554301c030575&oe=5FD72916" className="img-fluid mx-auto d-block" alt="img6"/>
                </div>
                <div className='item'>
                    <img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/121455613_3520028234685820_1994379909892243763_o.jpg?_nc_cat=108&ccb=2&_nc_sid=110474&_nc_ohc=Yg1v_TVpXugAX9Pc5BX&_nc_ht=scontent-cdg2-1.xx&oh=30850908be9b004cda0f95d8cda7d76e&oe=5FD7B9C7" className="img-fluid mx-auto d-block" alt="img7"/>
                </div>
                <div className='item'>
                    <img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/119858227_3431925733496071_597237782315092602_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8024bb&_nc_ohc=qgnf70BaCegAX-Sc67f&_nc_ht=scontent-cdg2-1.xx&oh=231035f16e1b676687dbb03dcf2171f6&oe=5FD77C14" className="img-fluid mx-auto d-block" alt="img4"/>
                </div>
                
            </OwlCarousel>
    </div>
    )
}
