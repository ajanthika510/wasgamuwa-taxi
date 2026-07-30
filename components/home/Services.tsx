"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import SectionHeading from "./SectionHeading";


const services = [
  {
    title:"Airport Transfers",
    description:"Reliable pickup and drop-off with professional drivers.",
    image:"/images/airport.jpg",
    color:"from-purple-500 to-fuchsia-500",
    features:["24/7 Service","Flight Tracking"]
  },

  {
    title:"Taxi Service",
    description:"Comfortable city rides with premium vehicles.",
    image:"/images/taxi.jpg",
    color:"from-indigo-500 to-purple-600",
    features:["Luxury Cars","Door Pickup"]
  },

  {
    title:"Safari Tours",
    description:"Explore Sri Lanka wildlife with expert drivers.",
    image:"/images/safaritour.jpg",
    color:"from-emerald-400 to-green-600",
    features:["Private Safari","Guides"]
  },

  {
    title:"Custom Tours",
    description:"Create your own Sri Lanka travel experience.",
    image:"/images/customtour.jpg",
    color:"from-pink-500 to-purple-600",
    features:["Flexible Route","Hotels"]
  },
];


export default function Services(){

return (

<section
id="services"
className="
relative
overflow-hidden
py-28
bg-gradient-to-b
from-[#030014]
via-[#1A093E]
to-[#2A1263]
"
>


{/* Background Purple Glow */}

<div
className="
absolute
-left-40
top-20
h-[550px]
w-[550px]
rounded-full
bg-purple-600/20
blur-[180px]
"
/>


<div
className="
absolute
right-[-100px]
bottom-0
h-[500px]
w-[500px]
rounded-full
bg-fuchsia-500/20
blur-[160px]
"
/>



{/* Grid Background */}

<div
className="
absolute
inset-0
opacity-[0.06]
bg-[linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)]
bg-[size:80px_80px]
"
/>





<div className="relative z-10">


{/* in another file SECTION HEADING */}
<SectionHeading

badge="OUR SERVICES"

title="Everything You Need For Your Journey"

description="Premium transportation solutions designed for every traveller."

/>



<div
className="
container
mx-auto
mt-16
grid
gap-10
px-6
md:grid-cols-2
"
>


{
services.map((service,index)=>(


<motion.div


key={service.title}


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
delay:index*.12,
duration:.7
}}


whileHover={{
y:-10,
rotateX:3,
rotateY:-3
}}


style={{
transformStyle:"preserve-3d"
}}


className="
group
relative
h-[330px]
overflow-hidden
rounded-[35px]
border
border-white/10
bg-white/[0.06]
backdrop-blur-xl
shadow-[0_25px_80px_rgba(0,0,0,.5)]
"

>


{/* Image */}

<motion.div

whileHover={{
scale:1.08,
rotate:2
}}

className="
absolute
right-5
top-5
h-48
w-48
overflow-hidden
rounded-3xl
shadow-2xl
"

>


<Image

src={service.image}

alt={service.title}

fill

className="
object-cover
"

/>

</motion.div>





{/* Gradient Glow */}

<div

className={`

absolute
right-10
top-10
h-44
w-44
rounded-full
bg-gradient-to-r
${service.color}
opacity-30
blur-3xl

`}

/>







{/* Content */}

<div

className="
relative
flex
h-full
flex-col
justify-end
p-12
"

>


<div
className="max-w-[240px]"
>


<h3

className="
font-[Playfair_Display]
text-3xl
font-bold
tracking-tight
text-white
"

>

{service.title}

</h3>




<p

className="
mt-3
font-[Inter]
text-[20px]
leading-6
text-white/60
"

>

{service.description}

</p>


</div>





{/* Features */}

<div

className="
mt-5
flex
flex-wrap
gap-8
"

>


{
service.features.map(item=>(


<span

key={item}

className="
flex
items-center
gap-2
rounded-full
border
border-purple-400/20
bg-purple-500/10
px-3
py-2
text-[18px]
font-medium
text-white
backdrop-blur
"

>


<Check

size={13}

className="
text-fuchsia-400
"

/>


{item}


</span>


))

}


</div>






{/* Button */}

<motion.button

whileHover={{
x:5
}}

className="
absolute
bottom-8
right-8
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-gradient-to-r
from-purple-500
to-fuchsia-500
text-white
shadow-lg
transition
group-hover:scale-110
"

>


<ArrowUpRight size={20}/>


</motion.button>





</div>





</motion.div>


))

}


</div>



</div>


</section>

);

}