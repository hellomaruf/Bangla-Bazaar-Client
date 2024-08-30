import { cn } from "../../lib/utils";
import { CardStack } from "../ui/card-stack";

function FAQs() {
  return (
    <div className="max-w-7xl py-10 mx-auto">
      <h2 className="text-2xl text-center pb-8">FAQs & Client Says</h2>
      <div className="grid grid-cols-6 ">
        <div className=" col-span-2 ">
          <CardStack items={CARDS} />
        </div>
        <div className=" col-span-4">
          <div className="space-y-4">
            <details
              className="group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 className="font-medium">What is your policy on refunds?</h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700">
                We offer a refund or return policy of seven (7) days on most
                unopened or unspoilt packaged products. <br />
                1. For perishable products such as milk, fruits, and fresh
                vegetables, we have a 1 (one) day return policy. <br />
                2. Diaper items must be returned for refunds before 10% or 3
                pieces (whichever comes first) have been used. <br />
                3. Certain products; Face Mask, Disposable Vinyl Gloves, Alcohol
                Pads, and Covid Testing Kits are not acceptable for refund or
                return either opened or unopened. <br />
              </p>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 className="font-medium">What are your delivery hours?</h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700">
                We deliver from 7.30 am to 11 pm every day. You can choose from
                available slots to find something that is convenient for you.
              </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 className="font-medium">What about the prices?</h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Our prices are our own but we try our best to offer them to you
                at or below market prices. Our prices are the same as the local
                market and we are working hard to get them even lower! If you
                feel that any product is priced unfairly, please let us know.
              </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 className="font-medium">Do you serve my area?</h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-700">
                We are currently serving in three big cities of Bangladesh
                including Dhaka, Chattogram, Jashore.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

// Small utility to highlight the content of a specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

export default FAQs;
const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of <Highlight>Fight Club</Highlight> is that you do not
        talk about fight club. The second rule of{" "}
        <Highlight>Fight Club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
