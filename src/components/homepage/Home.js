import React, { useRef, useContext, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {cycleImages} from './BackgroundImage';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = (props) => {
    const map = useRef(null);
    const executeScroll = () => scrollToRef(map);

    // useEffect(() => {
    //     cycleImages(document.getElementById("banner"), 6000);
    // });
    
    return (
        <div>
            <div id="banner">
                <div className="dark-overlay">
                    <div className="page-container">
                        <div className="banner-content">
                            <h1>Insert <span style={{ "color": "#ffd000" }}>Name</span></h1>
                            <h3>A sexy intro</h3>
                            <span className="banner-link" onClick={executeScroll}>See the map</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-container">                
                <HomeTopText />
            </div>
            
            <div ref={map} style={{"width":"100%"}}>
                <Container fluid>
                    Hello
                </Container>
            </div>
        </div>
    );
};

const HomeTopText = () => {
    return ( 
        <div className="home-text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem arcu, maximus vitae mi a, scelerisque sagittis felis. In bibendum vehicula ullamcorper. Proin eu est quis tellus vestibulum venenatis vel ac erat. Curabitur hendrerit, mauris at sollicitudin tincidunt, magna diam maximus velit, ac accumsan elit tortor vitae nulla. Aliquam ullamcorper dapibus ultrices. Praesent at scelerisque magna. Curabitur finibus metus risus, ut rhoncus quam tempus sed. Duis porta iaculis ex, eu suscipit tortor euismod eget. Ut ut risus justo. Curabitur rutrum pretium purus ut consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ac dapibus dolor, at feugiat diam. Maecenas pretium malesuada nisl, in placerat tortor rhoncus at. Morbi fringilla pellentesque auctor. Aliquam dui odio, rutrum vitae nunc eget, mattis sodales justo.
            </p>
        </div>
     );
}

export default Home;