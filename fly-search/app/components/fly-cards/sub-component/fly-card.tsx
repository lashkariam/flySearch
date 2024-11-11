import {
  addComma,
  convertLocation,
  convertToTime,
  formatTime,
} from "@/app/utils/helper";
import Image from "next/image";
import airportData from "@/app/flight-data.json";
interface Props {
  //eslint-disable-next-line
  data: any;
}
export default function FlyCard({ data }: Props) {
  const { airItineraryPricingInfo, originDestinationOptions } = data;
  const { additionalData } = airportData;
  const { airlines, airports } = additionalData;
  const imageSrc = convertLocation(
    airlines,
    originDestinationOptions[0]?.flightSegments[0]?.operatingAirline?.code
  )?.iata?.toLowerCase();
  console.log(imageSrc);
  return (
    <div className="flex flex-col md:flex-row border gap-4 md:gap-0 rounded-lg hover:md:shadow transition-all duration-150 border-divider-secondary pt-4 md:pt-0">
      <div className="flex flex-col w-full md:w-9/12 pt-2 gap-4">
        <div className="mx-2 text-xs text-nowrap font-medium py-1 px-1.5 mr-3 ms-1">
          {data?.isSystem && (
            <span className="text-xs text-nowrap font-medium py-1 px-1.5 rounded-lg bg-gray-100 mr-3 ms-1">
              سیستمی
            </span>
          )}
        </div>
        <div className="flex justify-between pl-4">
          <div className="flex md:flex-1 flex-col md:flex-row  px-2 gap-4">
            <div className="flex  md:flex-col items-center gap-2 px-4 md:p-4">
              <Image
                alt="QB logo"
                loading="lazy"
                width="30"
                height="25"
                src={`https://cdn-a.flytoday.ir/upload/flytoday/upload/airlinelogos/v2/${imageSrc}.png`}
              />
              <div className="flex flex-col justify-center items-center">
                <div>
                  {
                    convertLocation(
                      airlines,
                      originDestinationOptions[0]?.flightSegments[0]
                        ?.operatingAirline?.code
                    )?.nameFa
                  }
                </div>
                <div className="text-xs">
                  {originDestinationOptions[0]?.flightSegments[0]?.flightNumber}
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col md:flex-row justify-between  md:pt-4 px-12 gap-2 md:gap-0 relative">
              <div className="flex md:flex-col gap-2">
                <div>
                  {convertToTime(
                    originDestinationOptions[0]?.flightSegments[0]
                      ?.departureDateTime
                  )}
                </div>
                <div>
                  {
                    convertLocation(
                      airports,
                      originDestinationOptions[0]?.flightSegments[0]
                        ?.departureAirportLocationCode
                    )?.cityFa
                  }
                </div>
              </div>
              <div className="md:hidden text-xs">
                {
                  convertLocation(
                    airports,
                    originDestinationOptions[0]?.flightSegments[0]
                      ?.departureAirportLocationCode
                  )?.nameFa
                }
              </div>
              <div className="flex gap-2 flex-wrap">
                <div className="md:absolute md:flex md:right-[40%] text-[#3662db] text-xs bg-[#3662db0f] px-2 py-1 rounded-full text-nowrap">
                  {formatTime(
                    originDestinationOptions[0]?.flightSegments[0]
                      ?.journeyDuration
                  )}
                </div>
                <div className="text-center text-xs md:hidden rounded-lg bg-gray-100 p-1">
                  اکونومی
                </div>
              </div>
              <div className="border-b relative top-[-50px] w-[70%] hidden md:flex"></div>
              <div className="flex md:flex-col gap-2">
                <div>
                  {convertToTime(
                    originDestinationOptions[0]?.flightSegments[0]
                      ?.arrivalDateTime
                  )}
                </div>
                <div>
                  {
                    convertLocation(
                      airports,
                      originDestinationOptions[0]?.flightSegments[0]
                        ?.arrivalAirportLocationCode
                    )?.cityFa
                  }
                </div>
              </div>
              <div className="md:hidden text-xs">
                {
                  convertLocation(
                    airports,
                    originDestinationOptions[0]?.flightSegments[0]
                      ?.arrivalAirportLocationCode
                  )?.nameFa
                }
              </div>
            </div>
          </div>
          <div className="pt-4 flex flex-col gap-2 text-xs justify-center">
            {originDestinationOptions[0]?.flightSegments[0]?.baggage && (
              <div className="text-center rounded-lg bg-gray-100 p-1 text-nowrap">
                {originDestinationOptions[0]?.flightSegments[0]?.baggage}
              </div>
            )}
            <div className="hidden md:block text-center rounded-lg bg-gray-100 p-1">
              اکونومی
            </div>
            <div
              className={`hidden md:block ${
                originDestinationOptions[0]?.flightSegments[0]?.seatsRemaining >
                5
                  ? "text-[#0D7066]"
                  : "text-[#FF1D23]"
              } text-center`}
            >
              {originDestinationOptions[0]?.flightSegments[0]?.seatsRemaining}{" "}
              باقیمانده
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 p-2 flex justify-between md:flex-col md:justify-center items-center md:w-1/4 md:border-r border-t md:border-t-0 gap-1">
        <div
          className={`${
            originDestinationOptions[0]?.flightSegments[0]?.seatsRemaining > 5
              ? "text-[#0D7066]"
              : "text-[#FF1D23]"
          } text-center md:hidden`}
        >
          {" "}
          {originDestinationOptions[0]?.flightSegments[0]?.seatsRemaining}{" "}
          باقیمانده
        </div>
        <div className="text-[#0D7066]">
          <span className="text-2xl">
            {addComma(airItineraryPricingInfo?.itinTotalFare?.totalFare)}
          </span>
          ریال
        </div>
        <button className="hidden md:block w-full bg-[#3662db] h-[42px] rounded-full text-white">
          جزيیات و خرید
        </button>
        <div className="hidden md:block text-[10px]">بار و قوانین</div>
      </div>
    </div>
  );
}
