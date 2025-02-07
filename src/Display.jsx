/* eslint-disable react/prop-types */

function Display({calVal}) {
  return (
    <input
        className="w-[80%] h-[3rem] m-5 rounded-lg bg-transparent text-white p-2 border-2 "
        type="text"
        value={calVal}
        readOnly
      />
  )
}

export default Display
