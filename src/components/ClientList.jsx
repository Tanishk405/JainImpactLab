import React, { useEffect, useState } from "react";

const logos = [
  "/logos/client1.png",
  "/logos/client2.png",
  "/logos/client3.png",
  "/logos/client4.png",
];

const ClientList = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-10">Partial Client List</h2>
      <img src={logos[current]} alt="Client Logo" className="mx-auto h-24 transition-all duration-500" />
    </section>
  );
};

export default ClientList;
