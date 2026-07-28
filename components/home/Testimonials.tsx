"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  MapPin,
} from "lucide-react";

import SectionHeading from "./SectionHeading";


const testimonials = [
  {
    name: "Sarah Williams",
    country: "United Kingdom",
    image: "/images/testimonials/user1.jpg",
    text:
      "The airport transfer was perfect. The driver arrived early, the vehicle was comfortable, and the whole experience was stress free.",
    trip:
      "Colombo Airport → Ella",
  },

  {
    name: "Michael Brown",
    country: "Australia",
    image: "/images/testimonials/user2.jpg",
    text:
      "We travelled across Sri Lanka for 10 days. The driver was professional and helped us discover amazing places.",
    trip:
      "Island Tour",
  },

  {
    name: "Emma Johnson",
    country: "Germany",
    image: "/images/testimonials/user3.jpg",
    text:
      "Very clean vehicles and excellent communication. Highly recommended for anyone visiting Sri Lanka.",
    trip:
      "Kandy → Galle",
  },
];



export default function Testimonials(){

return (

<section
className="
relative
overflow-hidden
bg-[#050816]
py-28
"
>


{/* Background */}

<div
className="
absolute
left-0
top-0
h-[400px]
w-[400px]
rounded-full
bg-amber-400/20
blur-[140px]
"
/>


<div
className="
absolute
right-0
bottom-0
h-[400px]
w-[400px]
rounded-full
bg-cyan-400/20
blur-[140px]
"
/>



<div className="
container
relative
mx-auto
px-6
">


<SectionHeading

badge="TESTIMONIALS"

title="What Our Passengers Say"

description="
Thousands of travellers trust us for comfortable and unforgettable journeys across Sri Lanka.
"

/>




<div
className="
mt-16
grid
gap-8
md:grid-cols-3
"
>


{
testimonials.map((review,index)=>(


<motion.div

key={review.name}

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
duration:.7,
delay:index*.15
}}

whileHover={{
y:-15,
scale:1.03
}}

className="
group
relative
rounded-[35px]
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
"
>


{/* Glow */}

<div
className="
absolute
inset-0
rounded-[35px]
bg-gradient-to-br
from-amber-400/20
to-transparent
opacity-0
transition
duration-500
group-hover:opacity-100
"
/>



<div
className="
relative
"
>


<Quote
size={45}
className="
text-amber-400/50
"
/>



{/* Stars */}

<div
className="
mt-5
flex
gap-1
"
>

{
[1,2,3,4,5].map(i=>(

<Star

key={i}

size={18}

className="
fill-yellow-400
text-yellow-400
"

/>

))
}

</div>



<p
className="
mt-6
leading-8
text-white/80
"
>

"{review.text}"

</p>




<div
className="
mt-8
flex
items-center
gap-4
"
>


<div
className="
relative
h-14
w-14
overflow-hidden
rounded-full
border
border-white/20
"
>

<Image

src={review.image}

alt={review.name}

fill

className="
object-cover
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

{review.name}

</h4>


<p
className="
text-sm
text-white/50
"
>

{review.country}

</p>


</div>


</div>




<div
className="
mt-6
flex
items-center
gap-2
text-sm
text-amber-300
"
>

<MapPin size={15}/>

{review.trip}

</div>


</div>



</motion.div>


))
}


</div>


</div>


</section>

);

}