import { createSlice } from "@reduxjs/toolkit"
const habits = [
    {
        id: 1,
        title: "Пить воду утром",
        days: Array.from({ length: 31 }, (_, i) => ({ day: i + 1, status: false })),
    },
    {
        id: 2,
        title: "Делать зарядку",
        days: Array.from({ length: 31 }, (_, i) => ({ day: i + 1, status: false })),
    },
    {
        id: 3,
        title: "Читать книгу",
        days: Array.from({ length: 31 }, (_, i) => ({ day: i + 1, status: false })),
    },
]
const slice = createSlice({
    name: 'habits',
    initialState: habits,
    reducers: {
        add_new: function (state, param) {
            return [...state, {
                id: state.length + 1,
                title: param.payload,
                days: Array.from({ length: 31 }, (_, i) => ({ day: i + 1, status: false })),
            }]
        },
        change_checkbox: function (state, param) {
            // const { status, day, id } = param.payload
            // const habit = state.filter((el) =>
            //     el.id == id)
            // console.log(habit);
            const { id, day } = param.payload;
            const habit = state.find(item => item.id === id);

            const dayToUpdate = habit.days.find(d => d.day === day);

            dayToUpdate.status = !dayToUpdate.status;

        }
    }
}
)

export const { add_new, change_checkbox } = slice.actions // dispatch
export default slice.reducer // store