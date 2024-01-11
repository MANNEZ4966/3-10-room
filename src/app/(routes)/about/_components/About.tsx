"use client";

import { DateTime } from "luxon";
import React from "react";

export default () => {
  const [details, setDetails] = React.useState<
    { label: string; description: string }[]
  >([]);

  React.useEffect(() => {
    const targetDate = DateTime.fromISO("2010-04-10T00:00:00.000", {
      zone: "Asia/Bangkok",
    });

    const update = () => {
      const currentDate = DateTime.now().setZone("Asia/Bangkok");
      const age = currentDate.diff(targetDate);

      const totalDays = age.as("days");
      const years = Math.floor(totalDays / 365);
      const remainingDays = totalDays - years * 365;
      const months = Math.floor(remainingDays / 30);
      const days = remainingDays - months * 30;
      const totalHours = age.as("hours");
      const totalMinutes = age.as("minutes");
      const totalSeconds = age.as("seconds");
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setDetails([
        {
          label: "จำนวนคนในห้องทั้งหมด",
          description: "46 คน",
        },
        {
          label: "",
          description: "เว็บนี้สร้างมาเพื่อไรไม่รู้",
        },
        {
          label: "",
          description: "เว็บนี้ใช้ภาษา TypeScript ในการทำ และใช้ Framework Next.JS  และ Host ใน Vercel.com (ไม่มีตังเช่าเครื่อง Server TT)",
        },
      ]);
    };
    update();
  }, []);

  return (
    <React.Fragment>
      <div className="container mx-auto pb-16">
        <h1
          className="text-4xl font-bold mx-4 mt-4 mb-1 cursor-text text-[#ffa42d]"
          data-aos="fade-right"
          data-aos-delay="0"
        >
          About
        </h1>
        <p
          className="mx-8 mb-4 text-xl cursor-text"
          data-aos="fade-right"
          data-aos-delay="50"
        >
          เกี่ยวกับห้องของเรา
        </p>
        {details.map(
          (data: { label: string; description: string }, i: number) => (
            <div data-aos="fade-down" data-aos-delay={`${i * 50}`} key={i}>
              <div className="shadow-lg cursor-pointer transition rounded mx-auto p-4 my-1 w-[95%] bg-white/5 scale-[0.98] hover:bg-[#ffa42d] hover:scale-[1]">
                <label htmlFor={data.label} className="text-slate-500">
                  {data.label}
                </label>
                <p id={data.label} className="mx-2">
                  {data.description}
                </p>
              </div>
            </div>
          ),
        )}
        <div data-aos="fade-down" data-aos-delay={500}>
          <div className="shadow-lg cursor-pointer transition rounded mx-auto p-4 my-1 w-[95%] border border-[#ff00bf] bg-white/5 scale-[0.98] hover:bg-[#ff00bf] hover:border-transperent hover:scale-[1]">
            <label htmlFor="สิ่งที่ผมรัก">You know what?</label>
            <p id="สิ่งที่ผมรัก" className="mx-2">
              Text Here
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
