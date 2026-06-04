
interface Btn2{
  Btn2text: String,
  destination: String
}

function BtnStyle2({ Btn2text, destination}: Btn2) {
  return (
    <button className="py-2.5 px-6 hover:bg-alpha hover:text-gamma hover:border-gamma m-4 border border-transparent ease-in-out duration-300 rounded-full transition-all bg-gamma text-white">
      {Btn2text}
    </button>
  );
}

export default BtnStyle2;
