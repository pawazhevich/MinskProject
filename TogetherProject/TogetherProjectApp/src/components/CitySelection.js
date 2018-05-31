import React,{Component} from 'react'

class CitySelection extends Component{
    state={
        country:this.props.city,


}
componentWillReceiveProps(nextProps){
        this.state.country=nextProps.city
}

    render() {
        const {variable,funcSetCity} = this.props
        if (this.state.country === "Belarus")
            return (
                <div>
                    <select onChange={event=>{funcSetCity(event.target.value)}}>
                        <option>Minsk</option>
                        <option>Mogilev</option>
                        <option>Gomel</option>
                        <option>Brest</option>
                        <option>Vitebsk</option>
                        <option>Grodno</option>
                    </select>
                </div>
            )

        if (this.state.country === "Ukraine")

            return (
                <div>
                    <select onChange={event=>{funcSetCity(event.target.value)}}>
                        <option>Kiev</option>
                        <option>L'vov</option>
                        <option>Lugansk</option>
                        <option>Bukovel</option>
                       <option>Donbas</option>
                    </select>
                </div>
            )
        if (this.state.country=== "Russia")
            return (
                <div>
                    <select onChange={event=>{funcSetCity(event.target.value)}}>
                        <option>Moscow</option>
                        <option>SPB</option>
                        <option>Novosibirsk</option>
                        <option>Krasnoyarsk</option>
                        <option>Samara</option>
                        <option>Perm</option>
                    </select>
                </div>
            )
        if (this.state.country === "Poland")
            return (
                <div>
                    <select onChange={event=>{funcSetCity(event.target.value)}}>
                        <option>Warsaw</option>
                        <option>Krakow</option>
                        <option>Gdansk</option>
                        <option>Belostok</option>
                    </select>
                </div>
            )

    }

}
export default CitySelection