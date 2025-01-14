import React from 'react'

const CadastroBanner = () => {
  return (
    <div className="flex w-full items-center justify-start py-4">
      <img
        src="/images/LogoBranca.png"
        alt="logo"
        width={78}
        height={78}
        sizes="200%"
      />
      <h1
        className={`font-coolvetica pl-6 text-[34px] font-semibold text-white`}
      >
        MeuMonitor
      </h1>
    </div>
  )
}

export default CadastroBanner
