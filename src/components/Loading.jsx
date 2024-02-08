import { SyncLoader } from "react-spinners";

function Loading() {
  return (
    <div
      className="w-full h-full fixed top-0
     left-0 z-40 bg-white flex justify-center items-center "
    >
      <SyncLoader size={20} color={"hsl(231, 69%, 60%)"} />
    </div>
  );
}

export default Loading;

// import { PulseLoader } from "react-spinners";

// function Loading() {
//   return (
//     <div className="w-full h-full fixed top-0 left-0 z-20 bg-white flex justify-center items-center">
//       <PulseLoader size={20} color={"#212423"} />
//     </div>
//   );
// }

// export default Loading;
