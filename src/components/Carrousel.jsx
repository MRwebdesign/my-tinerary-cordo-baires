import React, { useEffect, useState } from "react";
import BackToTop from "./BackToTopButton";

export default function Carrousel() {
  const [hotels, setHotels] = useState([]);
  const [cities, setCities] = useState([]);

  //Fetch de varios json (arrays) de hoteles y ciudades//
  useEffect(() => {
    const getDataHotels = () => {
      fetch("./data/dataHotels.json")
        .then((res) => res.json())
        .then((res) => setHotels(res));
    };
    const getDataCities = () => {
      fetch("./data/dataCity.json")
        .then((res) => res.json())
        .then((res) => {
            console.log(res); 
            setCities(res)});
    };
    getDataHotels();
    getDataCities();
    // eslint-disable-next-line
  }, []);

  let allPhotos = [];

  if(hotels.length > 0 && cities.length > 0) {
    // function getRandomImage(arr) {
    //     const length = arr.length;
    //     const randomIndex = Math.floor(length * Math.random())
    //     return arr[randomIndex]
    //   }
    cities.map((city) => ( allPhotos.push({photo:city.photo, name:city.name, id:city.id})));
    
    hotels.map((hotels) => (allPhotos.push({photo:hotels.photo, name:hotels.name, id:hotels.id})));
    // let resultadoHotels = getRandomImage(hotelss)
    // resultadoHotels.map(photo  => allPhotos.push(photo))
  }

 
  return (
    <div>
    {allPhotos.map((carrousel) => (
        // Modificar el formato por el de un carrousel
        <div key={carrousel.id} className="card-main">
            <img src={carrousel.photo} alt={carrousel.name} />
            <h2>{carrousel.name}</h2>
        </div>
    ))}
        <BackToTop/>
    </div>
  );
}
