//@ts-ignore:
// Hiding any errors for being unused, need to implement
import {useState} from "https://esm.sh/stable/preact@10.13.1/deno/hooks.js";
import {motion} from "framer-motion";

// class project {
//     title: string;
//     description: string;
//     link: string;
//     constructor(title: string, description: string, link: string){
//         this.title = title;
//         this.description = description;
//         this.link = link;
//     }
// }
export default function MotionCard(){
    const [isOpen, setIsOpen] = useState(false);
    //work out how to change onClick to onMouseOver
    return (
        <motion.div transition={{layout:{duration: 5,type:"spring"}}}  onClick={() => setIsOpen(!isOpen)} className={"flex flex-col justify-center items-center bg-[#242424] p-4 rounded-md max-w-screen-md px-4 mx-auto"}>
            <motion.div layout="position" classname={"flex flex-col justify-center items-center bg-[#242424] p-4 rounded-md"}>
                <motion.h2 >This is my title</motion.h2>
                {isOpen && (
                    <motion.div layout>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias, aliquam amet atque consequatur consequuntur debitis enim est excepturi hic iste itaque laborum molestias non quasi qui recusandae rem soluta.
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    )
}