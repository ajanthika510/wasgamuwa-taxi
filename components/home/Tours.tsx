"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  MapPin,
  Star,
  Clock3,
  ArrowRight,
  Route,
} from "lucide-react";





const routes = [

{
title:"Colombo to Kandy Taxi",

location:"Colombo → Kandy",

duration:"3.5 Hours • 115 km",

rating:"4.9",

image:"/images/kandyheri.jpg",

description:
"Comfortable private taxi transfer from Colombo to Kandy with professional drivers and scenic mountain views.",

},



{
title:"Sigiriya to Kandy Taxi",

location:"Sigiriya → Kandy",

duration:"3 Hours • 90 km",

rating:"5.0",

image:"/images/nuwe.jpg",

description:
"Reliable taxi service connecting Sigiriya and Kandy with flexible pickup locations and comfortable vehicles.",

},



{
title:"Airport to Sigiriya Transfer",

location:"Airport → Sigiriya",

duration:"3.5 Hours • 146 km",

rating:"4.9",

image:"/images/sigiriyaex.jpg",

description:
"Direct airport taxi transfer to Sigiriya Lion Rock with experienced local drivers.",

},



{
title:"Sigiriya to Ella Taxi",

location:"Sigiriya → Ella",

duration:"4.5 Hours • 177 km",

rating:"5.0",

image:"/images/ellaAd.jpg",

description:
"Enjoy a scenic private journey from Sigiriya to Ella through Sri Lanka's beautiful countryside.",

},



{
title:"Airport to Wasgamuwa Taxi",

location:"Airport → Wasgamuwa",

duration:"4.5 Hours • 205 km",

rating:"5.0",

image:"/images/yala.jpg",

description:
"Safe long-distance airport transfer service to Wasgamuwa with comfortable private vehicles.",

},


];









export default function Tours(){


const [active,setActive] = useState(0);



return (

<section

id="routes"

className="
relative
overflow-hidden
bg-[#F7FAF7]
py-20
md:py-28
lg:py-32
"

>







{/* BACKGROUND */}


<div

className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,#DCFCE7,transparent_50%)]
"

/>









{/* GREEN GLOW */}


<motion.div


animate={{

x:[-100,100,-100],

y:[-50,80,-50]

}}



transition={{

duration:18,

repeat:Infinity,

ease:"easeInOut"

}}



className="
absolute
top-20
left-10

h-[300px]
w-[300px]

sm:h-[350px]
sm:w-[350px]

rounded-full

bg-green-400/20

blur-[150px]

"

/>










{/* EMERALD GLOW */}


<motion.div


animate={{

x:[100,-100,100],

y:[50,-50,50]

}}



transition={{

duration:20,

repeat:Infinity,

ease:"easeInOut"

}}



className="
absolute
bottom-10
right-10

h-[320px]
w-[320px]

sm:h-[400px]
sm:w-[400px]

rounded-full

bg-emerald-500/20

blur-[160px]

"

/>









<div

className="
relative
container
mx-auto
px-5
sm:px-6

"

>









{/* HEADING */}


<motion.div


initial={{

opacity:0,

y:50

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
text-center

"

>






<span

className="
inline-flex
items-center
gap-2

rounded-full

border

border-emerald-400/30

bg-emerald-400/10

px-5

py-2

text-sm

font-medium

text-emerald-700

"

>


<Route size={16}/>


POPULAR TAXI ROUTES


</span>









<h2


className="
mt-8

font-[Playfair_Display]

text-4xl

font-bold

text-slate-900

sm:text-5xl

md:text-6xl

"

>


Travel Across

<br/>


<span

className="
text-emerald-600

"

>

Sri Lanka

</span>



</h2>








<p

className="
mx-auto

mt-5

max-w-2xl

text-sm

text-slate-500

sm:text-base

"

>


Private taxi transfers connecting
Sri Lanka's most popular destinations.


</p>





</motion.div>
{/* CONTENT */}

<div

className="
mt-14
grid
gap-8
md:mt-20
md:gap-12
lg:grid-cols-2

"

>







{/* MAIN IMAGE */}


<AnimatePresence mode="wait">


<motion.div


key={active}



initial={{

opacity:0,

scale:1.15,

filter:"blur(12px)"

}}



animate={{

opacity:1,

scale:1,

filter:"blur(0px)"

}}



exit={{

opacity:0,

scale:.9

}}



transition={{

duration:.8

}}



className="
relative

h-[480px]

overflow-hidden

rounded-[32px]

border

border-emerald-300

shadow-2xl

shadow-green-900/20

sm:h-[550px]

lg:h-[650px]

"

>





<Image


src={routes[active].image}

alt={routes[active].title}

fill

priority

className="
object-cover

transition

duration-700

"

/>








{/* DARK FOREST OVERLAY */}


<div

className="
absolute

inset-0

bg-gradient-to-t

from-[#031A12]

via-[#031A12]/60

to-transparent

"

/>









<div

className="
absolute

bottom-0

p-6

text-white

sm:p-8

lg:p-10

"

>









{/* INFO BADGES */}


<div

className="
mb-5

flex

flex-wrap

gap-4

text-sm

text-white/80

"

>







<span

className="
flex

items-center

gap-2

"

>


<MapPin

size={17}

className="
text-green-400

"

/>


{routes[active].location}


</span>










<span

className="
flex

items-center

gap-2

"

>


<Clock3

size={17}

className="
text-emerald-400

"

/>



{routes[active].duration}



</span>









<span

className="
flex

items-center

gap-2

"

>


<Star

size={17}

className="
fill-green-400

text-green-400

"

/>



{routes[active].rating}



</span>






</div>












{/* TITLE */}


<h3


className="
font-[Playfair_Display]

text-3xl

font-bold

sm:text-4xl

md:text-5xl

"

>


{routes[active].title}


</h3>









<p


className="
mt-5

max-w-xl

text-base

text-white/80

sm:text-lg

"

>


{routes[active].description}


</p>












{/* BUTTON */}


<Link href="#hero">



<motion.button


whileHover={{

scale:1.05

}}



className="
mt-8

flex

items-center

gap-3


rounded-full


bg-gradient-to-r

from-green-300

to-emerald-600


px-7

py-3


font-semibold


text-[#031A12]


shadow-lg


shadow-green-900/30


transition


sm:px-8

sm:py-4

"

>


Book Taxi



<ArrowRight

size={18}

/>



</motion.button>


</Link>









</div>








</motion.div>



</AnimatePresence>
{/* ROUTE LIST */}


<div

className="
space-y-5

"

>



{

routes.map((route,index)=>(


<motion.div



key={route.title}





initial={{

opacity:0,

x:50

}}





whileInView={{

opacity:1,

x:0

}}





viewport={{

once:true

}}





transition={{

delay:index*0.1

}}





whileHover={{

x:15,

scale:1.03

}}





onClick={()=>setActive(index)}







className={`

cursor-pointer

rounded-3xl

border

p-4

sm:p-5

bg-white

transition-all

duration-300



${

active===index

?

"border-emerald-400 shadow-xl shadow-green-200"

:

"border-slate-200 hover:border-green-300"

}

`}



>



<div

className="
flex

gap-4

sm:gap-5

"

>









{/* IMAGE */}


<div


className="
relative

h-24

w-28

shrink-0

overflow-hidden

rounded-2xl

sm:h-28

sm:w-36

"

>


<Image


src={route.image}

alt={route.title}

fill


className="
object-cover

transition

duration-700

hover:scale-110

"

/>



</div>












{/* DETAILS */}


<div

className="
flex-1

"

>









<h3


className="
text-base

font-bold

text-slate-900

sm:text-xl

"

>


{route.title}



</h3>









<p


className="
mt-2

text-sm

font-medium

text-emerald-700

"

>


{route.location}



</p>









<p


className="
mt-2

text-sm

text-slate-500

"

>


{route.duration}



</p>












{/* RATING */}


<div


className="
mt-3

inline-flex

items-center

gap-1


rounded-full


bg-green-50


px-3


py-1


text-xs


font-semibold


text-green-700

"

>



<Star


size={13}


className="
fill-green-500

text-green-500

"

/>





{route.rating}


Rated Route



</div>







</div>









</div>






</motion.div>



))

}



</div>







</div>


</div>


</section>



);

}