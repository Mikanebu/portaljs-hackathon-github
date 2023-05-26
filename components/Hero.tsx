type HeroPropType = {
  titleA?: string
  titleB?: string
  highlightedText?: string
  subtext?: string
}

export default function Hero( {
  titleA="",
  highlightedText = "Welcome to the UK economics data portal",
  titleB="",
  subtext = "We do analytics based on commonly-used datasets in high quality, easy-to-use & packaged form which has rich metadata",
}: HeroPropType) {
  return (
    <div className="overflow-y-hidden bg-gray-100 pb-12 lg:min-h-[700px]">
      <>
        <div className="bg-gray-100">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="mb-5 w-11/12 flex-col items-center justify-center sm:mb-10  sm:w-2/3 lg:flex">
              <h1 className="text-center text-2xl font-black leading-7 text-gray-00 sm:text-3xl md:text-4xl md:leading-10 lg:text-5xl xl:text-1xl">
                {titleA}
                <span className="text-[#869df9]"> {highlightedText} </span>
                {titleB}
              </h1>
              <p className="mt-5 text-center text-sm font-normal text-gray-400 sm:mt-10 sm:text-lg lg:w-10/12">
                {subtext}
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}
