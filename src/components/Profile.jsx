import { LogOut, User, Heart, Eye, Settings, Edit2 } from "lucide-react";

const Profile = () => {
  const navItems = [
    { label: "Orders", icon: <User className="w-4 h-4 mr-2 text-[#00659D]" /> },
    {
      label: "Wishlist",
      icon: <Heart className="w-4 h-4 mr-2 text-[#00659D]" />,
    },
    {
      label: "Recently Viewed",
      icon: <Eye className="w-4 h-4 mr-2 text-[#00659D]" />,
    },
    {
      label: "Profile",
      icon: <User className="w-4 h-4 mr-2 text-[#00659D]" />,
    },
    {
      label: "Setting",
      icon: <Settings className="w-4 h-4 mr-2 text-[#00659D]" />,
    },
  ];
  return (
    <div className="min-h-fit bg-white flex flex-col pt-15 md:flex-row px-5 sm:px-10 lg:px-20">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#DCFFEF]  shadow md:mr-8 mb-4 md:mb-0 flex flex-col">
        <div className="bg-green-700 text-white text-center py-4 mon  font-semibold tracking-wide">
          IDOWUCOUTURE ACCOUNT
        </div>
        <nav className="flex-1 px-6 py-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className="flex items-center cursor-pointer hover:bg-green-500 poppins font-normal text-[16px] w-full text-[#00659D] px-2 py-2 rounded transition"
                  aria-label={item.label}
                >
                  {item.icon}
                  <span className="text-black">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-6">
          <button className="w-full flex items-center cursor-pointer justify-center bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition">
            <LogOut className="w-4 h-4 mr-2" />
            LOGOUT
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#DCFFEF] shadow p-4 md:p-8">
        <div className="flex items-center justify-between border-b border-b-C  pb-2 mb-4">
          <h2 className="font-semibold text-lg md:text-xl  text-green-900">
            Account Overview
          </h2>
          <button
            className="text-green-700 hover:bg-green-200 p-2 rounded"
            aria-label="Edit"
          >
            <Edit2 className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Account Details */}
          <section className=" rounded border min-h-[150px] border-[#00659D] ">
            <h3 className="font-medium border-b border-b-[#00659D] p-3 text-black mb-2 text-sm">
              ACCOUNT DETAILS
            </h3>
            <div className="p-4">
              <div className="text-black font-semibold">NSIKAK NELSON</div>
              <div className="text-black text-sm">nsikak.joseph@gmail.com</div>
            </div>
          </section>
          {/* Address Book */}
          <section className="rounded border min-h-[150px] border-[#00659D] ">
            <div className="flex items-center justify-between font-medium border-b border-b-[#00659D] p-3 text-black mb-2 text-sm">
              <h3 className="font-medium  text-sm">ADDRESS BOOK</h3>
              <button
                className="text-green-500 hover:bg-green-100 p-1 rounded"
                aria-label="Edit Address"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
            <div className=" p-4 text-sm">
              24 T Ijagbani Street, Jabi Abuja Nigeria
            </div>
          </section>
          {/* Date of Birth / Marital Status */}
          <section className="rounded border min-h-[150px]  border-[#00659D] ">
            <h3 className="font-medium border-b border-b-[#00659D] p-3 text-black  text-sm">
              Date of birth/Status
            </h3>
            <div className="flex ">
              <div className="w-1/2  border-r h-[100px] flex justify-center items-center border-r-[#00659D]">
                <div className=" text-sm">1/1/1990</div>
              </div>
              <div className="w-1/2   text-black h-[100px] flex justify-center items-center">
                <div className=" text-sm">Married</div>
              </div>
            </div>
          </section>
          {/* Newsletter Preferences */}
          <section className="rounded border min-h-[150px] border-[#00659D] ">
            <h3 className="font-medium border-b border-b-[#00659D] p-3 text-black mb-2 text-sm">
              NEWSLETTER PREFERENCES
            </h3>
            <div className="p-4 text-sm">
              You are currently subscribed to following newsletters:
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
