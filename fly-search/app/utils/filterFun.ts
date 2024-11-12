/* eslint-disable */
export const filterTicketType = (data: any) => {
  return data?.filter((item: any) => item.isSystem === true);
};

export const filterCargo = (data: any, filter: string) => {
  return data?.filter(
    (item: any) =>
      item.originDestinationOptions[0].flightSegments[0].baggage === filter
  );
};

export const filterSortByTime = (data: any) => {
  return data?.sort(
    (a: any, b: any) =>
      a.originDestinationOptions[0].flightSegments[0].journeyDurationPerMinute -
      b.originDestinationOptions[0].flightSegments[0].journeyDurationPerMinute
  );
};
export const filterSortByCost = (data: any) => {
  return data.pricedItineraries?.sort(
    (a: any, b: any) =>
      a.airItineraryPricingInfo.itinTotalFare.totalFare -
      b.airItineraryPricingInfo.itinTotalFare.totalFare
  );
};
