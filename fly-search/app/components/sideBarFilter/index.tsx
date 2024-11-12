"use client";
import { cargoFilter } from "@/app/utils/constant";
import FilterItem from "../filter-item";
import Filter from "../filter-modal/sub-component/filter";
import { useRouter } from "next/navigation";

export default function SideBarFilter() {
  const router = useRouter();
  const handlesetParams = (value: string | null) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set('ticketType', `${value}`)
    }else{
      params.delete('ticketType')
    }
    router.push(`?${params.toString()}`);
  };
  const handleCargoParams = (value: string | null) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set('cargo', `${value}`)
    }else{
      params.delete('cargo')
    }
    router.push(`?${params.toString()}`);
  }
  return (
    <div className="w-1/4 p-4 hidden lg:block max-h-[400px] sticky top-2">
      <div className="flex flex-col gap-2">
        <Filter title="نوع بلیط">
          <FilterItem
            title="سیستمی"
            name="isSystem"
            value="isSystem"
            setData={handlesetParams}
          />
        </Filter>
        <Filter title="بار مجاز">
          {cargoFilter?.map((item) => (
            <FilterItem
              key={item}
              name='cargo'
              title={item}
              setData={handleCargoParams}
            />
          ))}
        </Filter>
      </div>
    </div>
  );
}
