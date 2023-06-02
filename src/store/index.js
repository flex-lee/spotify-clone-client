import { configureStore } from "@reduxjs/toolkit";

import search from "./features/search";
import play from "./features/play";
import user from "./features/user";

const store = configureStore({
  reducer: {
    search,
    play,
    user,
  },
});

export default store;
