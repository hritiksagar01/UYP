import React from 'react';
import '../styles/Photos.css';

const photos = [
  { id: 1, src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/51e62f3c74356a7501d06feba42ac643133257d7-616x822.png?auto=format&fit=fill&q=80&w=616', alt: 'Mountain Scenery 1' },
  { id: 2, src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/47387e354c34d51b84066bc47af3c5755b92b9c5-616x822.png?auto=format&fit=fill&q=80&w=616', alt: 'City Scenery 2' },
  { id: 3, src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/58a180961a14beb631877921e647c233804853c1-616x822.png?auto=format&fit=fill&q=80&w=616', alt: 'Mountain Scenery 3' },
  { id: 4, src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/152244f121e61ca32bdd2bea9fc5370e315664fb-616x822.png?auto=format&fit=fill&q=80&w=616', alt: 'City Scenery 4' },
  { id: 5, src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7cb513c9b3eae3286449776e85753138436d553c-616x822.png?auto=format&fit=fill&q=80&w=616', alt: 'Tokyo City 5' },
  { id: 6, src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/820d36d431fff77b1e1ece39ad6f007746bd31f6-616x822.png?auto=format&fit=fill&q=80&w=616', alt: 'Mountain and River 6' },
  { id: 7, src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?auto=format&fit=fill&q=80&w=616', alt: 'Tokyo Skyline 7' },
  { id: 8, src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/370e4b820670ef0bac7e685f6e8c5e64d19f1890-587x900.png?auto=format&fit=fill&q=80&w=587', alt: 'Mountain Valley 8' },
  { id: 9, src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9f02060077f9d61dbe89555a339e6231006d9b7b-616x822.png?auto=format&fit=fill&q=80&w=616', alt: 'City Night Scenery 9' },
  { id: 10, src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0f5b668b77499c0051201389d6ac5e7343c9727f-616x822.png?auto=format&fit=fill&q=80&w=616', alt: 'Tokyo Tower 10' },
  { id: 11, src: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fe52e0efac73ec782b19a54e98a4658b03677407-616x822.png?auto=format&fit=fill&q=80&w=616', alt: 'Mountain Sunset 11' },
];

const Photos = () => {
  return (
    <div className="gallery">
      {photos.map(photo => (
        <div key={photo.id} className="photo">
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
