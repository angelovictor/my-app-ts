interface ICardProps {
  id: number;
  title: string;
  description: string;
  details: string;
}

function Card({ id, title, description, details }: ICardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{details}</p>
    </div>
  );
}

export default Card;
