import React, { useState } from 'react'

const data = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Image 1',
    desc: 'Image 1 description',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Image 2',
    desc: 'Image 2 description',
  },
  {
    id: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooEnD32-UtBw55GBfDTxxUZApMhWWnRaoLw&s',
    title: 'Image 3',
    desc: 'Image 3 description',
  },
  {
    id: 4,
    image:
      'https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0',
    title: 'Image 4',
    desc: 'Image 4 description',
  },
  {
    id: 5,
    image:
      'https://nordicapis.com/wp-content/uploads/5-Random-API-Key-Generators-And-Why-You-Might-Use-Them.jpg',
    title: 'Image 5',
    desc: 'Image 5 description',
  },
]

const ImageSlide = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handlePrevClick = () => {
    setActiveImageIndex(activeImageIndex + 1)
    // setActiveImageIndex((prevIndex) =>
    //   prevIndex === 0 ? data.length - 1 : prevIndex - 1
    // )
  }

  const handleNextClick = () => {}

  return (
    <div className="flex justify-center">
      <button className="font-bold p-4 m-10 cursor-pointer" onClick={handlePrevClick}>
        prev
      </button>
      <img className="w-1/2" src={data[activeImageIndex].image} alt="" />
      <button className="font-bold p-5 m-10 cursor-pointer" onClick={handleNextClick}>
        next
      </button>
    </div>
  )
}

export default ImageSlide
