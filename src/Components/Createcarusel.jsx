import React, { Component } from 'react'
import { Carousel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/index.less';
import { Caruseldatalist} from './Data/Caruseldata'

export default class Createcarusel extends Component {
    render() {
        return (
            <div>
                <Carousel className="custom-slider">


                    {Caruseldatalist.map((item)=>{return(

                    <img src={item.src}
                    height={item.height}></img>
                    




                    )})}
                    
                </Carousel>
            </div>
        )
    }
}
