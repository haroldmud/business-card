export default function About(props){
  return(
    <div className="ml-[36px]">
      <h2 className={`font-[700] text-[16px] ${props.textColor ? "text-[#f5f5f5]":"text-[#161619]"}`}>About</h2>
      <p className={`mt-[5px] ${props.textColor ?"text-[#DCDCDC]": "text-[#161619]"}`}>
       I am a frontend developer with a particular interest in making things simple and automating daily tasks.
       I try to keep up with security and best practices, and am always looking for new things to learn.
      </p>
    </div>
  )
}