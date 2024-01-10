const SpinnerBall = () => {
  return (
    <div className="relative h-3 w-3 flex" data-testid="spinner">
      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
    </div>
  );
};

export default SpinnerBall;
