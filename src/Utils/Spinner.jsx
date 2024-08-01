function Spinner() {
  return (
    <div className="flex items-center gap-2 w-full justify-center h-[550px] ">
      <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#36a853]"></div>
      <h2 className="text-2xl font-medium text-[#36a853]">Please Wait.....</h2>
    </div>
  );
}

export default Spinner;
