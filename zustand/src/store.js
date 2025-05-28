import { create } from "zustand"

const store = (item) => ({
    tasks : [{title:"TestTask", status : "PLANNED"}]
})

export const useStore = create(store)