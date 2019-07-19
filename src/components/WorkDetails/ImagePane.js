import React, {useState} from 'react'
import styled from 'styled-components'
import Jimage from 'react-jimage'
import Slider from "react-slick";

import { MdSearch, MdClose } from "react-icons/md";
import { useGlobalContext } from '../GlobalContext'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .image-container{
    flex: ${p => p.fullScreen ? '1 1 auto' : '0 0 auto'};
    position: relative;
    padding-top:56.25%;

    .image-full{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      display: ${p => p.fullScreen ? 'block' : 'none'};
    }

    .image-slider{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      display: ${p => p.fullScreen ? 'none' : 'block'};

      .slick-slider, .slick-list, .slick-track{
        height: 100%;
      }

      .slick-slide>div{
        height: 100%;
      }

      .image-in-slider{
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center center;
        user-select: none;
      }

      .image-in-slider-container{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        user-select: none;
      }
    }
  }

  .image-text{
    position: relative;
    flex: 0 0 auto;
    display: flex;
    background-color: #171717;
    padding: 8px 21px;
    p:first-child{ flex: 1 1 auto; margin: 0; }
    p:nth-child(2){ flex: 0 0 auto; margin: 0; }
    a{
      flex: 0 0 auto;
      font-size: 25px;
      margin-left: 21px;
    }
  }

  @media only screen and (min-width: 1024px) {
    .image-container{
      flex: 1 1 auto;
      padding-top:0;
    }
  }

`

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 200
}

export default props => {

  const { images, onFullScreen } = props;
  const [ index, setIndex ] = useState(0);
  const [ fullScreen, setFullScreen ] = useState(0);
  const { touch } = useGlobalContext();

  const resize = () => {
    onFullScreen && onFullScreen(!fullScreen)
    setFullScreen(!fullScreen)
  }


  return <Container fullScreen={fullScreen}>
    <div className="image-container">
      <div className="image-full">
        <Jimage image={images[index].url} />
      </div>
      <div className="image-slider">
        <Slider
          {...sliderSettings}
          beforeChange={(old,newIdx) => {
            setIndex(newIdx)
          }}
          className="slider-component"
        >{images.map(v => <div className="image-in-slider-container" key={v.url}>
          <img alt={v.title} className="image-in-slider" src={v.url} />
        </div>)}</Slider>
      </div>
    </div>
    <div className="image-text">
      <p>{fullScreen ? '' : images[index].title}</p>
      <p>{ fullScreen ? (
        touch ? 'pinch to zoom, touch to drag.' : 'zoom with mouse wheel, drag with mouse.'
      ) : `image ${index+1} of ${images.length}`}</p>
      <a href="javascript:;" onClick={resize}>
        {fullScreen ? <MdClose /> : <MdSearch />}
      </a>
    </div>
  </Container>


}
