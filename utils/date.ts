import dayjs from "dayjs";

export function formatDateOrderList(date: string) {
  return dayjs(date).format("YYYY/MM/DD HH:mm");
}
