import '../styles/GalleryHover.css'

const GalleryHover = () => {
  return (
    <div className='main_container'>
        <div className="gallery__container">
            <div className="gallery one" data-text="door"></div>
            <div className="gallery two" data-text="car"></div>
            <div className="gallery three" data-text="goose"></div>
            <div className="gallery four" data-text="piano"></div>
            <div className="gallery five" data-text="tunnel"></div>
        </div>
    </div>
  )
}

export default GalleryHover