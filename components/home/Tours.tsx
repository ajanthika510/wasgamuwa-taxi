"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Star,
  Clock3,
  ArrowRight,
} from "lucide-react";


const tours = [
  {
    title: "Ella Adventure",
    location: "Ella",
    duration: "Full Day",
    rating: "4.9",
    image: "/images/ellaAd.jpg",
    description:
      "Discover mountains, waterfalls, Nine Arch Bridge and breathtaking landscapes.",
  },
  {
    title: "Sigiriya Explorer",
    location: "Sigiriya",
    duration: "Day Tour",
    rating: "5.0",
    image: "/images/sigiriyaex.jpg",
    description:
      "Explore the ancient Lion Rock fortress and experience Sri Lankan history.",
  },
  {
    title: "Kandy Heritage",
    location: "Kandy",
    duration: "Day Tour",
    rating: "4.8",
    image: "/images/kandyheri.jpg",
    description:
      "Visit temples, lakes and cultural attractions with a private driver.",
  },
  {
    title: "Yala Safari",
    location: "Yala",
    duration: "Safari Tour",
    rating: "5.0",
    image: "/images/yala.jpg",
    description:
      "Experience wildlife adventures with comfortable private transport.",
  },
];



export default function Tours() {

const [active,setActive] = useState(0);


return (

<section
className="
relative
overflow-hidden
py-32
bg-[#F8FAFC]
"
>


{/* Background */}

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,#E2E8F0,transparent_50%)]
"
/>





{/* Amber Glow */}

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
h-[350px]
w-[350px]
rounded-full
bg-amber-400/20
blur-[150px]
"

/>





{/* Green Glow */}

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
h-[400px]
w-[400px]
rounded-full
bg-emerald-400/20
blur-[160px]
"

/>







<div
className="
relative
container
mx-auto
px-6
"
>





{/* Heading */}

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

className="text-center"

>


<span
className="
inline-flex
rounded-full
border
border-amber-400/30
bg-amber-400/10
px-5
py-2
text-sm
font-medium
text-amber-600
"
>

POPULAR TOURS

</span>





<h2
className="
mt-8
font-[Playfair_Display]
text-5xl
font-bold
text-slate-900
md:text-6xl
"
>

Explore

<span
className="
text-amber-500
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
text-slate-500
"
>

Private taxi journeys designed for unforgettable experiences.

</p>


</motion.div>










<div
className="
mt-20
grid
gap-12
lg:grid-cols-2
"
>







{/* IMAGE AREA */}


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
h-[650px]
overflow-hidden
rounded-[40px]
border
border-slate-200
shadow-2xl
"

>


<Image

src={tours[active].image}

alt={tours[active].title}

fill

className="
object-cover
"

/>





<div
className="
absolute
inset-0
bg-gradient-to-t
from-[#0F172A]
via-black/40
to-transparent
"
/>








<div
className="
absolute
bottom-0
p-10
text-white
"
>





<div
className="
mb-5
flex
gap-5
text-sm
text-white/80
"
>


<span className="flex items-center gap-2">

<MapPin
size={17}
className="text-emerald-400"
/>

{tours[active].location}

</span>





<span className="flex items-center gap-2">

<Clock3
size={17}
className="text-amber-400"
/>

{tours[active].duration}

</span>





<span className="flex items-center gap-2">

<Star
size={17}
className="
fill-amber-400
text-amber-400
"
/>

{tours[active].rating}

</span>


</div>







<h3
className="
font-[Playfair_Display]
text-5xl
font-bold
"
>

{tours[active].title}

</h3>







<p
className="
mt-5
max-w-xl
text-lg
text-white/80
"
>

{tours[active].description}

</p>








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
from-amber-400
to-amber-500
px-8
py-4
font-semibold
text-slate-900
shadow-lg
"

>

Explore Tour

<ArrowRight size={18}/>

</motion.button>





</div>




</motion.div>


</AnimatePresence>












{/* TOUR LIST */}


<div
className="
space-y-5
"
>


{
tours.map((tour,index)=>(


<motion.div

key={tour.title}


initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
delay:index*.1
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
p-5
bg-white
transition

${
active===index

?

"border-amber-400 shadow-xl"

:

"border-slate-200"

}

`}

>






<div
className="
flex
gap-5
"
>





<div
className="
relative
h-28
w-36
overflow-hidden
rounded-2xl
"
>


<Image

src={tour.image}

alt={tour.title}

fill

className="
object-cover
transition
duration-700
hover:scale-110
"

/>


</div>








<div>


<h3

className="
text-2xl
font-bold
text-slate-900
"

>

{tour.title}

</h3>





<p

className="
mt-3
text-slate-500
"

>

{tour.description}

</p>



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