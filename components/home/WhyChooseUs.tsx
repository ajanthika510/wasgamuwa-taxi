"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Plane,
  MapPinned,
  Headset,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";


const features = [
  {
    title: "Safe & Secure",
    description: "Licensed drivers and insured vehicles for every journey.",
    icon: ShieldCheck,
    className: "md:col-span-2 md:row-span-2",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "24/7 Service",
    description: "Always available whenever you need a ride.",
    icon: Clock3,
    gradient: "from-orange-400 to-amber-500",
  },
  {
    title: "Airport Transfer",
    description: "On-time pickup & drop-off.",
    icon: Plane,
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    title: "Island Tours",
    description: "Private tours across Sri Lanka.",
    icon: MapPinned,
    className: "md:col-span-2",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Professional",
    description: "Clean vehicles with experienced chauffeurs.",
    icon: BadgeCheck,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Support",
    description: "Instant WhatsApp & phone support.",
    icon: Headset,
    gradient: "from-blue-900 to-indigo-500",
  },
];



export default function WhyChooseUs() {


return (

<section
className="
relative
overflow-hidden
bg-gradient-to-b
from-[#F4FFF8]
via-[#FFFFFF]
to-[#ECFDF5]
py-28
"
>


{/* Background */}

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,#DCFCE7,transparent_45%)]
"
/>



{/* left Glow */}

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
left-[-150px]
top-20
h-[500px]
w-[500px]
rounded-full
bg-green-500/15
blur-[180px]
"

/>




{/* right Glow */}

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
right-[-150px]
bottom-0
h-[450px]
w-[450px]
rounded-full
bg-emerald-500/15
blur-[180px]
"

/>




{/* Golden Glow */}

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_bottom_right,#86EFAC30,transparent_40%)]
"
/>

<div
className="
container
relative
mx-auto
px-6
"
>



{/* Heading */}

<div className="mb-16 text-center">


<span
className="
inline-flex
rounded-full
border
border-green-300
bg-green-100
text-green-700
px-5
py-2
text-sm
font-semibold
"
>

WHY CHOOSE US

</span>




<h2
className="
mt-6
font-[Playfair_Display]
text-5xl
font-bold
text-slate-900
"
>

Travel Sri Lanka with Confidence

</h2>




<p
className="
mx-auto
mt-5
max-w-2xl
text-slate-500
"
>

More than a taxi service—we deliver premium journeys with comfort,
safety and reliability.

</p>


</div>


{/* Cards */}
<div
className="
grid
gap-10
md:grid-cols-3
"
>


{
features.map((item,i)=>{


const Icon=item.icon;


return (


<motion.div

key={item.title}


initial={{
opacity:0,
y:60,
scale:.9
}}


whileInView={{
opacity:1,
y:0,
scale:1
}}


viewport={{
once:true
}}


transition={{
duration:.7,
delay:i*.1,
ease:[0.22,1,0.36,1]
}}


animate={{
y:[0,-8,0]
}}


whileHover={{
y:-15,
scale:1.04
}}



className="
group
relative
overflow-hidden
rounded-3xl
border
border-slate-400/80
bg-white/80
backdrop-blur-2xl
shadow-[0_25px_60px_rgba(22,163,74,0.12)]
p-8
h-[280px]

transition-all
duration-500
"

>




{/* Animated Glow */}

<motion.div

animate={{
scale:[1,1.3,1],
opacity:[0.15,0.35,0.15]
}}

transition={{
repeat:Infinity,
duration:5,
delay:i*.3
}}


className={`

absolute
-right-16
-top-16

h-52
w-52

rounded-full

bg-gradient-to-r

${item.gradient}

blur-3xl

`}

/>





{/* Shine */}

<div
className="
absolute
inset-0

-translate-x-full

bg-gradient-to-r

from-transparent
via-white/50
to-transparent

group-hover:translate-x-full

transition-transform

duration-1000
"
/>


<div
className="
relative
flex
h-full
flex-col
justify-between
"
>






<div
className="
flex
items-center
justify-between
"
>




<motion.div

whileHover={{
rotate:12,
scale:1.15
}}

transition={{
type:"spring",
stiffness:300
}}


className={`

flex
h-16
w-16

items-center
justify-center

rounded-2xl

bg-gradient-to-br

${item.gradient}

`}

>


<Icon
size={30}
className="text-white"
/>


</motion.div>






<motion.div

animate={{
x:[0,5,0]
}}

transition={{
repeat:Infinity,
duration:2
}}

>


<ArrowUpRight

className="
text-slate-400
transition
group-hover:text-green-600
"

/>

</motion.div>
</div>


<div>


<h3
className="
mb-4
text-2xl
font-bold
text-slate-900
"
>

{item.title}

</h3>



<p
className="
leading-7
text-slate-500
"
>

{item.description}

</p>


</div>







<motion.div

initial={{
width:0
}}

whileHover={{
width:"100%"
}}

transition={{
duration:.5
}}

className={`

h-1

rounded-full

bg-gradient-to-r

${item.gradient}

`}

/>


</div>






{/* Premium Border */}

<motion.div

animate={{
opacity:[0.2,0.6,0.2]
}}

transition={{
repeat:Infinity,
duration:3
}}

className="
absolute
inset-0
rounded-3xl

border
border-green-200/70
"

/>



</motion.div>


)

})

}



</div>



</div>



</section>


);

}