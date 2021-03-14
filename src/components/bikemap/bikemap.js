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
        title: "Busby",
        position: {lat: 41.81457043835727, lng: -72.26209880238952},
        desc: "2 Docks, 8 Bikes"
        },
        {
        title: "The Oaks",
        position: {lat: 41.8038028178607, lng: -72.24308603361301},
        desc: "2 Docks, 4 Bikes"
        },
        {
        title: "East Campus",
        position: {lat: 41.80979525995882, lng: -72.24828689273855},
        desc: "2 Docks, 6 Bikes"
        },
        {
        title: "Chemistry Building",
        position: {lat: 41.81099666072222, lng: -72.25433211020145},
        desc: "2 Docks, 4 Bikes"
        },
        {
        title: "Horsebarn Hill",
        position: {lat: 41.818938092559556, lng: -72.25153414046248},
        desc: "1 Dock, 4 Bikes"
        },
        {
        title: "Library",
        position: {lat: 41.80712916509976, lng: -72.25211702044733},
        desc: "2 Docks, 4 Bikes"
        },
        {
        title: "Pharmacy Building",
        position: {lat: 41.80960912113906, lng: -72.25511473661709},
        desc: "1 Dock, 4 Bikes"
        },
        {
        title: "Visitor's Center",
        position: {lat: 41.80923877349376, lng: -72.259449230799},
        desc: "1 Dock, 6 Bikes"
        },
        {
        title: "Northwest",
        position: {lat: 41.81026547847618, lng: -72.25786561170207},
        desc: "4 Docks, 6 Bikes"
        },
        {
        title: "North",
        position: {lat: 41.81067512708672, lng: -72.25684765207649},
        desc: "4 Docks, 6 Bikes"
        },
        {
        title: "North Garage",
        position: {lat: 41.80874081049513, lng: -72.2577139427082},
        desc: "1 Dock, 4 Bikes"
        },
        {
        title: "South Garage",
        position: {lat: 41.80473585177548, lng: -72.2539106706296},
        desc: "1 Dock, 4 Bikes"
        },
        {
        title: "Werth",
        position: {lat: 41.80572609793178, lng: -72.25788381875874},
        desc: "2 Docks, 8 Bikes"
        },
        {
        title: "Towers",
        position: {lat: 41.81312241210706, lng: -72.25368832932693},
        desc: "4 Docks, 6 Bikes"
        },
        {
        title: "South",
        position: {lat: 41.8041086583651, lng: -72.24818415842763},
        desc: "4 Docks, 6 Bikes"
        },
        {
        title: "West",
        position: {lat: 41.80453084255839, lng: -72.25155161974885},
        desc: "4 Docks, 6 Bikes"
        },
        {
        title: "Great Lawn Area",
        position: {lat: 41.80747966542036, lng: -72.25449264393195},
        desc: "4 Docks, 2 Bikes"
        },
        {
        title: "Wilbur Cross",
        position: {lat: 41.80898524282561, lng: -72.25237774213352},
        desc: "1 Dock, 4 Bikes"
        },
        {
        title: "Rec Center",
        position: {lat: 41.80511140018628, lng: -72.25314019344005},
        desc: "2 Docks, 6 Bikes"
        },
        {
        title: "McMahon",
        position: {lat: 41.80387061440264, lng: -72.25236953045244},
        desc: "2 Docks, 8 Bikes"
        },
        {
        title: "Hilltop",
        position: {lat: 41.802960962235545, lng: -72.25927777660374},
        desc: "2 Docks, 8 Bikes"
        },
        {
        title: "Garrigus",
        position: {lat: 41.805159955472334, lng: -72.25806228090204},
        desc: "1 Dock, 10 Bikes"
        },
        {
        title: "Monteith",
        position: {lat: 41.80693903507954, lng: -72.24951619967361},
        desc: "1 Dock, 4 Bikes"
        },
        {
        title: "Charter Oaks",
        position: {lat: 41.816389222819176, lng: -72.2635228252054},
        desc: "4 Docks, 8 Bikes"
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
            <div> 
                <div className="label">Bike Map</div>
            <div id="bikemap">
                <Map   
                    google={this.props.google}
                    initialCenter= {
                        {
                            lat: 41.807369920899326,
                            lng: -72.25205016406068
                        }
                        
                    }
                    style={{position:"relative", 
                            borderStyle: "solid",
                            borderColor: "green",
                            borderWidth: "5px",
                            borderRadius: "25px",
                            margin:"auto", 
                            width:"75%", 
                            height:"80%"}}
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