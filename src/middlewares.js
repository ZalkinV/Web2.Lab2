export default function loggerMiddleware(store) {
  return next => action => {
    console.log("Old state", store.getState());
    next(action);
    console.log("New state", store.getState());
  }
}
