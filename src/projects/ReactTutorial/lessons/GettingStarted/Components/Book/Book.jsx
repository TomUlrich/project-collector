import './Book.css'

function Book({ cover, title, author }) {
  return (
    <div className="book">
      <img className="cover" src={cover} alt={title} />
      <hr className="horizontalLine" />
      <h2 className='title'>{title}</h2>
      <p>{author}</p>
    </div>
  )
}

export default Book