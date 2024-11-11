"use client";
import { cargoFilter } from "@/app/utils/constant";
import FilterItem from "../filter-item";
import Filter from "../filter-modal/sub-component/filter";
import { useRouter, useSearchParams } from "next/navigation";

export default function SideBarFilter() {
  const router = useRouter();
  const params = new URLSearchParams();
  const handlesetParams = (value:string | null) => {
    if(!params.has('ticketType')){
        params.append('ticketType',`${value}`)
    }else{
        params.delete('ticketType')
        params.append('ticketType',`${value}`)
    }
  };
  return (
    <div className="w-1/4 p-4 hidden lg:block">
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
              name="cargo"
              title={item}
              setData={handlesetParams}
            />
          ))}
        </Filter>
      </div>
    </div>
  );
}
