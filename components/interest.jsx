export default function Interest(props){
  return(
    <div className="ml-[36px] mt-[20px] mb-[27px]">
      <h2 className={`font-[700] text-[16px] ${props.textColor ? "text-[#f5f5f5]":"text-[#161619]"}`}>Interests</h2>
      <p className={`mt-[5px] ${props.textColor ?"text-[#DCDCDC]": "text-[#161619]"}`}>
      Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. 
      Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  )
}
