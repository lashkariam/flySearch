// import Image from "next/image";

export default function FlyCard() {
  return (
    <div className=" border rounded-lg hover:md:shadow transition-all duration-150 border-divider-secondary">
      <div className="flex flex-col w-full md:w-9/12 p-0">
        <div>
          <span className=" text-xs text-nowrap font-medium py-1 px-1.5 rounded-lg bg-gray-400 mr-3 ms-1">
            سیستمی
          </span>
        </div>
        <div>
            <div>
            {/* <Image alt="QB logo" loading="lazy" width="30" height="25" src="https://cdn-a.flytoday.ir/upload/flytoday/upload/airlinelogos/v2/qb.png" /> */}
                فشم ایر
            </div>
        </div>
      </div>
      <div className="w-full md:w-1/4"></div>
    </div>
  );
}
