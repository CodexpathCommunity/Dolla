import React,{useState} from 'react'
import { Button } from '../ButtonElements'
import Video from '../../Videos/video.mp4'
import { 
        HeroBg, 
        VideoBg,
        HeroContainer,
        HeroContent,
        HeroH1,
        HeroP,
        HeroBtnWrapper,
        ArrowForward,
        ArrowRight     
    } from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }

    return (
        <HeroContainer id="home" >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' ></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1> Virtual Banking Made Easy </HeroH1>
                <HeroP>
                    Sign Up for a new account today and recieve $250 
                    in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='sign-up' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        primary='ture'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}

                    >
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
