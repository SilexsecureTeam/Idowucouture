import { MailIcon } from "lucide-react"

const Secondletter = () => {
  return (
    <div>
      <div className="bg-black w-full text-white md:p-8 py-5 my-8 rounded-xl flex items-center justify-between">
        <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div className="text-2xl md:text-[40px] font-bold max-w-[551px] text-center md:text-left">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </div>
          <form className="flex flex-col gap-2 max-w-[350px] w-full">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 pl-8 py-3 rounded-3xl bg-white max-w-[350px] w-full outline-none text-black flex-1"
              />
              <MailIcon className="absolute left-2 text-black opacity-80 w-[20px] top-3" />
            </div>
            <button className="bg-white text-black max-w-[350px] w-full px-4 py-3 rounded-3xl font-semibold hover:bg-gray-200 transition">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Secondletter
