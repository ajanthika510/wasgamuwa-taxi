"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Users,
  Search,
  ArrowRight,
} from "lucide-react";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";



export default function Hero() {


const router = useRouter();

const searchParams = useSearchParams();



const today = new Date()
.toISOString()
.split("T")[0];



const [formData,setFormData] = useState({

destination:"",
date:"",
travellers:"1 Traveller"

});





/*
  Load booking data
  when coming back to hero
*/

useEffect(()=>{


const destination =
searchParams.get("destination");


const date =
searchParams.get("date");


const travellers =
searchParams.get("travellers");



if(destination || date || travellers){


setFormData({

destination:destination || "",

date:date || "",

travellers:travellers || "1 Traveller"

});


}


},[searchParams]);







const handleBooking = () => {


router.push(

`/?destination=${encodeURIComponent(formData.destination)}&date=${formData.date}&travellers=${encodeURIComponent(formData.travellers)}#hero`

);


};







return (

<section

id="hero"

className="
relative
flex
min-h-screen
items-center
overflow-hidden
pt-20
"

>





{/* Background */}

<motion.div

animate={{
scale:[1,1.08,1]
}}

transition={{

duration:20,

repeat:Infinity,

ease:"easeInOut"

}}

className="
absolute
inset-0
"

>


<Image

src="/images/tour_bg.jpg"

alt="Sri Lanka"

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
from-black/80
via-black/40
to-black/60
"

/>









{/* Amber Glow */}

<motion.div


animate={{

x:[-80,80,-80],

y:[-40,60,-40]

}}


transition={{

duration:15,

repeat:Infinity

}}


className="
absolute
left-0
top-10
h-80
w-80
rounded-full
bg-amber-400/20
blur-[120px]
"

/>










<div

className="
container
relative
z-10
mx-auto
px-6
"

>









{/* Heading */}


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

duration:.8

}}


className="
mx-auto
max-w-4xl
text-center
"

>



<span

className="
rounded-full
border
border-amber-400/30
bg-amber-400/10
px-5
py-2
text-sm
font-medium
uppercase
tracking-[0.2em]
text-amber-300
"

>

Discover Sri Lanka

</span>







<h1

className="
mt-8
text-5xl
font-black
leading-tight
text-white
md:text-7xl
"

>


Every Journey


<span

className="
block
bg-gradient-to-r
from-amber-300
via-yellow-400
to-orange-500
bg-clip-text
text-transparent
"

>

Tells a Story

</span>


</h1>







<p

className="
mx-auto
mt-8
max-w-2xl
text-lg
leading-8
text-slate-300
"

>

Discover breathtaking beaches, misty mountains, ancient cities and unforgettable wildlife adventures with private guided tours across Sri Lanka.

</p>




</motion.div>












{/* Booking Card */}


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

delay:.3

}}



className="
mx-auto
mt-16
max-w-6xl
rounded-[32px]
border
border-white/20
bg-white/10
p-6
shadow-2xl
backdrop-blur-2xl
"

>




<div

className="
grid
gap-5
lg:grid-cols-4
"

>









{/* Destination */}


<div

className="
flex
items-center
gap-4
rounded-2xl
bg-white/10
p-5
"

>


<MapPin
className="text-amber-400"
/>


<div className="w-full">


<p

className="
text-xs
uppercase
tracking-wide
text-slate-400
"

>

Destination

</p>




<input


value={formData.destination}


onChange={(e)=>


setFormData({

...formData,

destination:e.target.value


})


}



placeholder="Where to?"


className="
mt-1
w-full
bg-transparent
text-white
outline-none
placeholder:text-slate-400
"

/>


</div>



</div>













{/* Date */}


<div

className="
flex
items-center
gap-4
rounded-2xl
bg-white/10
p-5
"

>


<CalendarDays

className="text-amber-400"

/>



<div className="w-full">


<p

className="
text-xs
uppercase
tracking-wide
text-slate-400
"

>

Date

</p>





<input


type="date"


min={today}


value={formData.date}



onChange={(e)=>


setFormData({

...formData,

date:e.target.value


})


}



className="
mt-1
w-full
bg-transparent
text-white
outline-none
"

/>



</div>



</div>












{/* Travellers */}


<div

className="
flex
items-center
gap-4
rounded-2xl
bg-white/10
p-5
"
>
<Users
className="text-amber-400"
/>
<div className="w-full">
<p
className="
text-xs
uppercase
tracking-wide
text-slate-400
"
>
Travellers
</p>

<select
value={formData.travellers}

onChange={(e)=>
setFormData({
...formData,
travellers:e.target.value
})
}

className="
mt-1
w-full
bg-transparent
text-white
outline-none
"
>
<option className="text-black">
1 Traveller
</option>
<option className="text-black">
2 Travellers
</option>
<option className="text-black">
3 Travellers
</option>
<option className="text-black">
4+ Travellers
</option>
</select>
</div>
</div>

{/* Button */}
<motion.button
onClick={handleBooking}

whileHover={{
scale:1.03
}}

whileTap={{
scale:.97

}}

className="
flex
items-center
justify-center
gap-3
rounded-2xl
bg-gradient-to-r
from-amber-400
to-orange-500
px-6
py-5
font-semibold
text-black
"
>
<Search size={20}/>
Book Your Journey
<ArrowRight size={18}/>
</motion.button>
</div>
</motion.div>
</div>
</section>
);

}