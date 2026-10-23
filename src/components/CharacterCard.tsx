type CharacterCardProps = {
  name: string;
  role: string;
};

function CharacterCard({ name, role }: CharacterCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
    </article>
  );
}

export default CharacterCard;