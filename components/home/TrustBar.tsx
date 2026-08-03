"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Clock3,
  Plane,
  Car,
  BadgeCheck,
} from "lucide-react";



const features = [

{
icon:ShieldCheck,
title:"Licensed",
subtitle:"Taxi Service",
},


{
icon:Plane,
title:"Airport",
subtitle:"Transfers",
},


{
icon:Car,
title:"Island-wide",
subtitle:"Tours",
},


{
icon:Clock3,
title:"24/7",
subtitle:"Available",
},


{
icon:BadgeCheck,
title:"English",
subtitle:"Drivers",
},


];








export default function TrustBar(){


return(


<section

className="

relative

overflow-hidden

py-8

sm:py-10

lg:py-14

bg-gradient-to-b

from-[#090909]

via-[#111111]

to-[#1a1028]

"


>



{/* Top Glow */}


<div

className="

absolute

left-1/2

top-0

h-40

w-[22rem]

sm:w-[28rem]

-translate-x-1/2

rounded-full

bg-yellow-400/15

blur-3xl

"

/>







{/* Bottom Glow */}


<div

className="

absolute

bottom-0

left-1/2

h-40

w-[26rem]

sm:w-[34rem]

-translate-x-1/2

rounded-full

bg-purple-700/20

blur-3xl

"

/>








<motion.div


initial={{

opacity:0,

y:35

}}


whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}



transition={{

duration:.7

}}



className="

relative

mx-auto

max-w-7xl

px-4

sm:px-6

lg:px-8

"


>



<div

className="

overflow-hidden

rounded-3xl

border

border-white/10

bg-gradient-to-br

from-white/[0.08]

to-white/[0.03]

backdrop-blur-2xl

shadow-[0_20px_70px_rgba(0,0,0,.45)]

"

>



<div


className="

grid


grid-cols-1


sm:grid-cols-2


md:grid-cols-3


lg:grid-cols-5


"


>



{features.map(
(item,index)=>{


const Icon=item.icon;


return(



<motion.div


key={item.title}


whileHover={{

y:-6

}}



transition={{

duration:.25

}}



className={`

group

relative

flex

items-center

gap-4

p-5

sm:p-6


transition-all


duration-300



${

index < features.length-1

?

"border-b lg:border-b-0"

:

""

}



${

index !== features.length-1

?

"lg:border-r"

:

""

}



`}



>





{/* Hover Background */}


<div

className="

absolute

inset-0

bg-gradient-to-r

from-yellow-400/5

to-transparent

opacity-0

transition-opacity

duration-300

group-hover:opacity-100

"

/>







{/* Icon */}


<div

className="

relative

flex

h-12

w-12


sm:h-14


sm:w-14


shrink-0

items-center

justify-center

rounded-2xl

bg-yellow-400

shadow-lg

transition-all

duration-300

group-hover:scale-110

group-hover:rotate-3

"

>


<Icon

size={22}

className="text-black"

/>



</div>








{/* Text */}


<div

className="relative"

>


<h3

className="

text-base

sm:text-lg

font-bold

text-white

"

>

{item.title}

</h3>




<p

className="

mt-1

text-xs

sm:text-sm

text-white/60

"

>

{item.subtitle}

</p>



</div>






</motion.div>



);


}

)}



</div>



</div>



</motion.div>







{/* Bottom Fade */}


<div

className="

absolute

bottom-0

left-0

right-0

h-20

bg-gradient-to-b

from-transparent

to-[#1a1028]

"

/>



</section>


);


}