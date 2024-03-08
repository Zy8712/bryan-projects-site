import LeetCode50 from "../../assets/badges-pins/2023-50.gif";
import MoTW from "../../assets/badges-pins/1st-motw.svg";
import MoTM from "../../assets/badges-pins/1st-motm.svg";

export default function VariousBadges() {
    return (
        <>
            <div className="w-72 h-96 flex flex-col items-center bg-white bg-opacity-20 rounded-2xl">
                <img src={LeetCode50} className="w-56 mt-3" />
                <h3 className="mt-3 text-xl font-bold">LeetCode</h3>
                <p className="mt-1 text-base font-semibold">LeetCode 50 Days Badge</p>
                <p className="mt-1 text-sm font-semibold">Achieved for the Year of 2023</p>
            </div>

            <div className="w-72 h-96 flex flex-col items-center bg-white bg-opacity-20 rounded-2xl">
                <img src={MoTW} className="w-56 mt-3" />
                <h3 className="mt-3 text-xl font-bold">Frontend Mentor</h3>
                <p className="mt-1 text-base font-semibold">Mentor of the Week</p>
                <p className="mt-1 text-sm font-semibold">Achieved for the Week of: <br />Nov 19th, 2023 - Nov 25th, 2023</p>
            </div>

            <div className="w-72 h-96 flex flex-col items-center bg-white bg-opacity-20 rounded-2xl">
                <img src={MoTW} className="w-56 mt-3" />
                <h3 className="mt-4 text-xl font-bold">Frontend Mentor</h3>
                <p className="mt-1 text-base font-semibold">Mentor of the Week</p>
                <p className="mt-1 text-sm font-semibold">Achieved for the Week of: <br />Nov 26th, 2023 - Dec 2nd, 2023</p>
            </div>

            <div className="w-72 h-96 flex flex-col items-center bg-white bg-opacity-20 rounded-2xl">
                <img src={MoTM} className="w-56 mt-3" />
                <h3 className="mt-3 text-xl font-bold">Frontend Mentor</h3>
                <p className="mt-1 text-base font-semibold">Mentor of the Month</p>
                <p className="mt-1 text-sm font-semibold">Achieved for the Month of: <br />November 2023</p>
            </div>
        </>
    );
}