import FlyCards from "./components/fly-cards";
import data from "@/app/flight-data.json";
import SideBarFilter from "./components/sideBarFilter";
import FilterTab from "./components/filterTab";
export const { pricedItineraries, additionalData, filter } = data;
export default function Home() {
  return (
    <main>
      <FilterTab />
      <div className="flex">
        <SideBarFilter />
        <FlyCards />
      </div>
    </main>
  );
}
