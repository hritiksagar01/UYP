import React, { useState } from 'react';
import '../styles/Members.css';

function Members() {
  const photos = [
    {
      imageUrl: 'https://media.istockphoto.com/id/1296313099/photo/a-scene-of-a-general-hospital-premises-on-a-busy-morning-where-patients-are-seen-waiting-for.jpg?s=612x612&w=0&k=20&c=99jpmmKgJ8BF7JhrbENyMXh-7XnD9UWmK-NcCpg5XU0=',
      name: 'John Doe',
      post: 'Chairman',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1084862604/photo/young-businesswoman-in-eyeglasses-working-on-laptop-at-workplace-in-office.jpg?s=612x612&w=0&k=20&c=JfMBB2-Si5slvdjLMlGqd7DgywLLUJGeLTjcX0NTl24=',
      name: 'Jane Smith',
      post: 'Vice Chairwoman',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1282874956/photo/concentrated-fashion-woman-working-on-computer-in-her-office.jpg?s=612x612&w=0&k=20&c=zI5SEm7gxbM9bnjGf8GQF90PKJWR0PjUyRu-JnnGezQ=',
      name: 'Alex Johnson',
      post: 'Secretary',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1316573527/photo/shot-of-an-attractive-young-businesswoman-sitting-alone-at-her-desk-in-her-office.jpg?s=612x612&w=0&k=20&c=6EKkNKm3NjRQC_M-4nJC_I4mbYpwmTxxCIi8VzaVO7g=',
      name: 'Emily Davis',
      post: 'Treasurer',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1182122416/photo/young-business-woman-in-an-office.jpg?s=612x612&w=0&k=20&c=9Tst6IS7rOqv9TxJrCMEtOZp2OlLbz_9QeOCg8dkbJg=',
      name: 'Michael Lee',
      post: 'Coordinator',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1182122416/photo/young-business-woman-in-an-office.jpg?s=612x612&w=0&k=20&c=9Tst6IS7rOqv9TxJrCMEtOZp2OlLbz_9QeOCg8dkbJg=',
      name: 'Sophia Brown',
      post: 'Member',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  // Display 3 photos, wrapping around the array when necessary
  const getVisiblePhotos = () => {
    const visiblePhotos = [];
    for (let i = 0; i < 3; i++) {
      visiblePhotos.push(photos[(currentIndex + i) % photos.length]);
    }
    return visiblePhotos;
  };

  const visiblePhotos = getVisiblePhotos();

  return (
    <div className="photos-container">
      <div className="card">
        <div className="content-section">
          {/* Left Section: Text */}
          <div className="info-section">
            <h1>MEMBERS</h1>
            <p>UNITED YOUTH PARLIAMENT</p>

            {/* Forward and Previous Buttons */}
            <div className="carousel-arrow-container">
              <button className="carousel-arrow" onClick={handlePrev}>
                &#8249;
              </button>
              <button className="carousel-arrow" onClick={handleNext}>
                &#8250;
              </button>
            </div>
          </div>

          {/* Right Section: Carousel */}
          <div className="carousel-container">
            <div className="photo-gallery">
              {visiblePhotos.map((photo, index) => (
                <div key={index} className="photo-card">
                  <img
                    src={photo.imageUrl}
                    alt={`Image ${index + 1}`}
                    className="card-image"
                  />
                  <h3>{photo.name}</h3>
                  <p>{photo.post}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
