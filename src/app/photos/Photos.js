import React, { Component } from 'react';

import Gallery from 'react-grid-gallery';
import './Photos.css'

const IMAGES =
[{
        src: "photos/IMG_3388.jpg",
        thumbnail: "photos/IMG_3388.jpg",
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "photos/IMG_3414.jpg",
        thumbnail: "photos/IMG_3414.jpg",
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "photos/IMG_3470.jpg",
        thumbnail: "photos/IMG_3470.jpg",
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "photos/IMG_4873.jpg",
        thumbnail: "photos/IMG_4873.jpg",
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "photos/IMG_5023.heic",
        thumbnail: "photos/IMG_5023.heic",
}]

class Photos extends Component {
  render(){

    return (
      <div className="gallery">
        <Gallery margin={5} enableImageSelection={false} images={IMAGES}/>
      </div>
    );
  }
}

export default Photos;