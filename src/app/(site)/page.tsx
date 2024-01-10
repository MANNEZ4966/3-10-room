export default function Home() {
  return (
    <>
      <div
        className="relative h-screen overflow-hidden px-4"
      >
        <img
          className="absolute top-0 left-0 w-full h-full object-cover bg-aura-animate"
          src="/bg-dark-blue-aura.png"
          alt="bg-dark-blue-aura"
        />
        <img
          className="absolute top-0 left-0 w-full h-full object-cover object-left bg-photo"
          src="/background.png"
          alt="Background"
        />

        <div className="relative h-full flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-8xl text-white sm:text-9xl font-bold main-text-animate drop-shadow-md mb-8">
              Welcome To 3/10 Room Website!
            </h1>
            <p className="text-2xl text-white font-thin description-text-animate">
              <span className="whitespace-nowrap">
                กดที่เมนู 2 ขีด ซ้ายบน
              </span>{" "}
              <span className="whitespace-nowrap">
                เพื่อไปยังหน้าที่คุณต้องการ
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
