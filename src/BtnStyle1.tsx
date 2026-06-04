interface Btn1{
  Btn1text: String, 
  destination: String
}


function BtnStyle1({ Btn1text, destination}: Btn1) {
  return (
    <button className="py-2.5 m-4 hover:bg-gray-600 px-6 rounded-full border border-gamma hover:text-alpha transition-all text-white">
      {Btn1text}
    </button>
  );
}

export default BtnStyle1;