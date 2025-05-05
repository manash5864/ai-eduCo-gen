import React from 'react'
import YouTube from 'react-youtube'
import ReactMarkdow from 'react-markdown'
const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
function ChapterContent({chapter,content}) {
    console.log(chapter)
    console.log('Chapters Data:', content?.chapters);
  return (
    <div>
        <div className='p-7'>
            <h2 className='font-medium text-2xl'>{chapter?.chapter_name}</h2>
            <p className='text-gray-500'>{chapter?.about}</p>

            {/* video */}
            <div className='flex justify-center my-6'>
                <YouTube
                videoId={content?.videoId}
                opts={opts}
                />
            </div>

            <div>
                {content?.content?.chapters?.map((item,index)=>(
                <div className='p-5 bg-sky-100 mb-3 rounded-lg'>
                    <h2 className='font-medium text-lg'>{item?.title}</h2>
                    {/* <p className='whitespace-pre-wrap'>{item?.explanation}</p> */}
                    <ReactMarkdow>{item?.explanation}</ReactMarkdow>
                    {item.code_example&&
                        <div className='p-4 bg-black text-white rounded-md mt-3'>
                            <pre>
                                <code>{item?.code_example}</code>
                            </pre>
                        </div>
                    }
                </div>
            ))} 

            </div>

            {/* content */}
        </div>
    </div>
  )
}

export default ChapterContent