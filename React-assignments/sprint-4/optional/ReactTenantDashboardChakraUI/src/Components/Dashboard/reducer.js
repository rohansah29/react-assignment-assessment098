const reducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_HOUSE_DETAILS_REQUEST": {
      return {
        data: [],
        isLoading: true,
        isError: false,
      };
    }
    case "GET_HOUSE_DETAILS_SUCCESS": {
      return {
        data: payload,
        isLoading: false,
        isError: false,
      };
    }
    case "GET_HOUSE_DETAILS_FAILURE": {
      return {
        data: [],
        isLoading: false,
        isError: true,
      };
    }
    default: {
      throw new Error(`Invalid action type ${type}`);
    }
  }
};

export { reducer };
