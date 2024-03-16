import React, { useEffect, useState } from 'react';

export default function Fun() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerID);
  })

  return (
    <div className="d-flex justify-content-center align-items-center bg-danger" style={{ height: "100vh" }}>
      <div style={{ fontSize: "15vmin" }}>
        {date.toLocaleTimeString()}
      </div>
    </div>
  );
}

