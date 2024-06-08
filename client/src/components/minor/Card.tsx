import React from 'react'

interface CardProps {
    cardStyle:string;
    text:string;
    textStyle:string;
    ImageComp:React.FC;
}

const Card = ({cardStyle,text,textStyle,ImageComp}:CardProps) => {
  return (
    <div className={` flex justify-center items-center flex-col  rounded-3xl md:w-4/12 md:h-96 h-[20rem] gap-y-5 drop-shadow-3 ${cardStyle}`}>
        <ImageComp/>
        <h1 className={`flex justify-center items-center font-bold  md:text-xl ${textStyle} `}>
            {text}
        </h1>
    </div>
  )
}

export default Card