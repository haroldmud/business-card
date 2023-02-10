export default function Footer(props){
  return(
    <div className={`flex justify-center gap-[24px] ${props.light ? "bg-[#161619]":"bg-[#ffff]"  }  pt-[19px] pb-[20px]`}>
      <img className="w-[25px]" src="/icons/twitter.png" alt="" />
      <img className="w-[25px]" src="/icons/fb.png" alt="" />
      <img className="w-[25px]" src="/icons/insta.png" alt="" />
      <img className="w-[25px]" src="/icons/git.png" alt="" />
    </div>
  )
}