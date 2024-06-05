import { ref } from 'vue';
// import { notifications } from "../utils/notification";
import type { Holiday } from "../ts/interfaces";

function createHolidaysStore() {
  const holidays = ref<Holiday[]>([]);
  const fetchHolidays = async (year: string): Promise<Holiday[]> => {
    const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/CL`);
    const data = await response.json();
    if (data.errors) {
      //notifications.danger("Something went wrong getting holidays", 2000);
      return [];
    }

    holidays.value = data;
    return data;
  }

  const addHolidays = async (year: string) => {
    const CurrentHolidays = await fetchHolidays(year);
    if (CurrentHolidays.length === 0) {
      // notifications.danger("Something went wrong", 2000);
    } else {
      holidays.value = [...holidays.value, ...CurrentHolidays];
      // notifications.success("Holidays added", 2000);
    }
  }

  return {
    holidays,
    fetchHolidays,
    addHolidays,
  };
}

export const holidaysStore = createHolidaysStore();
