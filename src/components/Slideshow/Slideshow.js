import React, { useState, useEffect, useLayoutEffect, useRef} from 'react';
import './slideshow.css';

export default function Slideshow(){

    const nrOfImages = 4;

    var img0 = useRef();
    var img1 = useRef();
    var img2 = useRef();
    var img3 = useRef();

    const [index, setIndex] = React.useState(0);
    const indexRef = useRef(index);
    const [slideshowHeight, setSlideshowHeight] = useState(0);

    useEffect(() => {
      console.log(typeof indexRef)
      indexRef.current = index;
    }, [index])

    function updateSize(idx) {
      // console.log(typeof idx)
      if (img0.current === null || img1.current === null || img2.current === null || img3.current === null){
        // setSlideshowHeight(0)
      } else {
        if (idx === 0) {
          setSlideshowHeight(img0.current.clientHeight)
        } else if (idx === 1){
          setSlideshowHeight(img1.current.clientHeight)
        }else if (idx === 2){
          setSlideshowHeight(img2.current.clientHeight)
        }else if (idx === 3){
          setSlideshowHeight(img3.current.clientHeight)
        }
      }
    }

    useLayoutEffect(() => {
      console.log("uselayouteffect executed")
      window.addEventListener('resize', function(){
          updateSize(indexRef.current);
      });
      updateSize(index);

      return () => 
        window.addEventListener('resize', function(){
          updateSize(indexRef.current);
      });
    }, [])

    function slideLeft(){
      var newIdx;
      if(index > 0) {
        newIdx = index - 1
        setIndex(newIdx);
      } else {
        newIdx = 3;
        setIndex(newIdx)
      }
      updateSize(newIdx)
    }

    function slideRight(){
      var newIdx;
      if(index < nrOfImages - 1) {
        newIdx = index + 1
        setIndex(newIdx);
      } else {
        newIdx = 0;
        setIndex(newIdx)
      }
      updateSize(newIdx)
    }

    return (
      <div className="slideshow">
        <div className="controller">
          <div className="arrowDiv" id="leftArrowDiv"
            onClick={() => {
              slideLeft()
            }}
            ><span className="arrow" id="leftArrowSpan"></span></div>
          <div className="slideshowDots">
            {
              Array.from(Array(nrOfImages), (e, idx) => {
                return (
                  <div
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                      setIndex(idx);
                      updateSize(idx)
                    }}
                  ></div>
                )
              })
            }
          </div>
          <div className="arrowDiv" id="rightArrowDiv"
            onClick={() => {
              slideRight()
            }}
            ><span className="arrow" id="rightArrowSpan"></span></div>
        </div>
          
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, height: slideshowHeight == 0 ? 'auto' : `${slideshowHeight}px`} }
        >
          <img ref={img0} key={0} className="img" id="0" src={require("./home.png")} />
          <img ref={img1} key={1} className="img" id="1" src={require("./projects.png")} />
          <img ref={img2} key={3} className="img" id="2" src={require("./services.png")} />
          <img ref={img3} key={4} className="img" id="3" src={require("./about.png")} />
        </div>
      </div>
    );

}