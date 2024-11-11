import { Iairports } from "./type";

export const addComma = (value: string | number) => {
  const commas = value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return commas;
};

export const convertToTime = (time: string) => {
  return new Date(time).toLocaleString("fa-IR", {
    hour: "numeric",
    minute: "numeric",
  });
};
export const convertLocation = (data: Partial<Iairports>[], selector: string) => {
  return data?.find((item) => item?.iata === selector);
};

export const formatTime = (timeString:string) => {
  const [hours, minutes] = timeString.split(":")?.map(Number);
  return `${hours} ساعت و ${minutes} دقیقه`;
}