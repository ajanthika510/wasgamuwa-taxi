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

<section className="relative overflow-hidden bg-[#050816] py-28">


<div className="container mx-auto px-6">


{/* Heading */}

<div className="mb-16 text-center">

<span className="
rounded-full
border
border-amber-400/30
bg-amber-400/10
px-5
py-2
text-sm
uppercase
tracking-[0.2em]
text-amber-300
">

Tour Packages

</span>


<h2 className="
mt-6
text-5xl
font-black
text-white
">

Choose Your Perfect Experience

</h2>


<p className="
mx-auto
mt-5
max-w-2xl
text-slate-400
">

Flexible tour packages designed around your
travel style and budget.

</p>

</div>



<div className="
grid
gap-8
lg:grid-cols-3
">


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
"

>


{/* Image */}

<div className="
relative
h-[420px]
overflow-hidden
">


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


<div className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/40
to-transparent
"/>



<div className="
absolute
left-6
top-6
flex
items-center
gap-2
rounded-full
bg-white/10
px-4
py-2
text-white
backdrop-blur-xl
">

<Star
size={15}
className="
fill-yellow-400
text-yellow-400
"
/>

{pkg.rating}

</div>


<div className="
absolute
bottom-0
p-7
">


<h3 className="
text-3xl
font-bold
text-white
">

{pkg.title}

</h3>


<p className="
mt-2
text-white/60
">

{pkg.subtitle}

</p>


</div>

</div>




{/* Content */}

<div className="p-7">


<div className="
flex
items-center
justify-between
text-sm
text-slate-300
">

<span className="
font-bold
text-amber-400
">



</span>


</div>




<div className="
mt-6
space-y-3
">


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
i===0?
<Car size={17}/>
:
i===1?
<Hotel size={17}/>
:
<Map size={17}/>
}


{feature}


</div>


))
}


</div>


<Link href="/#hero">
<button className="
group mt-8
flex
items-center
gap-3
rounded-full
bg-amber-400
px-6
py-3
font-semibold
text-black
transition
hover:bg-amber-300
">

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