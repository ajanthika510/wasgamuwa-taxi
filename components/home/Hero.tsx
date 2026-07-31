"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Clock3,
  MapPin,
} from "lucide-react";

import BookingCard from "./BookingCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";



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





// Get booking data from URL

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



},[searchParams,setBookingData]);







return (

<section
className="
relative
min-h-screen
overflow-hidden
bg-black
pt-20
"
>





{/* Background */}

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

src="/images/hero-bg.png"

alt="Sri Lanka road"

fill

priority

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
bg-gradient-to-r
from-black
via-black/70
to-black/30
"

/>







{/* Glow */}

<motion.div

animate={{

opacity:[0.2,0.5,0.2],

scale:[1,1.3,1]

}}

transition={{

duration:6,

repeat:Infinity

}}

className="
absolute
-left-40
top-40
h-[500px]
w-[500px]
rounded-full
bg-yellow-500/20
blur-[160px]
"

/>








{/* CONTENT */}

<div

className="
relative
mx-auto
flex
min-h-[calc(100vh-80px)]
max-w-7xl
items-center
px-6
py-12
"

>



<div

className="
grid
w-full
items-center
gap-12
lg:grid-cols-[1fr_420px]
"

>







{/* LEFT */}

<motion.div

initial={{

opacity:0,

y:80

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





<div

className="
inline-flex
items-center
gap-3
rounded-full
border
border-yellow-400/30
bg-white/10
px-5
py-3
backdrop-blur-xl
text-sm
"

>

<ShieldCheck

size={18}

className="
text-yellow-400
"

/>

Premium Taxi & Island Tours


</div>









<h1

className="
mt-8
text-4xl
font-black
leading-[0.95]
sm:text-5xl
lg:text-6xl
"

>

Wasgamuwa


<span

className="
block
font-serif
text-yellow-400
"

>

Taxi Service

</span>


& Tours


</h1>









<p

className="
mt-8
max-w-xl
text-base
leading-7
text-white/70
sm:text-lg
"

>

Private chauffeur services, airport transfers
and unforgettable island adventures designed
around your journey.

</p>









<div

className="
mt-10
flex
flex-col
gap-4
sm:flex-row
"

>


<Link href="/#tours">
<button

className="
group
flex
items-center
justify-center
gap-3
rounded-full
bg-yellow-400
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





<Link href="/#testimonials">

<button

className="
rounded-full
border
border-white/30
bg-white/10
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










{/* TRUST */}

<div

className="
mt-12
flex
flex-wrap
gap-8
"

>


<Trust

icon={<Star/>}

title="4.9"

text="Guest Rating"

/>


<Trust

icon={<Clock3/>}

title="24/7"

text="Support"

/>



<Trust

icon={<MapPin/>}

title="Island"

text="Wide Tours"

/>


</div>




</motion.div>









{/* RIGHT BOOKING */}


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

delay:1

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

)

}









function Trust({

icon,
title,
text

}:{

icon:React.ReactNode;

title:string;

text:string;

}){


return(

<div

className="
flex
items-center
gap-3
"

>


<div

className="
text-yellow-400
"

>

{icon}

</div>



<div>

<h3

className="
text-xl
font-bold
"

>

{title}

</h3>


<p

className="
text-sm
text-white/60
"

>

{text}

</p>


</div>



</div>


)


}