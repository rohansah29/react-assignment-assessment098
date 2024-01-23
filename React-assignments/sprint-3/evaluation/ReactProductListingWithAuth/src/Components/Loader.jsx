function Loader({loading}) {
  return <h3 data-testid="loading-container">{{loading}?"...Loading":""}</h3>;
}

export default Loader;
