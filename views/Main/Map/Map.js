import React, { PropTypes as T } from 'react'
import classnames from 'classnames'
import Map, { Marker } from 'google-maps-react'

import styles from './styles.module.css'

export class MapComponent extends React.Component {
  renderMarkers() {
    return this.props.places.map(place =>{
      return <Marker key={place.id}
                name={place.id}
                place={place}
                onClick={this.props.onMarkerClick.bind(this)}
                position={place.geometry.location}
              />
    })
  }

  render() {
    const {children} = this.props;

    return (
      <Map google={this.props.google}
            className={styles.map}
            >
      </Map>
    )
  }
}

export default MapComponent