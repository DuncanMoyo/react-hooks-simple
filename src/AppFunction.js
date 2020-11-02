import React, { useState, useEffect } from "react";

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: 0,
};

const AppFunction = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [status, setStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] = useState(
    initialLocationState
  );

  let mounted = true;

  useEffect(() => {
    document.title = `you have clicked ${count} times`;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);

      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    };
  }, [count]);

  const handleGeolocation = (event) => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
      });
    }
  };

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}> I've been clicked {count} times</button>

      <h2>Toggle Light</h2>
      <img
        src={
          isOn
            ? "https://icon.now.sh/highlight/fd0"
            : "https://icon.now.sh/highlight/aaa"
        }
        alt="FlashLight icons"
        onClick={toggleLight}
        style={{
          height: "50px",
          width: "50px",
        }}
      />

      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br />

      <h2>Network Status</h2>
      <p>
        You are <strong>{status ? "online" : "offline"}</strong>
      </p>

      <h2>Geolocation</h2>
      <p>
        Latitude is <strong>{latitude}</strong>
      </p>
      <p>
        Longitude is <strong>{longitude}</strong>
      </p>
      <p>
        Speed is <strong>{speed ? speed : 0}</strong>
      </p>
    </>
  );
};

export default AppFunction;
