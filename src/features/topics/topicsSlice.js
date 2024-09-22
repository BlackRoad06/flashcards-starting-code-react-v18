import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}

    },
    reducers: {
        addTopic : (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = {id, name, icon, quizIds: [] } 
        },
        addQuizId: (state, action) => {
            const {id, topicId} = action.payload;
            state.topics[topicId].quizIds.push(id);
        }
}

});

export const topicsSelector = (state) => state.topics.topics;
export const { addTopic , addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;
