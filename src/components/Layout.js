
import styled from 'styled-components'

export default styled.div`

  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 0px;
  overflow: hidden;
  position: relative;

  canvas{
    position: absolute;
    bottom:0;
    right:0;
  }

  &>.logo{
    flex: 0 0 auto;
    padding:0px 55px;
    padding-top:55px;
    box-sizing: border-box;
    position: relative;
  }

  &>.content{
    flex: 0 0 auto;
    overflow-y: scroll; /* has to be scroll, not auto */
    -webkit-overflow-scrolling: touch;
    padding:0px 55px;
    box-sizing: border-box;
    position: relative;
  }

  &>.content.full{
    flex: 1 1 auto;
  }

  &>.nav{
    flex: 0 0 auto;
    position: relative;
  }

`
