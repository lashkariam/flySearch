interface Props {
  title: string;
  name?: string;
  value?:string
  setData: (value: string | null) => void;
}

export default function FilterItem({ title, value,name, setData }: Props) {
  const params = new URLSearchParams(window.location.search)
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
        className="w-4 cursor-pointer"
        onChange={handleChange}
        type="checkbox"
        name={name}
        id={title}
        value={value ? value : title}
        defaultChecked={params.get(`${name}`) === (value ? value : title)}
      />
      <label className="cursor-pointer" htmlFor={title}>{title}</label>
      <br />
    </div>
  );
}
