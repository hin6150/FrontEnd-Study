import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(state) {
      return "john" + state;
    },
  },
});

export let { changeName } = user.actions;

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseCount(state, actions) {
      // state.map((data) =>
      //   data.id === actions.payload ? (data.count += 1) : null
      // );
      let idx = state.findIndex((a) => a.id === actions.payload);
      state[idx].count++;
    },
    addCart(state, actions) {
      let order = {
        id: actions.payload.id,
        name: actions.payload.title,
        count: 1,
      };
      let idx = state.findIndex((a) => a.id === actions.payload.id);

      idx === -1 ? state.push(order) : state[idx].count++;
    },
  },
});

export let { increaseCount, addCart } = cart.actions;

export default configureStore({
  reducer: { user: user.reducer, cart: cart.reducer },
});
