export function reducer(state, action) {
  switch (action.type) {
    case "Update-Grouping":
      localStorage.setItem("Grouping", action.payload);
      return { ...state, grouping: action.payload };
    case "Update-Ordering":
      localStorage.setItem("Ordering", action.payload);
      return { ...state, ordering: action.payload };
    case "Add-Data":
      return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
}
