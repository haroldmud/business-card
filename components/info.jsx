export default function Info(props){
  return(
    <div>
        <div className="flex justify-center">
        <img className="w-[317px] h-[317px]" src="/images/picture.png" alt="" />
        </div>
        <div>
          <div className="flex flex-col gap-[6.81px]">
            <div className="flex flex-col gap-[4.19px]">
              <h2 className={`text-white text-[25px] text-center font-[700] ${props.title ?"text-[#DCDCDC]": "text-[#161619]"}`}>Laura Smith</h2>
              <h3 className="text-[#f3bf99] text-[12.8px] text-center">Frontend Developer</h3>
            </div>
            <h4 className={`text-[10.24px] text-center text-white ${props.title ?"text-[#DCDCDC]": "text-[#161619]"}`}>laurasmith.website</h4>
          </div>
        </div>
        <div className="flex justify-center gap-[17px] mt-[15px] mb-[33px]">
          <button className="flex rounded-[6px] justify-center bg-white gap-[9.6px] w-[115px]">
            <div className="py-[1rem]">
              <img  src="/icons/email.png" alt="" />
            </div>
            <h3 className="text-[#23252c] text-[16px] font-[500] py-[9px]">Email</h3>
          </button>
          <button className="flex rounded-[6px] justify-center bg-[#5093e2] gap-[9.6px] w-[115px]">
            <div className="py-[1rem]">
              <img  src="/icons/in.png" alt="" />
            </div>
            <h3 className="text-white text-[16px] font-[500] py-[9px]">LinkedIn</h3>
          </button>
        </div>
    </div>
  )
}