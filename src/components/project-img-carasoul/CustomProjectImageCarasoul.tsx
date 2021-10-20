import { Carousel, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface propsType {
    images: string[] | undefined | null,
    isInverted?: boolean
}

export const CustomProjectImageCarasoul = ({ images, isInverted }: propsType) => {
    const [windowInnerWidthSize, setWindowInnerWidthSize] = useState<number>(window.innerWidth);

    useEffect(() => {

        const changeWidthFunc = () => {
            setWindowInnerWidthSize(window.innerWidth)
        }
        window.addEventListener('resize', changeWidthFunc, false);

        return () => {
            window.removeEventListener('resize', changeWidthFunc, false);
        }
    }, [])

    return (
        <CustomProjectImageCarasoulContainer isinverted={isInverted? 'true': 'false'}>
            <Carousel 
                adaptiveHeight
                autoplay 
                effect="scrollx"
                dotPosition={(windowInnerWidthSize < 750 || isInverted)? 'right': 'left'}
                verticalSwiping
                draggable

            >
                {
                    images?.map((_img, _index) => (
                        <div key={_index}>
                            <Image
                                style={{ maxHeight: 300 }} 
                                width={'100%'} 
                                src={_img}
                                preview={true}
                            /> 
                        </div>
                    ))
                }
            </Carousel>
        </CustomProjectImageCarasoulContainer>
    )
}

interface CustomProjectImageCarasoulContainerProps {
    isinverted?: string
}

const CustomProjectImageCarasoulContainer = styled.div<CustomProjectImageCarasoulContainerProps>`
    position: absolute;
    max-width: 100%;
    // z-index: 0;

    .ant-carousel{
        max-height: 300px;
        width: 400px;
        max-width: 95%;

        // z-index: 1;
    }

    .ant-carousel img {
        border-radius: 5px;

        // height: 300px;
        max-height: 300px;
    }

    @media only screen and (min-width: 750px) {
        right:  ${props => props.isinverted === 'true'? '10px': 'auto'};
        left:  ${props => props.isinverted === 'true'? 'auto': '10px'};
    }

    @media only screen and (max-width: 750px) {
       
        padding-left: 1.2rem;
        
        img {
            background: black;
    
            opacity: 0.34;

        }
    }

`;
