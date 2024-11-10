  import Image from "next/image"
    export default function Home (){
      return(
        <main>
          <section className=" flex">
           <div className="mt-24 ml-16">
            <div className="">
              <h1 className=" text-white hover:text-purple-800 text-3xl">  Habib ur rehman</h1>
              <div className="flex mt-10 text-5xl">
                <h1 className="text-white hover:text-purple-800">
                  I am 
                </h1>
                <h1 className="text-purple-800 hover:text-white"> Front-end developer</h1>
              </div>
              </div>
              
            <p className="mt-6 text-white text-2xl hover:text-purple-800"> crafting seamless user experience with clean code and crative </p>
              <p className="text-white text-2xl hover:text-purple-800"> Design.Sleek,responsive interfaces.Turning design into interactive experience.
                </p>
              <p className="text-white hover:text-purple-800">
            </p>
            <h1 className="text-white mt-10 text-3xl hover:text-purple-800"> </h1>
            <button className="mt text-white bg-black hover:bg-purple-800 rounded-full px-4 border-2 border-solid border-purple-800 "> RESUME</button>
            </div> 
            <div className="ml-14 mt-20">
              <Image width={500} height={500} src="/man.jpg"alt="man in black"/>
            </div>
          </section>
        </main>
      )
    }
      
          
      
      
    