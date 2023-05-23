export const handlePending = state => {
  return { ...state, isLoading: true };
};

export const handleRejected = (state, { payload }) => {
  return { ...state, error: payload, isLoading: false };
};

export const handleFulfilled = (state, { payload }) => {
  return { ...state, isLoading: false, error: null };
};

export const handleFulfilledGet = (state, { payload }) => {
  return { ...state, items: payload };
};

export const handleFulfilledAdd = (state, { payload }) => {
  return {
    ...state,
    items: [...state.items, payload],
  };
};

export const handleFulfilledDelete = (state, { payload }) => {
  return {
    ...state,
    items: state.items.filter(item => item.id !== payload.id),
  };
};
