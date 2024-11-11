"use client";
import CloseIcon from "@/app/assets/icon/x-01.svg";
import Image from "next/image";
import {  FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Filter from "./filter";
import FilterItem from "../../filter-item";
import { cargoFilter } from "@/app/utils/constant";

interface Props {
  onClose: () => void;
}
export default function FilterContent({ onClose }: Props) {
  const [sort, setSort] = useState<string | null>("cheapest");
  const [ticketType, setTicketType] = useState<string | null>(null);
  const [cargo, setCargo] = useState<string | null>(null);
  const router = useRouter();
  const params = new URLSearchParams();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    [
      ["sort", sort],
      ["cargo", cargo],
      ["ticketType", ticketType],
    ].map((item) => {
      if (item[1]) {
        params.append(`${item[0]}`, `${item[1]}`);
      }
    });
    router.push(`?${params.toString()}`);
  };

  return (
    <form
      className="flex h-[100vh] relative flex-col gap-5"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-2">
        <button onClick={onClose}>
          <Image src={CloseIcon} alt="close icon" width="20" height="20" />
        </button>
        فیلتر و مرتب سازی
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="sort">
          مرتب سازی
        </label>
        <select
          onChange={(e) => setSort(e.target.value)}
          className="bg-white border h-12 p-2 rounded-lg"
          name="sort"
          id="sort"
          defaultValue="cheapest"
        >
          <option value="cheapest">ارزانترین</option>
          <option value="fastest">سریعترین</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <Filter title="نوع بلیط">
          <FilterItem
            title="سیستمی"
            name="isSystem"
            value="isSystem"
            setData={setTicketType}
          />
        </Filter>
        <Filter title="بار مجاز">
          {cargoFilter?.map((item) => (
            <FilterItem
              key={item}
              name="cargo"
              title={item}
              setData={setCargo}
            />
          ))}
        </Filter>
      </div>
      <button
        className="absolute bottom-8 w-[100%] bg-cyan-600 p-2 rounded-full text-white"
        type="submit"
      >
        اعمال فیلتر
      </button>
    </form>
  );
}
