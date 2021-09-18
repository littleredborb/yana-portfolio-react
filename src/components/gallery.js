import Image from "./image";

const Gallery = ({images, onOpenModal}) => {
	return (
		<div className="gallery-image">
			<div className="gallery-cropped">
				{
					images.map( (img) => (
						<Image key={img.id} src={img.src} pos={img.objectPosition} onOpenModal={onOpenModal} />
					))
				}
			</div>
		</div>
	)
}

export default Gallery