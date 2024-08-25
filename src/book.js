export default function Book({ img, title, author, id }) {
  return (
    <article className="book">
      <img className="imageContainer" src={img} alt={title} />
      <figcaption style={{ fontFamily: "sans-serif" }}>{title}</figcaption>
      <span style={{ fontSize: "0.8rem", fontFamily: "serif" }}>
        by {author}
      </span>
      <span className="number">{id}</span>
    </article>
  );
}
