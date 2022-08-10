export function Profile() {
  return (
    <img
      src="https://loremflickr.com/1234/2345/cats?56789"
      alt="dynamically cat"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Including image</h1>
      <Profile />
    </section>
  );
}
