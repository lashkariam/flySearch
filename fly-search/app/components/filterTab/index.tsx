export default function FilterTab() {
  return (
    <div style={{ direction: "ltr" }} className="mx-2 hidden lg:block">
      <div className="flex border border-gray-300 rounded-xl w-3/4 h-20">
        <div className={`flex justify-center items-center flex-1 `}>
          سریعترین
        </div>
        <div className={`flex justify-center items-center flex-1 border-l`}>
          ارزانترین
        </div>
      </div>
    </div>
  );
}
