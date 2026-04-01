import React from 'react'

const PathGen = ({cardDetail, styles}) => {
    
    const cD = cardDetail || [
        {
            title: "PathGen1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
        },
        {
            title: "PathGenomics2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
        }
    ]
   
    const line = (
      <div className="w-[4px] h-[110px] bg-gray-300 absolute left-1/2 -translate-x-1/2 translate-y-3"></div>
    );
    const circle = (
      <div className="w-6 h-6 rounded-full bg-gray-800 absolute left-1/2 -translate-x-1/2 translate-y-2"></div>
    );

    const titles = ((title) => (
      <div className=" text-gray-800 font-bold text-2xl">
        {title}
      </div>
    ))
    ;
    const contents = ((content) => (
      <div className="text-gray-600 text-sm italic">
        {content}
      </div>
    ));

    const cardsL = (({title, content}) => (
      <div className='flex flex-col justify-end text-end items-end p-2 max-w-80 -translate-x-48 -translate-y-2'>
        <div>{titles(title)}</div>
        <div>{contents(content)}</div>
      </div>
    ));
    const cardsR = (({title, content}) => (
      <div className="flex flex-col justify-start text-start items-start p-2 max-w-80 translate-x-48 -translate-y-2 ">
        <div>{titles(title)}</div>
        <div>{contents(content)}</div>
      </div>
    ));
    const path = (card,index) => <div className='relative'><div>{cD.length -1 === index ? null :line}</div><div>{circle}</div><div>{index%2==0 ? cardsL(card) : cardsR(card)}</div></div>
  return (
    <div className={`h-auto w-screen flex flex-col items-center justify-center font-serif ${styles || ''}`}>
        {cD.map((card, index) => (
            <div key={index} className='relative'>
                {path(card,index)}
            </div>
        ))}
    </div>
  )
}

export default PathGen