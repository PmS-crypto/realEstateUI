import './slider.scss';

const Slider = ({images}) => {
  return (
    <div className="slider">
        {/* <div className="fullSlider">
            <div className="arrow">
                <img src="/arrow.png" alt="" />
            </div>
            <div className="imgContainer"></div>
            <div className="arrow">
            <img src="/arrow.png" alt="" />
            </div>
        </div> */}
        <div className="bigImage">
            <img src={images[0]} alt="house image" />
        </div>
        <div className="smallImages">
            {images.slice(1).map((image, index) => (
                <img src={image} key={index} alt="house images" />
            ))}
        </div>
    </div>
  )
}

export default Slider
