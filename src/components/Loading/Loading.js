import React from "react";
import './Loading.css'

const Loading = () => {
  return (
    <div id="loading" className="flex items-center justify-center py-4 pt-16 ">
      <div className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default Loading;