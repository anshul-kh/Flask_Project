import React from 'react';
import { Card_1, Card_2, Card_3, Card_4 } from '../minor/Cards';
import { Card } from '..';

export type ItemType = {
    ImageComp: React.FC;
    text: string;
}

export type CardDataType = ItemType[];

const cardData: CardDataType = [
    {
        ImageComp: Card_1,
        text: "Awesome Developer Profile"
    },{
        ImageComp: Card_2,
        text: "Custom Messages"
    },{
        ImageComp: Card_3,
        text: "Showcase Your Skills"
    },{
        ImageComp: Card_4,
        text: "Showcase Your GitHub"
    }
]

const Sect_1 = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='flex md:justify-center justify-start items-center flex-col gap-2'>
            <h1 className='font-bold font-sans text-6xl text-black px-7'>
                Awesome Features.
            </h1>
            <h1 className='font-bold font-sans text-5xl text-walnut_brown'>
                Always, Free.
            </h1>
            <div className='flex md:flex-row flex-col md:flex-wrap gap-x-10 justify-center items-center gap-y-7 mt-10 w-3/4'>
                {cardData.map((item: ItemType, index: number) => (
                    <Card key={index} ImageComp={item.ImageComp} cardStyle='bg-anti-flash_white-700' textStyle='' text={item.text}/>
                ))}
            </div>
         </div>
    </div>
  )
}

export default Sect_1;
