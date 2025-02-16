import './Book.css'

function Book({cover, title, author}) {
  return (
    <div className="book">
      <img className='cover' src={cover} alt={title}/>
      <h2 className='title'>{title}</h2>
      <p>by {author}</p>
    </div>
  )
}

export default Book