import { useEffect, useState, useRef } from "react";

const App = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        // setScrollTop(containerRef.current.scrollTop);
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const isNearBottom = scrollTop + clientHeight >= scrollHeight;
        console.log(isNearBottom, "isNearBottom");
        if (isNearBottom) {
          console.log("Reached bottom");
          // DO SOMETHING HERE
        }
      }
    };

    const refElement = containerRef.current;
    refElement.addEventListener("scroll", handleScroll);

    return () => {
      refElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          padding: "10px 0",
          top: "0",
          backgroundColor: "white",
          borderBottom: "3px solid black",
          width: "100%",
        }}
      >
        <h2>Scroll Top: {scrollTop}</h2>
      </div>

      <div
        ref={containerRef}
        style={{
          marginTop: "4rem", // Adjusted to ensure space for fixed header
          height: "90vh", // Makes sure the container is scrollable
          overflowY: "auto", // Enables vertical scrolling
        }}
      >
        {[...Array(100)].map((_, index) => (
          <p key={index}>Content {index}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
