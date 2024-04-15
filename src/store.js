import { configureStore } from '@reduxjs/toolkit'
import Score from "./features/score"

export default configureStore({
    reducer: {
        scoreStore: Score
    },
})