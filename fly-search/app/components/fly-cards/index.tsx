"use client";
import { useState, useEffect, useRef } from "react";
import data from "@/app/flight-data.json";
import FlyCard from "../fly-cards/sub-component/fly-card";
import FilterModal from "../filter-modal";
import {
  filterCargo,
  filterSortByCost,
  filterSortByTime,
  filterTicketType,
} from "@/app/utils/filterFun";
import { useSearchParams } from "next/navigation";

export const { pricedItineraries = [], additionalData, filter } = data;
export default function FlyCards() {
  const [visibleData, setVisibleData] = useState<[]>([]);
  const [page, setPage] = useState(1);
  const loadMoreRef = useRef(null);
  const params = useSearchParams()
  const sort = params.get("sort");
  const cargo = params.get("cargo");
  const ticketType = params.get("ticketType");
  const getFilteredData = () => {
    let filteredData = pricedItineraries;

    if (sort) {
      filteredData =
        sort === "سریعترین"
          ? filterSortByTime(filteredData)
          : filterSortByCost(filteredData);
    }

    if (cargo) {
      filteredData = filterCargo(filteredData, cargo);
    }

    if (ticketType) {
      filteredData = filterTicketType(filteredData);
    }

    return filteredData;
  };

  console.log(getFilteredData())

  useEffect(() => {
    const filteredData = getFilteredData();
    setVisibleData(filteredData?.slice(0, 10) as []);
    setPage(1);
  }, [params]);

  const loadMoreData = () => {
    const filteredData = getFilteredData();
    const newItems = filteredData?.slice(page * 10, (page + 1) * 10);
    setVisibleData((prevData) => [...(prevData || []), ...(newItems || [])] as []);
    setPage((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreData();
      }
    });
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [loadMoreRef, page]);

  return (
    <main className="w-full lg:w-3/4">
      <div className="flex flex-col gap-2 p-2">
        <FilterModal />
        {visibleData?.map((item, index) => (
          <FlyCard key={index} data={item} />
        ))}
        <div ref={loadMoreRef} className="h-[20px]"></div>
      </div>
    </main>
  );
}
