
import React ,{useState} from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Caruseldatalist} from './Data/Caruseldata'
export default function Carusel2() {
    const [index,setindex] = useState(0)
    function  handelselect(e){
        
        setindex(e)
    }
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handelselect}>
            {Caruseldatalist.map((item)=>{return(
                    <Carousel.Item>
                    <img
                        className={item.classname}
                        src={item.src}
                        alt={item.alt}
                    />
                    <Carousel.Caption>
                        <h3>{item.label}</h3>
                        <p>{item.des}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
            )})}
            </Carousel>
        </div>
    )
}
