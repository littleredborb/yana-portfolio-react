
import defaultImg from '../img/default.png'
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'
import img5 from '../img/5.png'
import img6 from '../img/6.png'

const GalleryImage = () => {
	return (
		<div className="gallery-image">
			{imageCollection()}
		</div>
	)
}

const imageCollection = () => {
	const galleryList = [{
		"id": 0,
		"src": img1,
		"objectPosition": "50% 60%"
		},
		{
		"id": 1,
		"src": img2,
		"objectPosition": "50% 50%"
		},
		{
		"id": 2,
		"src": img3,
		"objectPosition": "40% 10%"
		},
		{
		"id": 3,
		"src": img4,
		"objectPosition": "20% 10%"
		},
		{
		"id": 4,
		"src": img5,
		"objectPosition": "20% 10%"
		},
		{
		"id": 5,
		"src": img6,
		"objectPosition": "20% 10%"
		}
	];
	return (
		<div className="gallery-cropped">
		{
			galleryList.map( img => (<img key={img.id} src={img.src} style={{objectPosition: img.objectPosition}}></img>))
		}
		</div>
	)
}

GalleryImage.defaultProps = {
	src: defaultImg
}

export default GalleryImage