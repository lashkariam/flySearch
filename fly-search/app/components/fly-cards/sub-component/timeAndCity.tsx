interface Props {
  time: string;
  city: string;
}
export default function TimeAndCity({ time, city }: Props) {
  return (
    <div className="flex md:flex-col gap-2">
      <div>{time}</div>
      <div>{city}</div>
    </div>
  );
}
