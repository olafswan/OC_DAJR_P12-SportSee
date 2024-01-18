export default function Activity(prop) {

    return (
      <div className="activity">
        <img src={`/src/assets/${prop.activity}.svg`} alt={prop.activity} />
      </div>
    );
  }