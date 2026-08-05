"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  ShieldCheck,
  Users,
  Star,
  ArrowRight,
  Play,
} from "lucide-react";


export default function AboutPage() {

return (

<main className="overflow-hidden bg-[#000000]">


{/* =========================
        HERO SECTION
========================= */}

<section
id="hero"
className="
relative
flex
min-h-screen
items-center
overflow-hidden
bg-[#000000]
pt-20
"
>


{/* BACKGROUND IMAGE */}

<motion.div

initial={{
scale:1
}}

animate={{
scale:1.08
}}

transition={{
duration:20,
repeat:Infinity,
repeatType:"reverse"
}}

className="
absolute
inset-0
"

>

<Image

src="/images/about-bg.avif"
alt="Wasgamuwa Taxi Sri Lanka"
fill
priority
className="
object-cover
"

/>

</motion.div>





{/* DARK GREEN OVERLAY */}

<div
className="
absolute
inset-0
bg-gradient-to-r
from-[#000000]
via-[#000000]/80
to-black/20
"
/>



<div
className="
absolute
inset-0
bg-gradient-to-b
from-[#031A12]/70
via-transparent
to-[#031A12]
"
/>





{/* GREEN LIGHT EFFECTS */}


<motion.div

animate={{
scale:[1,1.15,1],
opacity:[0.2,0.45,0.2]
}}

transition={{
duration:8,
repeat:Infinity
}}

className="
absolute
left-[-200px]
top-10
h-[500px]
w-[500px]
sm:h-[700px]
sm:w-[700px]
rounded-full
bg-emerald-600
blur-[180px]
"

/>



<motion.div

animate={{
scale:[1.1,1,1.1]
}}

transition={{
duration:9,
repeat:Infinity
}}

className="
absolute
right-[-150px]
bottom-[-100px]
h-[400px]
w-[400px]
sm:h-[600px]
sm:w-[600px]
rounded-full
bg-green-400/20
blur-[180px]
"

/>





{/* GRID */}

<div
className="
absolute
inset-0
opacity-[0.05]
bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
bg-[size:70px_70px]
"
/>





{/* CONTAINER */}

<div
className="
relative
z-10
container
mx-auto
grid
items-center
gap-12
px-5
py-24
sm:px-6
md:py-32
lg:grid-cols-2
lg:gap-16
"
>



{/* =====================
      LEFT CONTENT
===================== */}


<motion.div

initial={{
opacity:0,
x:-60
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

>





{/* BADGE */}

<div
className="
inline-flex
items-center
gap-3
rounded-full
border
border-white/10
bg-white/10
px-4
py-2
backdrop-blur-xl
"
>

<ShieldCheck

size={18}

className="
text-green-400
"

/>


<span
className="
text-xs
sm:text-sm
font-semibold
uppercase
tracking-[0.15em]
text-green-300
"
>

Licensed Local Taxi Service

</span>


</div>







{/* TITLE */}


<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:.4
}}

className="
mt-8
font-[Playfair_Display]
text-4xl
sm:text-5xl
md:text-7xl
lg:text-8xl
font-black
leading-[1.05]
text-white
"

>


Explore


<br/>


<span

className="
bg-gradient-to-r
from-green-300
via-emerald-200
to-white
bg-clip-text
text-transparent
"

>

Sri Lanka

</span>


<br/>


In Luxury


</motion.h1>







{/* DESCRIPTION */}


<motion.p

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:.6
}}

className="
mt-8
max-w-xl
text-base
sm:text-lg
md:text-xl
leading-8
text-white/70
"

>

Licensed local taxi service across Sri Lanka with
English-speaking drivers, cash payment options and
24/7 availability.

Enjoy airport transfers, safari adventures and
private island tours with safe, comfortable and
professional travel experiences.

</motion.p>







{/* BUTTONS */}


<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.8
}}

className="
mt-12
flex
flex-col
gap-4
sm:flex-row
"

>


<Link href="/#booking">


<button

className="
group
flex
w-full
sm:w-auto
items-center
justify-center
gap-3
rounded-full
bg-gradient-to-r
from-green-400
to-emerald-300
px-8
py-4
font-semibold
text-[#031A12]
shadow-[0_15px_60px_rgba(34,197,94,.35)]
transition
hover:scale-105
"

>

Book Your Ride


<ArrowRight

className="
transition
group-hover:translate-x-2
"

/>


</button>


</Link>





<a

href="#story"

className="
flex
w-full
sm:w-auto
items-center
justify-center
gap-3
rounded-full
border
border-white/20
bg-white/10
px-8
py-4
font-semibold
text-white
backdrop-blur-xl
hover:bg-white/20
"

>


<Play size={18}/>

Watch Story


</a>



</motion.div>

{/* HERO STATS */}

<div
className="
mt-14
grid
grid-cols-1
gap-4
sm:grid-cols-3
"
>


{[

{
number:"24/7",
title:"Available Service",
icon:ShieldCheck
},

{
number:"EN",
title:"English Driver",
icon:Users
},

{
number:"Cash",
title:"Payment Accepted",
icon:Star
}

].map((item,index)=>{


const Icon=item.icon;


return (


<motion.div

key={item.title}

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:1+(index*.15)
}}

whileHover={{
y:-8
}}

className="
rounded-3xl
border
border-white/10
bg-white/10
p-5
backdrop-blur-xl
hover:border-green-400/30
transition
"

>


<Icon

size={22}

className="
text-green-400
"

/>


<h3

className="
mt-4
text-3xl
font-black
text-white
"

>

{item.number}

</h3>


<p

className="
mt-2
text-sm
text-white/60
"

>

{item.title}

</p>


</motion.div>


)

})}


</div>



</motion.div>





{/* =========================
        RIGHT HERO AREA
========================= */}


<motion.div

initial={{
opacity:0,
x:80
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:1
}}

className="
relative
hidden
min-h-[650px]
lg:block
"

>







{/* RATING CARD */}


<motion.div

animate={{
y:[0,-20,0]
}}

transition={{
duration:6,
repeat:Infinity
}}

className="
absolute
right-0
top-20
z-20
w-72
rounded-[35px]
border
border-white/10
bg-white/10
p-8
backdrop-blur-2xl
"

>


<Star

size={30}

className="
fill-green-400
text-green-400
"

/>


<h3

className="
mt-4
text-3xl
font-bold
text-white
"

>

4.9/5

</h3>



<p

className="
mt-3
leading-7
text-white/70
"

>

Trusted by thousands of travellers
across Sri Lanka.

</p>


</motion.div>









{/* SAFE JOURNEY CARD */}


<motion.div

animate={{
y:[0,18,0]
}}

transition={{
duration:7,
repeat:Infinity
}}

className="
absolute
bottom-24
left-0
z-20
w-80
rounded-[35px]
border
border-white/10
bg-black/40
p-7
backdrop-blur-2xl
"

>


<div

className="
flex
items-center
gap-4
"

>


<div

className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-green-400
"

>

<ShieldCheck

className="
text-[#031A12]
"

/>

</div>





<div>


<h4

className="
font-bold
text-white
"

>

Safe Journey

</h4>


<p

className="
text-sm
text-white/60
"

>

Licensed Professional Drivers

</p>


</div>


</div>







<div

className="
mt-6
h-px
bg-white/10
"

/>







<div

className="
mt-5
grid
grid-cols-2
gap-4
"

>


<div>


<h5

className="
text-xl
font-bold
text-green-400
"

>

10K+

</h5>


<p

className="
text-xs
text-white/60
"

>

Travellers

</p>


</div>





<div>


<h5

className="
text-xl
font-bold
text-green-400
"

>

Island

</h5>


<p

className="
text-xs
text-white/60
"

>

Coverage

</p>


</div>


</div>


</motion.div>




</motion.div>





</div>







{/* SCROLL INDICATOR */}


<motion.div

animate={{
y:[0,15,0]
}}

transition={{
duration:1.8,
repeat:Infinity
}}

className="
absolute
bottom-8
left-1/2
z-20
-translate-x-1/2
"

>


<div

className="
flex
h-14
w-8
justify-center
rounded-full
border
border-white/20
"

>


<div

className="
mt-2
h-3
w-3
rounded-full
bg-green-400
"

/>


</div>


</motion.div>



</section>


{/* =========================
        STORY SECTION
========================= */}


<section

id="story"

className="
relative
overflow-hidden
bg-[#F7FAF7]
py-20
md:py-32
"

>





{/* Background Glow */}


<div

className="
absolute
left-[-150px]
top-20
h-[420px]
w-[420px]
rounded-full
bg-green-100
blur-[120px]
"

/>



<div

className="
absolute
right-[-120px]
bottom-0
h-[450px]
w-[450px]
rounded-full
bg-emerald-100
blur-[140px]
"

/>







<div

className="
container
relative
mx-auto
px-5
sm:px-6
"

>


<div

className="
grid
items-center
gap-12
lg:grid-cols-2
lg:gap-20
"

>









{/* IMAGE */}



<motion.div

initial={{
opacity:0,
x:-60
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
relative
"

>



<div

className="
relative
h-[420px]
overflow-hidden
rounded-[40px]
sm:h-[560px]
lg:h-[650px]
"

>


<Image

src="/images/driver.png"

alt="Professional taxi driver"

fill

className="
object-cover
transition
duration-700
hover:scale-105
"

/>




<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/60
via-transparent
to-transparent
"

/>


</div>









{/* EXPERIENCE CARD */}


<motion.div

animate={{
y:[0,-15,0]
}}

transition={{
duration:5,
repeat:Infinity
}}

className="
absolute
right-2
top-6
rounded-[30px]
bg-white/90
p-6
shadow-2xl
backdrop-blur-xl
sm:-right-10
sm:top-10
sm:p-8
"

>


<h3

className="
text-4xl
font-black
text-green-600
sm:text-5xl
"

>

10+

</h3>



<p

className="
mt-2
text-sm
font-medium
text-slate-600
"

>

Years Experience

</p>


</motion.div>









{/* RATING CARD */}


<motion.div

animate={{
y:[0,18,0]
}}

transition={{
duration:6,
repeat:Infinity
}}

className="
absolute
left-2
bottom-6
max-w-[260px]
rounded-[28px]
bg-[#032015]
p-6
text-white
shadow-xl
sm:-left-8
sm:bottom-14
"

>


<div

className="
flex
items-center
gap-3
"

>

<Star

size={20}

className="
fill-green-400
text-green-400
"

/>



<span

className="
text-sm
font-semibold
"

>

4.9 Customer Rating

</span>


</div>





<p

className="
mt-3
text-sm
leading-7
text-white/70
"

>

Trusted by thousands of travellers
for safe and comfortable journeys.

</p>


</motion.div>





</motion.div>









{/* =========================
      STORY CONTENT
========================= */}


<motion.div

initial={{
opacity:0,
x:60
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

>


<span

className="
inline-flex
rounded-full
bg-green-100
px-5
py-2
text-sm
font-semibold
uppercase
tracking-[0.2em]
text-green-700
"

>

Our Story

</span>






<h2

className="
mt-8
font-[Playfair_Display]
text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
font-black
leading-tight
text-slate-900
"

>

More Than A Taxi Service,

<br/>

We Create

<span

className="
text-green-600
"

>

 Travel Experiences

</span>

</h2>








<p

className="
mt-8
text-base
sm:text-lg
leading-8
text-slate-600
"

>

Every journey tells a story. Whether you're arriving
at the airport, exploring wildlife, discovering hidden
beaches, or travelling between cities, Wasgamuwa Taxi
ensures every kilometre is comfortable, safe and memorable.

</p>





<p

className="
mt-6
text-base
sm:text-lg
leading-8
text-slate-600
"

>

Our licensed local taxi service combines professional
English-speaking drivers, premium vehicles and local
knowledge to provide reliable transportation across Sri Lanka.

Cash payments are accepted and our team is available
24/7 whenever you need us.

</p>









{/* QUOTE */}


<div

className="
mt-10
rounded-[30px]
border-l-4
border-green-600
bg-green-50
p-6
sm:p-8
"

>


<p

className="
text-base
sm:text-xl
italic
leading-8
text-slate-700
"

>

" Our goal isn't simply to take you from one destination
to another. We want every traveller to remember the journey itself."

</p>




<h4

className="
mt-6
font-semibold
text-slate-900
"

>

— Wasgamuwa Taxi & Tours

</h4>


</div>









{/* FEATURES */}



<div

className="
mt-12
grid
grid-cols-1
gap-4
sm:grid-cols-2
"

>


{[

"Professional Chauffeurs",

"Airport Transfers",

"Private Safari Tours",

"Island Wide Coverage",

].map((item,index)=>(


<motion.div

key={item}

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.1
}}

whileHover={{
x:8
}}

className="
flex
items-center
gap-4
rounded-2xl
border
border-slate-200
p-5
transition
hover:border-green-300
hover:bg-green-50
"

>


<div

className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-green-600
text-white
"

>

<ShieldCheck size={22}/>

</div>




<span

className="
font-semibold
text-slate-700
"

>

{item}

</span>


</motion.div>


))}


</div>



</motion.div>



</div>

</div>


</section>



</main>

)

}