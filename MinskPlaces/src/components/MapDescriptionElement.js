import faker from 'faker'
import React, { Component } from 'react';

class MapElementDescription extends Component{
    state={
        num: this.props.num,
    }
    render(){
        this.imgStyle={
            "width":"50px",
            "height":"50px",

        }

        return(
            <div class="describeElement">
                {this.state.num}) Place:{faker.address.streetName()} <br/>
                Visit: {faker.company.companyName()} <br/>
                Time: {faker.random.number(24)}:{faker.random.number(60)} --{faker.random.number(24)}:{faker.random.number(60)} <br/>
                <img src={faker.image.avatar()} style={this.imgStyle}/>        <img src={faker.image.avatar()} style={this.imgStyle}/>
                <img src={faker.image.avatar()} style={this.imgStyle}/>          <br/>          {faker.lorem.words()}


            </div>
        )
    }
}
export default MapElementDescription