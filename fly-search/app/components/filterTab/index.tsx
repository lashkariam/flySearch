'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, MouseEvent } from "react";

export default function FilterTab() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState(searchParams.get('sort') || 'ارزانترین');

  const handleSort = (e: MouseEvent<HTMLDivElement>) => {
    const selectedSort = e.currentTarget.textContent || '';
    const params = new URLSearchParams(window.location.search);
    selectedSort === "سریعترین"
    ? params.set("sort", selectedSort)
    : params.delete("sort");
    router.push(`?${params.toString()}`);
    setSort(selectedSort); 
  };

  useEffect(() => {
    setSort(searchParams.get('sort') || 'ارزانترین');
  }, [searchParams]);
  
  return (
    <div style={{ direction: "ltr" }} className="mx-2 hidden lg:block">
      <div className="flex border border-gray-300 rounded-xl w-3/4 h-20 cursor-pointer">
        <div
          onClick={handleSort}
          className={`flex justify-center rounded-l-xl items-center flex-1 ${
            sort === 'سریعترین' ? 'text-[#3662db]' : ''
          }`}
        >
          سریعترین
        </div>
        <div
          onClick={handleSort}
          className={`flex justify-center items-center rounded-r-xl flex-1 border-l ${
            sort === 'ارزانترین' ? 'text-[#3662db]' : ''
          }`}
        >
          ارزانترین
        </div>
      </div>
    </div>
  );
}

