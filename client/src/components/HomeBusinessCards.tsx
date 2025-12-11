import { Button } from "@/components/ui/button";

export default function HomeBusinessCards() {
  return (
    <div className="bg-white py-6 px-4">
      <div className="max-w-lg mx-auto flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-24 xl:gap-96">
        {/* For Your Home Section */}
        <div className="w-full max-w-xs md:w-56 flex flex-col justify-start items-center gap-5">
          <div className="w-full px-5 py-2.5 bg-neutral-200 rounded-[10px] flex flex-col justify-start items-center gap-2.5">
            <div className="w-full justify-center text-center">
              <span className="text-indigo-950 text-lg md:text-xl font-bold leading-7 font-parkinsans">
                For Your{' '}
              </span>
              <span className="text-indigo-950 text-lg md:text-xl font-bold leading-7 font-parkinsans">
                Home
              </span>
            </div>
          </div>
          <Button 
            className="w-full p-2.5 bg-red-500 rounded-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center gap-2.5 hover:opacity-90 smooth-transition"
            data-testid="button-home-savings"
          >
            <div className="text-center justify-center text-white text-xs font-normal leading-tight font-corbel">
              Get Your Personalised Savings Report
            </div>
          </Button>
        </div>

        {/* For Your Business Section */}
        <div className="w-full max-w-xs md:w-64 flex flex-col justify-start items-center gap-5">
          <div className="w-full px-5 py-2.5 bg-neutral-200 rounded-[10px] flex flex-col justify-start items-center gap-2.5">
            <div className="w-full justify-center text-center">
              <span className="text-indigo-950 text-lg md:text-xl font-bold leading-7 font-parkinsans">
                For Your{' '}
              </span>
              <span className="text-indigo-950 text-lg md:text-xl font-bold leading-7 font-parkinsans">
                Business
              </span>
            </div>
          </div>
          <Button 
            className="w-full p-2.5 bg-red-500 rounded-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center gap-2.5 hover:opacity-90 smooth-transition"
            data-testid="button-business-savings"
          >
            <div className="text-center justify-center text-white text-xs font-normal leading-tight font-corbel">
              Get Your Personalised Savings Report
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}