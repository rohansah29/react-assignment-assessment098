export const initState = {
  loading: false,
  data: [],
  error: false,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_DATA_LOADING": {
      return {
        loading: true,
        data: [],
        error: false,
      };
    }
    case "FETCH_DATA_SUCCESS": {
      return {
        loading: false,
        data: payload,
        error: false,
      };
    }
    case "FETCH_DATA_FAILURE": {
      return {
        loading: false,
        data: [],
        error: true,
      };
    }
    default: {
      throw new Error(`invalid action type`);
    }
  }
};
