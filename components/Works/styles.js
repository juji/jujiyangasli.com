import styled from 'styled-components'
import { animated } from 'react-spring'

const background = '#03080e'

export const WorkDetailThumb = styled.a`
  width: 158px;
  height: 89px;
  display:inline-block;
  background-size: cover;
  background-position: center top;
  background-image: url('${props => props.image}');
  opacity: ${props => props.active ? 1 : 0.5};

  &:hover{
    opacity: ${props => props.active ? 1 : 0.8};
  }
`

export const WorkDetailImage = styled.div`
  height: ${props => props.image ? '100' : '0' }%;
  width: 100%;
  background-size: contain;
  background-position: center center;
  background-color: rgba(0,0,0,0.8);
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;

  flex: 1 1 auto;

  transition: all 500ms;
`

export const WorkDetailGallery = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  height: ${props => props.image ? '100%' : 'initial'};

  .gallery-thumb{

    flex: 0 0 auto;
    height: 89px;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    background-color: rgba(0,0,0,0.5);

    .gallery-thumb-child{
      height: 89px;
    }

  }

  @media only screen and (min-width: 1024px) {
    top:0;
    left:0;
    bottom: auto;
    height: 100%;
    padding-right: 377px;
    box-sizing: border-box;
  }

  @media only screen and (min-width: 1200px) {
    padding-right: 610px;
  }
`

export const WorkDetailContainer = styled.div`
  position: fixed;
  top:0;
  left:0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  background-color: ${background};
  z-index: 100;

  .detail-text{

    transition: width 200ms;

    position: fixed;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-bottom: 89px;

    h2{
      display:flex;

      span{ flex: 1 1 auto; }

      a{ flex: 0 0 aut0; }
      padding: 34px;
      margin: 0;
    }

    &>div{
      overflow: auto;
      padding: 34px;
      padding-top: 0;
    }
  }

  @media only screen and (min-width: 1024px) {
    .detail-text{
      top:0;
      right:0;
      left: auto;
      height: 100%;
      padding-bottom: 0px;
      width: 377px;
      z-index: 100;
    }
  }

  @media only screen and (min-width: 1200px) {
    .detail-text{
      width: 610px;
    }
  }

`

export const WorkThumb = styled(animated.div)`

  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  height: 0;
  margin: 0;
  padding: 0;
  padding-top: 48%;
  display:inline-block;

  background-position: center top;
  background-size: 100% auto;
  position: relative;
  cursor:pointer;

  a{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  span{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    background-color: rgba(0,0,0,0.9);
    opacity: 0;
    transition: all 500ms;
    font-size: 21px;
    top:0;
    left:0;
    position: absolute;
    box-sizing: border-box;
    padding-top: 23%;
    color: #fff;
  }

  &:hover{
    background-size: 110% auto;

    span{
      opacity: 1;
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 50%;
    padding-top: 24%;

    border-right: 5px solid ${background};

    &:nth-child(2n){
      border-right: 0px solid ${background};
    }

  }

  @media only screen and (min-width: 1200px) {
    width: 33.33%;
    padding-top: 16.3%;

    border-right: 5px solid ${background};

    &:nth-child(2n){
      border-right: 5px solid ${background};
    }

    &:nth-child(3n){
      border-right: 0px solid ${background};
    }

  }

`
