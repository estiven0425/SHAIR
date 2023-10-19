import React from 'react'
import BannerImage from './img/banner.png';
import './Banner.css';

export default function Banner() {
  return (
    <div id='Banner'>
        <img src={BannerImage} alt="Banner SHAIR" />
    </div>
  )
}
