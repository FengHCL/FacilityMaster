define(function() {
    return {
        isHoliday({
            day,
            month,
            year
        }) {
            const weekDay = new Date(year, month - 1, day).getDay();
            if (weekDay === 0 || weekDay === 6) {
                return true;
            }
            //Monaco
            //       if((day === 1 && month === 1) || (day === 6 && month === 1) || 
            //          (day === 1 && month === 5) || (day === 15 && month === 8) || 
            //          (day === 1 && month === 11) || (day === 19 && month === 11) || 
            //          (day === 8 && month === 12) || (day === 25 && month === 12)) {
            //         return true;
            //       }
            //Kenia
            if ((day === 1 && month === 1) || (day === 1 && month === 5) || (day === 1 && month === 6) || (day === 10 && month === 10) || (day === 20 && month === 10) || (day === 12 && month === 12) || (day === 25 && month === 12) || (day === 26 && month === 12)) {
                return true;
            }
            //Monaco
            //       if((day === 10 && month === 4 && year === 2023) || (day === 18 && month === 5 && year === 2023) ||
            //          (day === 29 && month === 5 && year === 2023) || (day === 8 && month === 6 && year === 2023) ||
            //          (day === 1 && month === 4 && year === 2024) || (day === 9 && month === 5 && year === 2024) ||
            //          (day === 20 && month === 5 && year === 2024) || (day === 30 && month === 5 && year === 2024) ||
            //          (day === 21 && month === 4 && year === 2025) || (day === 29 && month === 5 && year === 2025) ||
            //          (day === 9 && month === 6 && year === 2025) || (day === 19 && month === 6 && year === 2025) ||
            //          (day === 6 && month === 4 && year === 2026) || (day === 14 && month === 5 && year === 2026) ||
            //          (day === 25 && month === 5 && year === 2026) || (day === 4 && month === 6 && year === 2026) ||
            //          (day === 29 && month === 3 && year === 2027) || (day === 6 && month === 5 && year === 2027) ||
            //          (day === 17 && month === 5 && year === 2027) || (day === 27 && month === 5 && year === 2027)){
            //         return true;
            //       }
            //Kenia
            if ((day === 29 && month === 3 && year === 2024) || (day === 31 && month === 3 && year === 2024) || (day === 1 && month === 4 && year === 2024) || (day === 10 && month === 4 && year === 2024) || (day === 17 && month === 6 && year === 2024) || (day === 18 && month === 4 && year === 2025) || (day === 21 && month === 4 && year === 2025) || (day === 2 && month === 6 && year === 2025)) {
                return true;
            }
            return false;
        }
    };
});