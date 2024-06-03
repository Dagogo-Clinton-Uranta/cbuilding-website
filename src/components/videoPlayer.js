import React, {useRef, useEffect} from "react"

export default function AutoPlaySilentVideo(props) {
    const videoRef = useRef(undefined);
   /* useEffect(() => {
        videoRef.current.defaultMuted = true;
        videoRef.current.play()
    })*/
    return (
        <div 
          dangerouslySetInnerHTML={{
            __html: `<video className="bway-page-vid" autoplay loop muted playsinline>
      <source src=${props.video} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
          }}
        />
    );
}