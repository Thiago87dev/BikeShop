import Link from "next/link"

const Strip = () => {
  return (
    <div className="flex items-center justify-center bg-[#3c3638]">
        <div className="flex flex-col items-center justify-center gap-4 h-[200px] text-white">
            <h1 className="text-[50px] font-bold">Shop</h1>
            <p ><Link href={'/'}><span className="underline">Home</span></Link> / Shop</p>
        </div>
    </div>
  )
}

export default Strip