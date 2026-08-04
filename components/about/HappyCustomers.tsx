"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";


const customers = [

  {
    image:"/customer/cus1.jpeg",
    location:"Wasgamuwa National Park",
    name:"Sarah & Friends",
  },

  {
    image:"/customer/cus2.jpeg",
    location:"Sigiriya Rock",
    name:"David's Sri Lanka Tour",
  },

  {
    image:"/customer/cus3.jpeg",
    location:"Kandy Temple",
    name:"Emily & Family Trip",
  },

  {
    image:"/customer/cus4.jpeg",
    location:"Ella Scenic Route",
    name:"Michael Journey",
  },

  {
    image:"/customer/cus5.jpeg",
    location:"Waterfalls & Nature Trails",
    name:"Anna's Holiday",
  },

  {
    image:"/customer/cus6.jpeg",
    location:"Safari Experience",
    name:"James Family Trip",
  },

];



export default function HappyCustomers(){

return (

<section

className="
relative
overflow-hidden
bg-[#031A12]
py-24
"


>


{/* GREEN GLOW */}

<div

className="
absolute
inset-0
bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.22),transparent_40%)]
"

/>


<div

className="
absolute
left-[-150px]
bottom-0
h-[400px]
w-[400px]
rounded-full
bg-emerald-600/20
blur-[140px]
"

/>





<div

className="
relative
mx-auto
max-w-7xl
px-6
"

>


{/* HEADING */}


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

viewport={{
once:true
}}

className="
mb-14
text-center
"

>


<div

className="
inline-flex
items-center
gap-2
rounded-full
border
border-white/10
bg-white/10
px-4
py-2
text-sm
text-green-300
backdrop-blur-md
"

>

<Star

size={16}

fill="currentColor"

/>

Customer Memories

</div>







<h2

className="
mt-5
font-serif
text-4xl
font-bold
text-white
md:text-5xl
"

>

Happy Customers,

<span

className="
text-green-400
"

>

 Beautiful Journeys

</span>


</h2>






<p

className="
mx-auto
mt-5
max-w-2xl
text-slate-300
"

>

Every journey creates unforgettable memories.
Here are some moments shared by our happy travelers
across Sri Lanka.

</p>



</motion.div>









{/* GALLERY */}


<div

className="
grid
grid-cols-1
gap-6
sm:grid-cols-2
lg:grid-cols-3
"

>


{customers.map((customer,index)=>(


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


transition={{

delay:index*0.1

}}


viewport={{

once:true

}}



whileHover={{

y:-10

}}



className="

group
relative
h-[360px]
overflow-hidden
rounded-3xl
border
border-white/10
shadow-2xl

"

>



<Image

src={customer.image}

alt={customer.location}

fill

className="

object-cover

transition

duration-700

group-hover:scale-110

"

/>







{/* IMAGE OVERLAY */}


<div

className="

absolute

inset-0

bg-gradient-to-t

from-[#031A12]/90

via-[#031A12]/20

to-transparent

"

/>








{/* GLASS LABEL */}


<div

className="

absolute

right-5

top-5

rounded-full

bg-white/10

px-3

py-1

text-xs

text-green-300

backdrop-blur-xl

"

>

Sri Lanka 🇱🇰

</div>









{/* CONTENT */}


<div

className="

absolute

bottom-0

p-6

text-white

"

>


<h3

className="

text-xl

font-semibold

"

>

{customer.name}

</h3>



<p

className="

mt-2

text-sm

text-green-300

"

>

📍 {customer.location}

</p>



</div>





</motion.div>


))}



</div>




</div>


</section>

);

}