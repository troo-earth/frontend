import { useEffect, useState } from "react";

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countDownEndDate = new Date("January 30, 2026 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownEndDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-['Noto_Sans'] min-h-screen w-full bg-[url('/assets/leaves.jpg')] bg-cover bg-bottom flex items-center justify-start">
      <div className="w-full md:w-1/2 min-h-screen bg-gradient-to-b from-gray-900/90 to-gray-900/95 p-10 flex">
        <div className="w-full text-center my-auto">
          <h1 className="font-['Comforter_Brush'] font-bold text-5xl text-amber-500 mb-10 md:text-right">
            troo.earth
          </h1>

          <h6 className="font-['Montserrat'] font-bold uppercase text-4xl md:text-5xl lg:text-6xl mb-14 md:-mr-20 text-white md:text-right">
            Coming <span className="text-white/70">soon</span>
          </h6>

          {/* Countdown */}
          <div className="w-full text-left flex mb-10">
            <ul className="w-full flex justify-center md:justify-end gap-5 mx-auto text-gray-50">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <li key={item.label}>
                  <div className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24">
                    {item.value}
                  </div>
                  <p className="text-center text-xs mt-2">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <p className="text-base mb-10 text-gray-200 md:text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            reprehenderit delectus quasi eligendi maiores consectetur repellat
            necessitatibus libero deleniti quaerat debitis, odit earum modi.
            Magni porro iste dolores.
          </p>

          {/* Social Media */}
          <div className="w-full text-left flex">
            <ul className="w-full flex justify-center md:justify-end gap-10 mx-auto text-gray-500">
              {[
                { icon: "facebook-f", url: "#" },
                { icon: "twitter", url: "#" },
                { icon: "youtube", url: "#" },
                { icon: "instagram", url: "#" },
              ].map((item) => (
                <li key={item.icon}>
                  <a
                    href={item.url}
                    className="text-lg hover:text-amber-500 transition-colors"
                  >
                    <i className={`fab fa-${item.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
