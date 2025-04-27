import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const VideoCallPage = () => {
  const { roomId } = useParams(); // Get the roomId from the URL

  const jitsiContainerRef = useRef(null); // Ref to embed Jitsi video call

  useEffect(() => {
    // Initialize Jitsi Meet
    const domain = "meet.jit.si"; // Public Jitsi server
    const options = {
      roomName: roomId, // Unique room based on roomId parameter
      parentNode: jitsiContainerRef.current, // Attach Jitsi to the div
      width: "100%", // Full width
      height: "100%", // Full height
      configOverwrite: {
        startWithAudioMuted: false, // Don't start muted
        startWithVideoMuted: false, // Don't start with video off
      },
      interfaceConfigOverwrite: {
        filmStripOnly: false, // Display all participants in the room
      },
      userInfo: {
        displayName: "Student or Instructor", // Optionally, pass display name
      },
    };

    // Create the Jitsi instance
    const api = new window.JitsiMeetExternalAPI(domain, options);

    // Cleanup when the component unmounts
    return () => api.dispose();
  }, [roomId]); // Re-run if roomId changes

  return (
    <div className="w-screen h-screen bg-black">
      <div ref={jitsiContainerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default VideoCallPage;
