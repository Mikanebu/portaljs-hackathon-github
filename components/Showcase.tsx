import Image from 'next/image';

type HeroPropType = {
  highlightedText?: string
  subtext?: string
  subtext1?: string
}

export default function Showcase( {
  highlightedText = "Comparison of GDP data to house pricing in the United Kingdom",
  subtext = "Using open core datasets we can discover the connection between GDP data to house price in UK",
  subtext1 = "By comparing historical data from GDP and house prices of the UK, we can find some similarities on a particular year range, for example, by analyzing data on house prices, we can see that price decreases from 1989 to 1993 and 2007 to 2009, respectively if you grab that range from GDP data, there also some drops. Therefore, we can conclude that an increase in GDP rate directly affects house pricing. Also we included population data in order to get GRP per capita to get more clear analysis. This is a demo showcase. For more details about datasets and their description, please see section below <UK economics Datasets>"
}: HeroPropType) {
  return (
    <div className="overflow-y-hidden bg-blue-100 pb-12 lg:min-h-[700px]">
      <>
        <div className="bg-blue-100">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="mb-5 w-11/12 flex-col items-center justify-center sm:mb-10  sm:w-2/3 lg:flex">
              <h1 className="text-center text-2xl font-black leading-7 text-gray-00 sm:text-3xl md:text-4xl md:leading-10 lg:text-5xl xl:text-1xl">
                <span className="text-[#869df9]"> {highlightedText} </span>
              </h1>
              <p className="mt-5 text-center text-sm font-normal text-gray-400 sm:mt-10 sm:text-lg lg:w-10/12">
                {subtext}
              </p>
            </div>
            <div className="mb-5  flex-col items-center justify-center sm:mb-10 lg:flex">
              <p className="mt-5 text-center text-sm font-normal text-gray-400 sm:mt-10 sm:text-lg lg:w-10/12">
                {subtext1}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
            <Image
                src="/image/gdp.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <Image
                  src="/image/house_prices.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
            </div>
          </div>
        </div>
      </>
    </div>
  )
}
