
function Card() {
  return (
    <>
      <article class="cta">
        <img src='../../images/fiction-books' alt='Fiction Books'/>
          <div class="cta__text-column">
            <h2>Aspect ratio is great</h2>
            <p>This image has an aspect ratio of 3/2.</p>
            <a href="#">Read all about it</a>
          </div>
      </article>

      <article class="cta">
        <img src='../../images/fiction-books' alt='Fiction Books' />
          <div class="cta__text-column">
            <h2>Aspect ratio is great</h2>
            <p>This image has an aspect ratio of 3/2. But when the text is longer, the image grows too, overriding its aspect ratio. Cool!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#">Read all about it</a>
          </div>
      </article></>
  )
}

export default Card