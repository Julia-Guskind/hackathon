import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './bikemap.css';

var api_key = process.env.API_KEY;

/*
{posts.map(({ node }) => { // map each node (blog post) to a carousel item
                      return (
                        <Carousel.Item interval={1000}>
                          <CarPrev article={node} year={node.year} month={node.month} category={node.category} />
                        </Carousel.Item>
                      )
                      })}
*/                  


var positions = [
    {
        title: "Mark Lane",
        position: {lat: 41.00715950694786, lng: -74.01531569542482},
        desc: "1 Doc, 2 Bikes"
    },
    {
        title: "Student Union",
        position: {lat: 41.806631978516585, lng: -72.25433161638307},
        desc: "2 Docks, 8 Bikes"
    }, 
    {
        title: "Storrs Center",
        position: {lat: 41.804711184673, lng: -72.24386138699168},
        desc: "2 Docks, 4 Bikes"
    },
    {
        title: "Alumni",
        position: {lat: 41.803562190259186, lng: -72.25052307789241},
        desc: "4 Docks, 4 Bikes"
    },
    {
        title: "Buckley",
        position: {lat: 41.80563110395002, lng: -72.24407765278049},
        desc: "2 Docks, 8 Bikes"
    },
    {
        title: "Gampel Pavilion",
        position: {lat: 41.80470437070955, lng: -72.25444385787391},
        desc: "1 Dock, 8 Bikes"
    },
    {
        title: "Price Chopper",
        position: {lat: 41.80209345480708, lng: -72.24157369208136},
        desc: "1 Dock, 8 Bikes"
    },
    {

    }

]

//console.log(positions)

export class BikeMap extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    markerClick = (props, marker, e) => 
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    

    windowClose = props => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      };

    render () {
        return (
            <div id="bikemap">
                <Map   
                    google={this.props.google}
                    initialCenter= {
                        {
                            lat: 41.807369920899326,
                            lng: -72.25205016406068
                        }
                        
                    }
                    style={{padding: "10px", margin:"auto", width:"75%", height:"85%"}}
                    zoom = {16}
                    draggable={false}
                > 
                
                    
                {positions.map(( pos ) => {
                    return (
                            <Marker title={pos.title} position={pos.position} onClick={this.markerClick} desc={pos.desc}/>
                        )
                })}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.windowClose}>
                        <div>
                            <h4>{this.state.selectedPlace.title}</h4>
                            <p>{this.state.selectedPlace.desc}</p>
                        </div>
                </InfoWindow>
                
                </Map>
            </div>
        )
    }
}



export default GoogleApiWrapper({
    //apiKey: api_key
    apiKey: '',
    mapId: "66da3e7e48e0defc"
})(BikeMap);


/*

 onClick={this.markerClick}

            {positions.map(({ pos }) => {
                return (<Marker title={pos.title} position={pos.position} name={pos.name} onClick={this.markerClick} />)
            })}
        */

/* <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'SOMA'}
                position={{lat: 37.778519, lng: -122.405640}}
                onClick={this.showWindow()} />
            <Marker name={'Current location'} /> 
            
            
junk = () => {
      var points = [
        { lat: 41.817105407795225, lng: -72.27836719205878 },
        { lat: 41.81777102354169, lng: -72.22817404292542 },
        { lat: 41.79608741093619, lng: -72.27706579368268 },
        { lat: 41.796924458460644, lng: -72.22888853615152 }
        ]
    
        var bounds = new this.props.google.maps.LatLngBounds();
        
        for (var i = 0; i < points.length; i++) {
        bounds.extend(points[i]);
        }  

        return bounds
    }*/