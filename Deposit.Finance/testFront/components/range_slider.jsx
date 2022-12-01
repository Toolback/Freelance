

// @ts-ignore
import ReactSlider from "react-slider";

const RangeSlider = ({timeHeld, setTimeHeld}) => {



  return (
    <ReactSlider
      className="customSlider"
      thumbClassName="customSlider-thumb"
      trackClassName="customSlider-track"
      markClassName="customSlider-mark"
      marks={20}
      min={1}
      max={100}
      defaultValue={0}
      value={timeHeld}
      onChange={(e) => setTimeHeld(e)}
      renderMark={(props) => {
         if (props.key < timeHeld) {
           props.className = "customSlider-mark customSlider-mark-before";
         } else if (props.key === timeHeld) {
           props.className = "customSlider-mark customSlider-mark-active";
         }
         return <span {...props} />;
      }}
    />
  );
};

export default RangeSlider;