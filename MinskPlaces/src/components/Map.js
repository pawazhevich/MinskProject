import React,{Component} from 'react'
import faker from 'faker'
import MapElementDescription from './MapDescriptionElement'

class Map extends Component{
    state={
        c1p1:faker.random.number(300)+100,
        c2p1:faker.random.number(300)+150,
        c1p2:faker.random.number(300)+100,
        c2p2:faker.random.number(300)+150,
        c1p3:faker.random.number(300)+100,
        c2p3:faker.random.number(300)+150,
        nmap:faker.random.number(2)+1
    }


    render(){
        this.point1={
            "width":"10px",
            "height":"10px",
            "background-color":"red",
            "border-radius":"10px",
            "position":"fixed",
            "top":this.state.c1p1,
            "left":this.state.c2p1,
            "font-size":"10px",
            "color":"white",
            "text-align":"center"
        }
        this.point2={
            "width":"10px",
            "height":"10px",
            "background-color":"red",
            "border-radius":"10px",
            "position":"fixed",
            "top":this.state.c1p2,
            "left":this.state.c2p2,
            "font-size":"10px",
            "color":"white",
            "text-align":"center"
        }
        this.point3={
            "width":"10px",
            "height":"10px",
            "background-color":"red",
            "border-radius":"10px",
            "position":"fixed",
            "top":this.state.c1p3,
            "left":this.state.c2p3,
            "font-size":"10px",
        "color":"white",
        "text-align":"center"}
        this.district=this.state.nmap===1?"Nemiga":this.state.nmap===2?"Kupalovskaja":"Vostok"
        return(
            <div>
                <div>
                    We took your survey results and made a route for you and your friends!
                    <div className="map">
                        <img src={"images/map"+this.state.nmap+".jpg"} style={{"position":"fixed"}}/>
                        <div style={this.point1}>1</div>
                        <div style={this.point2}>2</div>
                        <div style={this.point3}>3</div>

                    </div>


                    <div className="map_describe">
                        {this.district}
                        <br/>
                        Places to go:
                        <MapElementDescription num={1}/>
                        <MapElementDescription num={2}/>
                        <MapElementDescription num={3}/>
                        <div class="mapDescription">

                        </div>
                    </div>
                </div>
                <a href="/">
                    <button className="getResult"> Return to main</button>
                </a>
            </div>

        )}
}


export default Map