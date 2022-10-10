import React from 'react';
import { useNavigate } from 'react-router-dom';

function Intro() {
  const navigate = useNavigate ();

  const handleIntro = () => {
    navigate("/albums")
  }
  return (
    <React.Fragment>
      <div className="intro">
        <h1>Welcome!</h1>
        <p>My name is Cecilio Guzman aka CC. I’m the one behind the lense of SKANKb0i and my micro shop Drag Da Queen.
          I’ve been in “scene” since i was about 16 years old and started my journey with a digital rite aid camera. 
          My growth didn’t really hit until 2015 with film and I’ve been shooting since with both DSLR and any film camera. 
          My recognition came with using double exposures, slide film and my favorite, the mixing of two. 
          My work has been shared throughout social media and published in several magazine, zines, record inserts or covers ect…. 
          I’ve also turned a lot of my photography into oversized mixed media prints and more. 
          Its been hella fun and I enjoy everything I get out of my photography.  
          Capturing the intensity of a hard hitting band, the glamour of a Hyena out in the town,
          the monstrous exaggeration of a Queen or Club Kid, down to the culture and things in my lovely city of Portland is what keeps me shooting.  
          Enjoy, much love -CC</p>
        <button onClick={handleIntro}>Enter!</button>
      </div>
    </React.Fragment>
  )
}

export default Intro;