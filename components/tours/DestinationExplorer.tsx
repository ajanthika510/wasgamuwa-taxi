"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  MapPin,
  Mountain,
  Waves,
  ArrowRight,
} from "lucide-react";


const destinations = [
  {
    id: 1,
    name: "South Coast Sri Lanka",
    type: "beach",
    image: "/images/beach.jpg",
    description:
      "Discover Sri Lanka's tropical paradise with golden beaches, crystal waters, surfing spots and unforgettable ocean experiences.",
    highlights:[
      "Mirissa Beach",
      "Unawatuna Beach",
      "Weligama Bay",
      "Whale Watching",
    ],
  },

  {
    id:2,
    name:"Sigiriya",
    type:"heritage",
    image:"/images/sigiriyaex.jpg",
    description:
      "Climb the famous Lion Rock Fortress and discover Sri Lanka's ancient heritage.",
    highlights:[
      "Lion Rock",
      "Village Tour",
      "Pidurangala",
    ],
  },


  {
    id:3,
    name:"Yala",
    type:"wildlife",
    image:"/images/yala.jpg",
    description:
      "Experience thrilling wildlife safaris with elephants, leopards and exotic birds.",
    highlights:[
      "Leopard Safari",
      "Jeep Tour",
      "Wildlife",
    ],
  },


  {
    id:4,
    name:"Galle",
    type:"beach",
    image:"/images/galleher.jpg",
    description:
      "Walk through the historic Dutch Fort, enjoy beaches and stunning sunsets.",
    highlights:[
      "Dutch Fort",
      "Beach",
      "Lighthouse",
    ],
  },


  {
    id:5,
    name:"Ella",
    type:"mountain",
    image:"/images/ellaAd.jpg",
    description:
      "Explore the breathtaking Nine Arch Bridge, Little Adam's Peak and lush tea plantations.",
    highlights:[
      "Nine Arch Bridge",
      "Little Adam's Peak",
      "Tea Factory",
    ],
  },
];



export default function DestinationExplorer(){


const [active,setActive]=useState(0);



return(

<section

className="
relative
overflow-hidden
bg-[#071018]
py-28
"

>


{/* Background Glow */}


<div

className="
absolute
left-0
top-0

h-80
w-80

rounded-full

bg-green-500/10

blur-[140px]

"

/>



<div

className="
absolute
right-0
bottom-0

h-96
w-96

rounded-full

bg-lime-400/10

blur-[160px]

"

/>





<div className="
container
mx-auto
px-6
">





{/* Heading */}


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

viewport={{
once:true
}}

className="
mb-16
text-center
"

>


<span

className="
rounded-full
border
border-green-400/20

bg-green-400/10

px-5
py-2

text-sm

text-green-300
"

>

DESTINATIONS

</span>





<h2

className="
mt-6
text-4xl
md:text-5xl
font-black
text-white
"

>

Discover Amazing Places

</h2>



<p

className="
mx-auto
mt-5
max-w-2xl
text-slate-400
"

>

Select a destination and explore the unforgettable experiences waiting for you in Sri Lanka.

</p>


</motion.div>





<div

className="
grid
items-center
gap-12
lg:grid-cols-2
"

>
  {/* LEFT IMAGE AREA */}

<AnimatePresence mode="wait">

<motion.div

key={active}

initial={{
opacity:0,
x:-40,
scale:.95
}}

animate={{
opacity:1,
x:0,
scale:1
}}

exit={{
opacity:0,
x:40
}}

transition={{
duration:.6
}}

className="
relative
h-[600px]
overflow-hidden
rounded-[40px]
"

>


<Image

src={destinations[active].image}

alt={destinations[active].name}

fill

className="
object-cover
transition
duration-700
"

/>



<div

className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/30
to-transparent
"

/>



<div

className="
absolute
bottom-0
p-8
md:p-10
"

>


<div

className="
mb-4
flex
items-center
gap-2
text-white
"

>


<MapPin

size={18}

className="
text-green-400
"

/>


{destinations[active].name}


</div>




<h3

className="
text-4xl
md:text-5xl
font-bold
text-white
"

>

{destinations[active].name}

</h3>




<p

className="
mt-5
max-w-xl
text-lg
text-white/80
"

>

{destinations[active].description}

</p>





<div

className="
mt-7
flex
flex-wrap
gap-3
"

>


{

destinations[active].highlights.map((item)=>(


<span

key={item}

className="
rounded-full
bg-white/15
px-4
py-2
text-sm
text-white
backdrop-blur-xl
"

>

{item}

</span>


))

}


</div>





<Link href="/#booking"

>

<button

className="
mt-8
flex
items-center
gap-3
rounded-full
bg-gradient-to-r
from-lime-300
to-green-600
px-7
py-4
font-semibold
text-green-950
transition
hover:scale-105
"

>

Book to go to Destination


<ArrowRight size={18}/>


</button>


</Link>




</div>


</motion.div>


</AnimatePresence>









{/* RIGHT DESTINATION LIST */}


<div className="space-y-5">


{

destinations.map((item,index)=>(


<motion.button

key={item.id}

onClick={()=>setActive(index)}

whileHover={{
x:10
}}

className={`

group
flex
w-full
items-center
justify-between
rounded-[28px]
border
p-6
text-left
transition


${
active===index

?

"border-green-400 bg-green-400/10"

:

"border-white/10 bg-white/5 hover:bg-white/10"

}

`}

>


<div

className="
flex
items-center
gap-4
"

>


<div

className={`

flex
h-12
w-12
items-center
justify-center
rounded-xl


${
active===index

?

"bg-lime-300 text-green-950"

:

"bg-white/10 text-white"

}

`}

>


{

item.name==="South Coast Sri Lanka"

?

<Waves size={22}/>

:

<Mountain size={22}/>

}


</div>




<h3

className="
text-xl
font-bold
text-white
"

>

{item.name}

</h3>



</div>






<ArrowRight

className={`

transition


${
active===index

?

"translate-x-2 text-lime-300"

:

"text-slate-500"

}

`}

/>




</motion.button>


))

}


</div>





</div>


</div>


</section>


);

}