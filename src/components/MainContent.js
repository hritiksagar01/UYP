import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useInView } from 'react-intersection-observer'; 
import '../styles/MainContent.css';

function MainContent() {
  const navigate = useNavigate();
  
  // State to manage mute/unmute for each video
  const [isMuted, setIsMuted] = useState({
    firstVideo: true,
    secondVideo: true,
    thirdVideo: true,
  });

  // Refs for each video element to control play/pause
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const thirdVideoRef = useRef(null);

  // Intersection Observer for each section
  const { ref: firstSectionRef, inView: isFirstSectionVisible } = useInView({
    threshold: 0.5,
  });
  
  const { ref: secondSectionRef, inView: isSecondSectionVisible } = useInView({
    threshold: 0.5,
  });
  
  const { ref: thirdSectionRef, inView: isThirdSectionVisible } = useInView({
    threshold: 0.5,
  });

  // Function to toggle mute/unmute for each video
  const handleMuteToggle = (videoKey) => {
    setIsMuted((prevState) => ({
      ...prevState,
      [videoKey]: !prevState[videoKey],
    }));
  };

  // Play or pause videos based on the section in view
  useEffect(() => {
    const playVideo = (videoRef) => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {
          console.log("Error playing video");
        });
      }
    };

    const pauseVideo = (videoRef) => {
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    };

    if (isFirstSectionVisible) {
      playVideo(firstVideoRef);
      pauseVideo(secondVideoRef);
      pauseVideo(thirdVideoRef);
    } else if (isSecondSectionVisible) {
      pauseVideo(firstVideoRef);
      playVideo(secondVideoRef);
      pauseVideo(thirdVideoRef);
    } else if (isThirdSectionVisible) {
      pauseVideo(firstVideoRef);
      pauseVideo(secondVideoRef);
      playVideo(thirdVideoRef);
    }
  }, [isFirstSectionVisible, isSecondSectionVisible, isThirdSectionVisible]);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div>
      {/* Video Background Section */}
      <div className="main-content">
        <video
          src="https://videos.pexels.com/video-files/20794145/20794145-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          className="background-video"
        ></video>
        <div className="overlay-content">
          <h1>United Youth Parliament <span className="red">3.0</span></h1>
          <p>
            <span className="white">
              Platform where students, dressed as politicians, engage in debates and discussions, simulating real-world political scenarios.
            </span>
          </p>
          <button className="cta-button" onClick={handleRegisterClick}>
            Register Now
          </button>
        </div>
      </div>


      {/* Latest News Section */}
      <div className="latest-news-section">
        <h2 className="section-title">The Latest</h2>
        <div className="news-cards-container">
          {/* Card 1 */}
          <div className="news-card">
            <img 
              src="https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200" 
              alt="News 1" 
              className="news-image" 
            />
            <div className="news-content">
              <p className="news-category">DEV | 9/20/2024</p>
              <h3 className="news-title">Player Behavior, Balance, and Anti-Cheat // Dev Updates</h3>
              <p className="news-description">Our final Dev Update before we roll into 2025.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="news-card">
            <img 
              src="https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200" 
              alt="News 2" 
              className="news-image" 
            />
            <div className="news-content">
              <p className="news-category">GAME UPDATES | 9/20/2024</p>
              <h3 className="news-title">Vanguard x VALORANT</h3>
              <p className="news-description">How the anti-cheat team continues to evolve as cheaters do.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="news-card">
            <img 
              src="https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200" 
              alt="News 3" 
              className="news-image" 
            />
            <div className="news-content">
              <p className="news-category">COMMUNITY | 9/13/2024</p>
              <h3 className="news-title">Community Roundup: August 2024 - Vyse Edition</h3>
              <p className="news-description">"I have the vision, I am the means." See the community's take on Vyse.</p>
            </div>
          </div>
        </div>

        <div className="news-button-container">
          <a href="#" className="news-button">Go to News Page</a>
        </div>
      </div>


      {/* Valorant Section with Video */}
      <div className="new-section valorant-section" ref={firstSectionRef}>
        <div className="valorant-content">
          <h2>We Are United Youth Parliament</h2>
          <p>
            Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities.
          </p>
        </div>
        <div className="valorant-video">
          <video
            ref={firstVideoRef}
            src="https://videosforuyp1.s3.ap-south-1.amazonaws.com/Sequence+01_2.mp4"
            loop
            muted={isMuted.firstVideo}
            className="valorant-background-video"
          ></video>
          <button className="mute-button" onClick={() => handleMuteToggle('firstVideo')}>
            {isMuted.firstVideo ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </div>

      {/* Defy the Limits Section */}
      <div className="new-section valorant-section" ref={secondSectionRef}>
        <div className="valorant-content">
          <h2>Defy the Limits</h2>
          <p>
            Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush. Play fast and think faster to survive.
          </p>
        </div>
        <div className="valorant-video">
          <video
            ref={secondVideoRef}
            src="https://videosforuyp1.s3.ap-south-1.amazonaws.com/1700639054923524.MP4"
            loop
            muted={isMuted.secondVideo}
            className="valorant-background-video"
          ></video>
          <button className="mute-button" onClick={() => handleMuteToggle('secondVideo')}>
            {isMuted.secondVideo ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </div>

      {/* Join the Fight Section */}
      <div className="new-section valorant-section" ref={thirdSectionRef}>
        <div className="valorant-content">
          <h2>Join the Fight</h2>
          <p>
            Experience the intensity of battle, whether you’re fighting alone or with a team. Valorant offers unique characters, abilities, and styles for every player.
          </p>
        </div>
        <div className="valorant-video">
          <video
            ref={thirdVideoRef}
            src="https://videosforuyp1.s3.ap-south-1.amazonaws.com/1700642024611536.MP4"
            loop
            muted={isMuted.thirdVideo}
            className="valorant-background-video"
          ></video>
          <button className="mute-button" onClick={() => handleMuteToggle('thirdVideo')}>
            {isMuted.thirdVideo ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
