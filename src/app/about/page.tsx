import Image from "next/image"
export default function About (){
    return(
        <main>
            <section>
        <div className="  text-white ">
            <div className="flex justify-between">
                <div>
            <h1 className="text-3xl ml-20 mt-12 hover:text-purple-800"> About Me</h1>
            <p className="ml-10 mt-8 hover:text-purple-800">
                Im a passionate front-end developer with a keen eye for design.
            </p>
            <p className="ml-10 hover:text-purple-800"> I specialize in building responsive website that brings</p>
                <p className="ml-10 hover:text-purple-800"> ideas to life through clean and efficent code.</p>
        
            <p className="ml-10 hover:text-purple-800"> With a strong foundation in HTML,CSS AND JAVAScript and modern framework</p>
            <p className="ml-10 hover:text-purple-800">like Next.js. I bridge the gap between design and technology,</p>
            <p className="ml-10 hover:text-purple-800"> ensuring that every project not only looks great but also perfrorm flawlessly</p>
            </div>
            <span className="mr-10 mt-6">
                <Image width={600} height={600}src="/beardman.jpg"alt="shoes"/>
            </span>
            </div>
       </div>
        <span className="flex">
            <button className="text-white bg-black border-2 border-solid hover:bg-purple-800 border-purple-800 rounded-full px-4  mt- mb-10 ml-10"> My tech skills</button>
            <ol className="ml-11 text-white hover:text-purple-800c">
                <li>
                   . javascript
                </li>
                <li> 
                  .  HTML
                </li>
                <li>
                   . css,tailwind css
                </li>
                <li>
                   . next.js
                </li>
            </ol>
        </span>
         </section>
    </main>
    )
}