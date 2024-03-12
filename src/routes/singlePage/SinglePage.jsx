import Slider from '../../components/slider/Slider';
import './singlepage.scss';
import {singlePostData} from '../../lib/dummyData';

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1></h1>
              </div>
              <div className="user">

              </div>
            </div>
            <div className="bottom">

            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          
        </div>
      </div>
    </div>
  )
}

export default SinglePage
