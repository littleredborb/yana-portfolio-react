const Navigation = ({links}) => {
	return (
		<div>
			<ul className="navigation">{
				links.map((link) => (
					<li key={link.id}><button className="btn" >{link.name}</button></li>
				))
			}
			</ul>
		</div>
	)
}
export default Navigation