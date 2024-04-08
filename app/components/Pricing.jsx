import { CheckIcon } from '@heroicons/react/24/outline';
import SparklesPreview from './Animation';

const Pricing = () => {
  return (
    <div className="w-full py-10 mt-12">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center">
          <h2 className="text-[color:var(--Primary,#FFF)] [font-family:Sora] text-4xl md:text-5xl font-semibold mb-5  leading-[140%]">
            <span className="block">
              The right pricing for Your App
            </span>
          </h2>
          <p className="text-center text-gray-600">
            It features various App Specific Notification Plans
          </p>
          <div className='mt-5'>

          <SparklesPreview/>
          </div>
        </div>
        <div className="flex flex-col  p-10 space-x-0 space-y-5  rounded-lg md:space-y-0 md:space-x-5 md:flex-row">
          <div className="  flex flex-col items-start bg-[rgba(255, 255, 255, 0.5)]  overflow-hidden  border rounded-lg md:w-1/2">
            <div className="w-full p-10 space-y-5">
              <span className="px-5 py-1 text-sm text-blue-600 uppercase bg-blue-100 rounded-full">
                Explorer
              </span>
              <h2 className="space-x-2 text-6xl">
                <span className="font-extrabold text-white">Free</span>
                <small className="text-lg text-gray-400">for life!</small>
              </h2>
            </div>
            <div className="flex flex-col w-full h-full p-10 space-y-5 border-t">
              <a
                className="px-10 py-3 text-lg text-center text-black  rounded shadow bg-white"
                href="#!"
              >
                Get Started
              </a>
              <div className="space-y-5 text-white">
                <h6 className="uppercase">What&apos;s Included</h6>
                <ul className="leading-10 list-none list-inside">
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>One App</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Broadcast Message</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>User Analytics</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>500 Users per App</span>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
          <div className=" h-[60%] flex flex-col items-start overflow-hidden  border rounded-lg md:w-1/2">
            <div className="w-full p-10 space-y-5">
              <span className="px-5 py-1 text-sm text-blue-600 uppercase bg-blue-100 rounded-full">
                Premium
              </span>
              <h2 className="space-x-2 text-white text-6xl">
                <span className="font-extrabold">$10</span>
                <small className="text-lg text-gray-400">per month</small>
              </h2>
            </div>
            <div className="flex flex-col w-full h-full p-10 space-y-5  border-t">
              <a
                className="px-10 py-3 text-lg text-center text-black  rounded shadow bg-white"
                href="#!"
              >
                Get Started with Premium
              </a>
              <div className="space-y-5 text-white">
                <h6 className="uppercase">What&apos;s Included</h6>
                <ul className="leading-10 list-disc list-inside">
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Everything in Explorer</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Targeted Notifications</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Upto 5 topics creations</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Users Stats and Analytics</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>On-chain Activity Tracker</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Custom Data Parser</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>10K Users Per App</span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;