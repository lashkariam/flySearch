interface Props {
  title: string;
  name?: string;
  value?:string
  setData: (value: string | null) => void;
}

export default function FilterItem({ title, value,name, setData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.checked) {
      setData(e.target?.value);
    } else {
      setData(null);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        className="w-4"
        onChange={handleChange}
        type="radio"
        name={name}
        value={value ? value : title}
      />
      <label htmlFor={title}>{title}</label>
      <br />
    </div>
  );
}
