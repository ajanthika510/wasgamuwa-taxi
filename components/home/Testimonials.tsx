"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Quote,
  Star,
  ShieldCheck,
} from "lucide-react";


const testimonials = [

{
name:"Emily Antony",
location:"London, United Kingdom",
image:"/customer/cus4.jpeg",
review:
"Excellent service from start to finish. The driver arrived early, the vehicle was spotless, and the journey was incredibly comfortable. Highly recommended.",
},

{
name:"Daniel Wilson",
location:"Melbourne, Australia",
image:"/customer/cus1.jpeg",
review:
"Booking was effortless and communication was excellent. The driver was professional and made our family trip completely stress-free.",
},

{
name:"Sophia Brown",
location:"Toronto, Canada",
image:"/customer/cus2.jpeg",
review:
"The best taxi service we used during our Sri Lanka vacation. Safe driving, luxury vehicle, and exceptional hospitality.",
},

{
name:"Michael Lee",
location:"Singapore",
image:"/customer/cus3.jpeg",
review:
"Punctual, friendly, and reliable. Every journey was smooth and comfortable. I'll definitely book again on my next visit.",
},

];


const stats = [

{
number:"4.9/5",
label:"Average Rating",
},

{
number:"2,500+",
label:"Happy Customers",
},

{
number:"15,000+",
label:"Successful Trips",
},

{
number:"100%",
label:"Professional Drivers",
},

];



export default function Testimonials(){


return (

<section
id="testimonials"
className="
relative
overflow-hidden
bg-[#F8FAFC]
py-20
md:py-24
">


{/* Green Glow */}

<div
className="
absolute
-top-40
-left-32
h-96
w-96
rounded-full
bg-green-500/10
blur-[120px]
"
/>


<div
className="
absolute
-bottom-40
-right-32
h-96
w-96
rounded-full
bg-green-900/10
blur-[120px]
"
/>



<div
className="
relative
mx-auto
max-w-7xl
px-5
sm:px-6
lg:px-8
">


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

transition={{
duration:.6
}}

className="
mx-auto
max-w-3xl
text-center
"

>


<span

className="
inline-block
rounded-full
border
border-green-400/30
bg-green-400/10
px-5
py-2
text-xs
sm:text-sm
font-semibold
tracking-wider
uppercase
text-green-700
"

>

Testimonials

</span>



<h2

className="
mt-6
text-3xl
sm:text-4xl
md:text-5xl
font-bold
text-[#111827]
"

>

Trusted by Travelers Across Sri Lanka

</h2>


<p

className="
mt-5
sm:mt-6
text-base
sm:text-lg
leading-7
sm:leading-8
text-gray-600
"

>

From airport transfers to long-distance journeys, our professional drivers and premium vehicles deliver an experience our customers genuinely love.

</p>


</motion.div>
{/* Cards */}

<div
className="
mt-14
md:mt-20
grid
gap-6
md:grid-cols-2
"
>

{
testimonials.map((item,index)=>(

<motion.div

key={index}

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
delay:index*.15,
duration:.6
}}

whileHover={{
y:-8
}}

className="
group
relative
overflow-hidden
rounded-3xl
border
border-gray-200
bg-white
p-6
sm:p-8
shadow-sm
transition
hover:shadow-2xl
"

>


{/* Quote */}

<div
className="
absolute
right-6
top-6
"
>

<Quote

size={55}

className="
text-green-500/20
transition
duration-300
group-hover:rotate-12
"

/>

</div>




{/* Stars */}

<div
className="
mb-6
flex
gap-1
"
>

{
[...Array(5)].map((_,i)=>(

<Star

key={i}

size={18}

className="
fill-lime-500
text-lime-500
"

/>

))
}

</div>




<p
className="
leading-7
sm:leading-8
text-gray-600
"
>

"{item.review}"

</p>





{/* Customer */}

<div
className="
mt-8
flex
items-center
justify-between
gap-4
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
relative
h-14
w-14
shrink-0
overflow-hidden
rounded-full
border-2
border-green-500/40
"
>


<Image

src={item.image}

alt={item.name}

fill

className="
object-cover
transition
duration-500
group-hover:scale-110
"

/>

</div>



<div>

<h4
className="
text-base
sm:text-lg
font-semibold
text-[#111827]
"
>

{item.name}

</h4>


<p
className="
mt-1
text-sm
text-gray-500
"
>

{item.location}

</p>


</div>


</div>





<div

className="
hidden
sm:flex
items-center
gap-2
rounded-full
bg-green-50
px-3
py-2
text-sm
font-medium
text-green-700
"

>


<ShieldCheck size={18}/>

Verified


</div>



</div>



</motion.div>


))

}

</div>







{/* Stats */}


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

transition={{
duration:.7
}}

className="
mt-20
md:mt-24
rounded-[32px]
bg-[#14532D]
px-6
py-10
sm:px-8
sm:py-12
"

>


<div

className="
grid
gap-8
text-center
sm:grid-cols-2
lg:grid-cols-4
"

>


{

stats.map((item,index)=>(

<div key={index}>


<h3

className="
text-3xl
sm:text-4xl
font-bold
text-lime-300
"

>

{item.number}

</h3>



<p

className="
mt-3
text-sm
sm:text-base
text-green-100
"

>

{item.label}

</p>


</div>


))

}


</div>


</motion.div>





</div>


</section>


);


}