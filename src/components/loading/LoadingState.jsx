function LoadingState() {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      <div className="h-6 w-3/4 bg-slate-200 rounded"></div>
      <div className="h-4 w-full bg-slate-200 rounded"></div>
      <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
      <div className="h-4 w-4/6 bg-slate-200 rounded"></div>
    </div>
  );
}

export default LoadingState;
