"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Map,
  Clock,
  Car,
  Star,
  ArrowRight,
} from "lucide-react";


const stats = [
  {
    number:"10K+",
    title:"Happy Customers",
    icon:Users
  },
  {
    number:"50K+",
    title:"Journeys Completed",
    icon:Map
  },
  {
    number:"24/7",
    title:"Customer Support",
    icon:Clock
  },
  {
    number:"100%",
    title:"Safe Travel",
    icon:ShieldCheck
  }
];


const values=[
{
title:"Professional Drivers",
description:
"Experienced and friendly chauffeurs who understand your journey.",
icon:Car
},

{
title:"Safe & Reliable",
description:
"Well-maintained vehicles and trusted service for every trip.",
icon:ShieldCheck
},

{
title:"Island Wide",
description:
"Travel anywhere in Sri Lanka with comfort and confidence.",
icon:Map
}
];



export default function AboutPage(){

return(

<main className="overflow-hidden">


{/* HERO */}

<section
className="
relative
flex
min-h-screen
items-center
overflow-hidden
pt-20
bg-[#050816]
items-center
"
>


<div className="
absolute
inset-0
bg-gradient-to-r
from-black
via-black/60
to-transparent
"/>



<Image

src="/images/about/about-hero.jpg"

alt="Taxi Sri Lanka"

fill

className="
object-cover
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


<motion.div

initial={{
opacity:0,
x:-80
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

className="
max-w-3xl
text-white
"

>

<span className="
rounded-full
bg-amber-400/20
px-5
py-2
text-sm
text-amber-300
">

ABOUT VARSHANAN CABS

</span>


<h1 className="
mt-8
text-6xl
font-black
leading-tight
">

Your Trusted
Travel Partner
In Sri Lanka

</h1>


<p className="
mt-6
text-xl
text-white/70
">

Providing safe, comfortable and memorable journeys
with professional taxi services across Sri Lanka.

</p>


<button
className="
mt-10
flex
items-center
gap-3
rounded-full
bg-amber-400
px-8
py-4
font-semibold
text-black
"
>

Book Your Ride

<ArrowRight/>

</button>


</motion.div>


</div>


</section>





{/* STORY */}

<section className="
bg-white
py-28
">


<div className="
container
mx-auto
grid
gap-16
px-6
lg:grid-cols-2
items-center
">


<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>

<div className="
relative
h-[550px]
rounded-[40px]
overflow-hidden
"
>


<Image

src="/images/about/team.jpg"

alt="Our Team"

fill

className="
object-cover
"

/>


</div>


</motion.div>





<motion.div

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

>


<span className="
text-amber-500
font-semibold
">

WHO WE ARE

</span>


<h2 className="
mt-5
text-5xl
font-bold
text-slate-900
">

More Than A Taxi Service

</h2>


<p className="
mt-6
leading-8
text-slate-600
">

We believe every journey should be comfortable,
safe and memorable.

From airport pickups to island-wide adventures,
our mission is to provide reliable transportation
that allows travellers to explore Sri Lanka without worry.

</p>



<p className="
mt-5
leading-8
text-slate-600
">

With experienced drivers, modern vehicles and
customer-focused service, we make every trip
a pleasant experience.

</p>


</motion.div>


</div>


</section>





{/* VALUES */}

<section
className="
bg-[#050816]
py-28
"
>


<div className="
container
mx-auto
px-6
">


<h2 className="
text-center
text-5xl
font-bold
text-white
">

Why Choose Us

</h2>



<div className="
mt-14
grid
gap-8
md:grid-cols-3
"
>


{
values.map((item,index)=>{

const Icon=item.icon;


return(

<motion.div

key={item.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.15
}}

className="
rounded-[30px]
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
text-white
"

>

<div className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-amber-400
text-black
">

<Icon/>

</div>


<h3 className="
mt-6
text-2xl
font-bold
">

{item.title}

</h3>


<p className="
mt-4
text-white/60
">

{item.description}

</p>


</motion.div>

)

})

}

</div>

</div>

</section>





{/* STATS */}

<section className="
bg-white
py-20
">


<div className="
container
mx-auto
grid
grid-cols-2
gap-8
px-6
md:grid-cols-4
">


{
stats.map((stat,index)=>{

const Icon=stat.icon;


return(

<motion.div

key={stat.title}

whileHover={{
y:-10
}}

className="
text-center
"
>


<Icon
className="
mx-auto
text-amber-500
"
/>


<h3 className="
mt-4
text-4xl
font-black
text-slate-900
">

{stat.number}

</h3>


<p className="
text-slate-500
">

{stat.title}

</p>


</motion.div>

)

})
}


</div>


</section>




</main>

)

}