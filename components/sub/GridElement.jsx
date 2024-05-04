"use client";
import anime from "animejs";
import { useMediaQuery } from "@uidotdev/usehooks";

function GridElement() {
  let dots = [];
  let index = 0;
  const isSmallDevice = useMediaQuery(
    "only screen and (min-width:400px) and (max-width : 768px)"
  );
  const isExtraSmallDevice = useMediaQuery(
    "only screen and (max-width : 400px)"
  );

  //   console.log(isMediumDevice);
  const GRID_WIDTH = isExtraSmallDevice ? 10 : isSmallDevice ? 15 : 30;
  const GRID_HEIGHT = isExtraSmallDevice ? 10 : isSmallDevice ? 15 : 20;

  //   FUNCTION FOR ANIMATION ON CLICK
  function handleDotClick(e) {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.3, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 400 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 200 },
        { value: 0, easing: "easeInOutQuad", duration: 400 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 200 },
        { value: 0.5, easing: "easeInOutQuad", duration: 300 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  }

  // MAKING THE GRID USING FOR LOOP

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={(e) => handleDotClick(e)}
          key={`${i}-${j}`}
          data-index={index}
          className=" cursor-pointer rounded-full p-2 group hover:bg-slate-600  group"
        >
          <div
            data-index={index}
            className="dot-point h-3 w-3 rounded-full opacity-50  bg-gradient-to-b from-purple-600 to-red-600 group-hover:bg-violet-400"
          ></div>
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH},1fr)` }}
      className={` grid    w-fit`}
    >
      {dots}
    </div>
  );
}

export default GridElement;
