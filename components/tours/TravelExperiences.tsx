"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  MapPin,
  Star,
} from "lucide-react";


const gallery = [
  {
    image: "/images/sig.jpg",
    title: "Sigiriya Rock Fortress",
    location: "Sigiriya",
    height: "h-[520px]",
    rating: "4.9",
  },
  {
    image: "/images/ella9.jpeg",
    title: "Ella Nine Arch Bridge",
    location: "Ella",
    height: "h-[320px]",
    rating: "4.8",
  },
  {
    image: "/images/yala.jpg",
    title: "Yala National Park",
    location: "Yala",
    height: "h-[420px]",
    rating: "5.0",
  },
  {
    image: "/images/dutchfort.jpg",
    title: "Galle Dutch Fort",
    location: "Galle",
    height: "h-[300px]",
    rating: "4.7",
  },
  {
    image: "/images/nuwe.jpg",
    title: "Tea Plantations",
    location: "Nuwara Eliya",
    height: "h-[460px]",
    rating: "4.9",
  },
  {
    image: "/images/mirissa.jpg",
    title: "Mirissa Beach",
    location: "Mirissa",
    height: "h-[350px]",
    rating: "4.8",
  },
];


export default function TravelExperiences() {

return (

<section
className="
relative
overflow-hidden
bg-gradient-to-b
from-[#050816]
via-[#071A12]
to-[#050816]
py-32
"
>


{/* Green Glow */}

<div
className="
absolute
left-0
top-0
h-[450px]
w-[450px]
rounded-full
bg-emerald-500/10
blur-[160px]
"
/>


<div
className="
absolute
right-0
bottom-0
h-[500px]
w-[500px]
rounded-full
bg-green-400/10
blur-[180px]
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


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
mb-20
text-center
"

>


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

Travel Experiences

</span>





<h2
className="
mt-6
text-5xl
font-black
text-white
lg:text-6xl
"
>

Moments You'll Never Forget

</h2>





<p
className="
mx-auto
mt-6
max-w-2xl
text-lg
leading-8
text-slate-400
"
>

Every destination has its own story. Explore Sri Lanka through unforgettable landscapes, wildlife and culture.

</p>



</motion.div>






{/* Gallery */}

<div
className="
columns-1
gap-6
md:columns-2
xl:columns-3
"
>


{
gallery.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
y:80
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.7,
delay:index*.08
}}

whileHover={{
y:-10
}}

className={`
group
relative
mb-6
overflow-hidden
rounded-[32px]
${item.height}
`}

>



<motion.div

whileHover={{
scale:1.08
}}

transition={{
duration:.8
}}

className="
h-full
w-full
"

>


<Image

src={item.image}

alt={item.title}

fill

className="
object-cover
"

/>


</motion.div>





{/* Overlay */}

<div
className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/20
to-transparent
opacity-90
"
/>






{/* Rating */}

<div
className="
absolute
left-5
top-5
flex
items-center
gap-2
rounded-full
bg-black/40
px-4
py-2
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


<span
className="
text-sm
text-white
"
>

{item.rating}

</span>


</div>







{/* Favourite */}

<button

className="
absolute
right-5
top-5
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-white/15
backdrop-blur-xl
transition
hover:bg-emerald-500
"

>


<Heart

size={18}

className="
text-white
"

/>


</button>







{/* Content */}


<motion.div

initial={{
y:40
}}

whileHover={{
y:0
}}

className="
absolute
bottom-0
left-0
right-0
p-7
"

>


<p
className="
flex
items-center
gap-2
text-sm
text-green-300
"
>


<MapPin size={16}/>

{item.location}


</p>




<h3
className="
mt-3
text-3xl
font-bold
text-white
"
>

{item.title}

</h3>



</motion.div>



</motion.div>


))

}



</div>


</div>


</section>

);

}