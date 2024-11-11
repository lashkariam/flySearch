'use client'
import { useState, useEffect, useRef } from 'react';
import data from '@/app/flight-data.json';
import FlyCard from '../fly-cards/sub-component/fly-card';
import FilterModal from '../filter-modal';
import FilterTab from '../filterTab';

export const { pricedItineraries, additionalData, filter } = data;

export default function FlyCards() {
  const [visibleData, setVisibleData] = useState(pricedItineraries.slice(0, 10));
  const [page, setPage] = useState(1);
  const loadMoreRef = useRef(null); 

  const loadMoreData = () => {
    const newItems = pricedItineraries.slice(page * 10, (page + 1) * 10);
    setVisibleData((prevData) => [...prevData, ...newItems]);
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
      if (loadMoreRef.current) observer.unobserve(loadMoreRef?.current);
    };
  }, [loadMoreRef, page]);

  return (
    <main className='w-full lg:w-3/4'>
      <div className="flex flex-col gap-2 p-2">
      <FilterModal />
      {visibleData.map((item, index) => (
        <FlyCard key={index} data={item} />
      ))}
      <div ref={loadMoreRef} className='h-[20px]'></div>
      </div>
    </main>
  );
}