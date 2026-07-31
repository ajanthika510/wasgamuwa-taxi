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
    title: "Airport Transfers",
    description:
      "Reliable pickup and drop-off with professional drivers.",
    image: "/images/airport.jpg",
    color: "from-purple-500 to-fuchsia-500",
    features: [
      "24/7 Service",
      "Flight Tracking",
    ],
  },

  {
    title: "Taxi Service",
    description:
      "Comfortable city rides with premium vehicles.",
    image: "/images/taxi.jpg",
    color: "from-indigo-500 to-purple-600",
    features: [
      "Luxury Cars",
      "Door Pickup",
    ],
  },

  {
    title: "Safari Tours",
    description:
      "Explore Sri Lanka wildlife with expert drivers.",
    image: "/images/safaritour.jpg",
    color: "from-emerald-400 to-green-600",
    features: [
      "Private Safari",
      "Guides",
    ],
  },

  {
    title: "Custom Tours",
    description:
      "Create your own Sri Lanka travel experience.",
    image: "/images/customtour.jpg",
    color: "from-pink-500 to-purple-600",
    features: [
      "Flexible Route",
      "Hotels",
    ],
  },
];



export default function Services() {


return (

<section

id="services"

className="
relative
scroll-mt-24
overflow-hidden
bg-gradient-to-b
from-[#030014]
via-[#1A093E]
to-[#2A1263]
py-20
sm:py-24
lg:py-28
"

>


{/* Glow Background */}


<div

className="
absolute
-left-40
top-20
h-[350px]
w-[350px]
sm:h-[500px]
sm:w-[500px]
rounded-full
bg-purple-600/20
blur-[150px]
"

/>



<div

className="
absolute
right-[-120px]
bottom-0
h-[350px]
w-[350px]
sm:h-[500px]
sm:w-[500px]
rounded-full
bg-fuchsia-500/20
blur-[140px]
"

/>





{/* Grid Background */}

<div

className="
absolute
inset-0
opacity-[0.05]
bg-[linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)]
bg-[size:60px_60px]
"

/>





<div className="
relative
z-10
">


<SectionHeading

badge="OUR SERVICES"

title="Everything You Need For Your Journey"

description="Premium transportation solutions designed for every traveller."

/>






<div

className="
container
mx-auto
mt-12
grid
grid-cols-1
gap-6
px-4
sm:px-6
md:grid-cols-2
lg:mt-16
lg:gap-10
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
delay:index * 0.12,
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
min-h-[360px]
overflow-hidden
rounded-[30px]
sm:min-h-[330px]
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
right-4
top-4
h-32
w-32
sm:h-40
sm:w-40
lg:h-48
lg:w-48
overflow-hidden
rounded-3xl
shadow-2xl
"

>


<Image

src={service.image}

alt={service.title}

fill

sizes="
(max-width:640px) 130px,
( max-width:1024px) 160px,
190px
"

className="
object-cover
"

/>


</motion.div>






{/* Image Glow */}


<div

className={`
absolute
right-8
top-8
h-32
w-32
sm:h-44
sm:w-44
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
min-h-[360px]
flex-col
justify-end
p-6
sm:min-h-[330px]
sm:p-8
lg:p-12
"

>



<div
className="
max-w-[250px]
"
>


<h3

className="
font-[Playfair_Display]
text-2xl
font-bold
tracking-tight
text-white
sm:text-3xl
"

>

{service.title}

</h3>




<p

className="
mt-3
font-[Inter]
text-sm
leading-6
text-white/60
sm:text-base
lg:text-lg
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
gap-2
sm:gap-3
"

>


{
service.features.map((item)=>(


<span

key={item}

className="
flex
items-center
gap-1.5
rounded-full
border
border-purple-400/20
bg-purple-500/10
px-3
py-2
text-xs
font-medium
text-white
backdrop-blur
sm:text-sm
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
bottom-5
right-5
flex
h-11
w-11
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
sm:bottom-8
sm:right-8
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