"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import BookingCard from "./BookingCard";

import {
  useEffect,
  useState,
} from "react";

import {
  useSearchParams,
} from "next/navigation";


interface HeroProps {

  setBookingData?: (data:{
    destination:string;
    date:string;
    travellers:string;
  })=>void;

}



export default function Hero({
  setBookingData
}:HeroProps) {


const searchParams = useSearchParams();



const [bookingData,setBookingDataState] = useState({

  destination:"",
  date:"",
  travellers:"1 Traveller"

});





useEffect(()=>{


const data={

destination:
searchParams.get("destination") || "",


date:
searchParams.get("date") || "",


travellers:
searchParams.get("travellers") || "1 Traveller"

};



setBookingDataState(data);


setBookingData?.(data);



},[
searchParams,
setBookingData
]);






return (

<section
id="hero"
className="
relative
overflow-hidden
bg-black
min-h-screen
pt-20
"


>


{/* Background Image */}

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

src="/images/hero/hero-bg.png"

alt="Sri Lanka road"

fill

priority

sizes="
100vw
"

className="
object-cover
"

/>


</motion.div>





{/* Dark Overlay */}

<div

className="
absolute
inset-0
bg-gradient-to-r
from-black
via-black/75
to-black/40
"

/>





{/* Golden Glow */}

<motion.div
  animate={{
    opacity: [0.15, 0.4, 0.15],
    scale: [1, 1.25, 1],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
  }}
  className="
absolute
-left-48
top-32
h-[450px]
w-[450px]
rounded-full
bg-emerald-500/20
blur-[180px]
"
/>

<motion.div
  animate={{
    opacity: [0.1, 0.3, 0.1],
    scale: [1, 1.2, 1],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
  }}
  className="
absolute
right-0
bottom-0
h-[350px]
w-[350px]
rounded-full
bg-green-400/20
blur-[160px]
"
/>

{/* MAIN CONTENT */}


<div

className="
relative
mx-auto
flex
min-h-screen
max-w-7xl
items-center
px-4
py-20

sm:px-6

lg:px-8
"


>


<div

className="
grid
w-full
items-center
gap-12


lg:grid-cols-[1fr_400px]

xl:grid-cols-[1fr_430px]

"


>




{/* LEFT CONTENT */}



<motion.div


initial={{

opacity:0,
y:70

}}


animate={{

opacity:1,
y:0

}}


transition={{

duration:1

}}



className="
text-white
"
>

{/* Badge */}


<div

className="
inline-flex
items-center
gap-3

rounded-full

border
border-green-400/40

bg-white/10

px-4
py-3

sm:px-5

backdrop-blur-xl

text-xs
sm:text-sm

"


>


<ShieldCheck

size={18}

className="
text-green-400
"

/>


Premium Taxi & Island Tours


</div>






{/* Heading */}



<h1


className="
mt-8

font-black

leading-[1.2]

text-4xl

sm:text-5xl

md:text-6xl

lg:text-7xl

"


>


Wasgamuwa


<span

className="
block
font-serif
bg-gradient-to-r
from-green-400
via-lime-300
to-lime-500
bg-clip-text
text-transparent
"

>

Taxi Service

</span>


& Tours


</h1>







{/* Description */}


<p

className="
mt-7
max-w-lg
text-base
leading-7
text-green-50/80
sm:text-lg
lg:max-w-xl
"
>

Private chauffeur services, airport transfers
and unforgettable island adventures designed
around your journey.


</p>






{/* Buttons */}



<div

className="
mt-10

flex

w-full

flex-col

gap-4


sm:flex-row

"


>


<Link

href="#routes"

className="
w-full
sm:w-auto
"

>


<button


className="
group

flex

w-full

items-center

justify-center

gap-3

rounded-full

bg-green-400

px-8

py-4

font-bold

text-black

transition

hover:scale-105

"


>


Explore Journey


<ArrowRight

className="
transition

group-hover:translate-x-2

"

/>


</button>


</Link>





<Link

href="/#testimonials"

className="
w-full
sm:w-auto
"


>


<button


className="
w-full

rounded-full

border

border-green-400/40

bg-green-400/10

px-8

py-4

backdrop-blur-xl

transition

hover:bg-white

hover:text-black

"


>


View Experiences


</button>



</Link>



</div>





</motion.div>









{/* BOOKING CARD */}



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

duration:.8,

delay:.5

}}



className="
flex

justify-center

lg:justify-end

"


>


<BookingCard

bookingData={bookingData}

/>


</motion.div>






</div>


</div>



</section>


);


}