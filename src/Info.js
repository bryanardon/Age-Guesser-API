export default function Info({ data }) {
  return !data.name ? (
    <p> Enter a name </p>
  ) : !data.age ? (
    <p> "I can't figure out your age" </p>
  ) : (
    <div>
      <p>
        Hello, {data.name}, you are probably {data.age}
      </p>
      <div id="old">
        <img
          src="https://www.pinclipart.com/picdir/middle/544-5443407_birthday-candles-clipart-picsart-transparent-background-birthday-cake.png"
          alt="old"
          height="50"
          width="100"
        />
      </div>
    </div>
  );
}
// !data || !
