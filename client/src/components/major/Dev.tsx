import { CardDataType,ItemType } from './Sect_1'
import { Card_5,Card_6 } from '../minor/Cards'
import { Card } from '..';

const cardData : CardDataType = [
    {
        ImageComp: Card_5,
        text: "Pre-Built Components"
    },
    {
        ImageComp: Card_6,
        text: "Showcase Your Stats"
    },
];

const Dev = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='flex md:justify-center justify-start items-center flex-col gap-2 md:w-3/4 bg-black md:h-[90vh] md:mt-0 mt-10 md:mb-0 mb-10 md:py-0 py-10 rounded-3xl'>
            <h1 className='font-bold font-sans text-6xl text-anti-flash_white px-7 '>
                Special Features.
            </h1>
            <h1 className='font-bold font-sans text-5xl text-walnut_brown'>
                For Devs.
            </h1>
            <div className='flex md:flex-row flex-col md:flex-wrap gap-x-10 justify-center items-center gap-y-7 mt-10 w-full'>
                {cardData.map((item: ItemType, index: number) => (
                    <Card key={index} ImageComp={item.ImageComp} cardStyle='border-anti-flash_white-700  border-1 border bg-anti-flash_white-700 shadow-lg shadow-anti-flash_white-100  w-3/4' textStyle='' text={item.text}/>
                ))}
            </div>
         </div>
    </div>
  )
}

export default Dev