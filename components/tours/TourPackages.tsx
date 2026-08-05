"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  Hotel,
  Map,
  ArrowRight,
  Star,
} from "lucide-react";


const packages = [
  {
    title: "Hill Country Escape",
    subtitle: "Mountains • Tea • Waterfalls",
    image: "/images/hill.png",
    rating: "4.9",
    features:[
      "Private Vehicle",
      "Hotel Pickup",
      "Custom Route"
    ],
  },

  {
    title: "Wildlife Adventure",
    subtitle: "Safari • Nature • Adventure",
    image: "/images/safaritour.jpg",
    rating: "5.0",
    features:[
      "Safari Jeep",
      "Expert Driver",
      "Wildlife Guide"
    ],
  },

  {
    title: "South Coast Sri Lanka",
    subtitle: "Tropical Beach Escape",
    image: "/images/southbeach.jpg",
    rating: "4.9",
    features: [
      "Golden Beaches",
      "Whale Watching",
      "Surfing Experience",
    ],
  },
];


export default function TourPackages(){

return(

<section 
className="
relative
overflow-hidden
bg-[#050816]
py-28
"
>


{/* Green Glow */}

<div
className="
absolute
left-0
top-10
h-96
w-96
rounded-full
bg-emerald-500/10
blur-[150px]
"
/>


<div
className="
absolute
right-0
bottom-0
h-[450px]
w-[450px]
rounded-full
bg-green-500/10
blur-[180px]
"
/>



<div className="container mx-auto px-6">


{/* Heading */}

<div className="mb-16 text-center">


<span
className="
rounded-full
border
border-green-400/30
bg-green-400/10
px-5
py-2
text-sm
uppercase
tracking-[0.2em]
text-green-300
"
>

Tour Packages

</span>




<h2
className="
mt-6
text-5xl
font-black
text-white
"
>

Choose Your Perfect Experience

</h2>




<p
className="
mx-auto
mt-5
max-w-2xl
text-slate-400
"
>

Flexible tour packages designed around your
travel style and budget.

</p>


</div>





<div
className="
grid
gap-8
lg:grid-cols-3
"
>


{
packages.map((pkg,index)=>(


<motion.div

key={pkg.title}

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.15
}}

whileHover={{
y:-15
}}

className="
group
relative
overflow-hidden
rounded-[35px]
border
border-white/10
bg-white/5
backdrop-blur-xl
hover:border-green-400/40
transition
"

>


{/* Image */}

<div
className="
relative
h-[420px]
overflow-hidden
"
>


<motion.div

whileHover={{
scale:1.1
}}

transition={{
duration:.8
}}

className="h-full"

>


<Image

src={pkg.image}

alt={pkg.title}

fill

className="
object-cover
"

/>


</motion.div>





<div
className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/40
to-transparent
"
/>





{/* Rating */}

<div
className="
absolute
left-6
top-6
flex
items-center
gap-2
rounded-full
bg-green-600/80
px-4
py-2
text-white
backdrop-blur-xl
"
>


<Star

size={15}

className="
fill-yellow-400
text-yellow-400
"

/>

{pkg.rating}


</div>





<div
className="
absolute
bottom-0
p-7
"
>


<h3
className="
text-3xl
font-bold
text-white
"
>

{pkg.title}

</h3>



<p
className="
mt-2
text-white/60
"
>

{pkg.subtitle}

</p>


</div>


</div>







{/* Content */}

<div className="p-7">





<div
className="
mt-2
space-y-3
"
>


{
pkg.features.map((feature,i)=>(


<div

key={feature}

className="
flex
items-center
gap-3
text-slate-300
"

>


{
i===0
?
<Car 
size={17}
className="text-green-400"
/>

:

i===1

?

<Hotel
size={17}
className="text-green-400"
/>

:

<Map
size={17}
className="text-green-400"
/>

}



{feature}


</div>


))

}


</div>







<Link href="/#booking"
scroll={false}>

<button

className="
group
mt-8
flex
items-center
gap-3
rounded-full
bg-gradient-to-r
from-lime-300
via-green-400
to-emerald-600
px-6
py-3
font-semibold
text-black
transition
hover:scale-105
hover:shadow-[0_0_35px_rgba(34,197,94,.35)]
"

>


Plan This Tour


<ArrowRight

size={18}

className="
transition
group-hover:translate-x-1
"

/>


</button>


</Link>



</div>




</motion.div>


))

}


</div>


</div>


</section>

)

}