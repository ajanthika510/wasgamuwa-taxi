"use client";

import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";


import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { motion } from "framer-motion";


export default function Footer(){

return(

<footer
className="
relative
overflow-hidden
bg-[#050505]
text-white
"
>


{/* Glow */}

<div
className="
absolute
-left-40
top-20
h-[400px]
w-[400px]
rounded-full
bg-yellow-500/10
blur-[140px]
"
/>


<div
className="
absolute
bottom-0
right-0
h-[350px]
w-[350px]
rounded-full
bg-amber-400/10
blur-[120px]
"
/>





<div
className="
relative
mx-auto
max-w-7xl
px-6
py-20
"
>


<div
className="
grid
gap-12
md:grid-cols-2
lg:grid-cols-4
"
>





{/* BRAND */}

<div>

<h2
className="
font-serif
text-3xl
font-bold
"
>

Wasgamuwa

<span
className="
text-yellow-400
"
>
 Taxi
</span>

</h2>



<p
className="
mt-5
leading-7
text-white/60
"
>

Premium taxi and tour services across Sri Lanka.
Airport transfers, wildlife adventures and
custom island journeys with trusted drivers.

</p>




<div
className="
mt-6
flex
gap-4
"
>


<Social 
icon={<FaFacebookF size={18}/>} 
/>

<Social 
icon={<FaInstagram size={18}/>} 
/>

<Social 
icon={<FaYoutube size={18}/>} 
/>

</div>


</div>








{/* LINKS */}

<div>


<h3
className="
text-lg
font-semibold
text-yellow-400
"
>

Quick Links

</h3>


<ul
className="
mt-5
space-y-3
text-white/60
"
>
<Link href="/#hero">
<li className="hover:text-yellow-400 transition">
Home
</li>
</Link>

<Link href="/about">
<li className="hover:text-yellow-400 transition">
About Us
</li>
</Link>

<Link href="/tours">
<li className="hover:text-yellow-400 transition">
Tours
</li>
</Link>



<Link href="/contact">
<li className="hover:text-yellow-400 transition">
Contact
</li>
</Link>

</ul>


</div>








{/* SERVICES */}

<div>


<h3
className="
text-lg
font-semibold
text-yellow-400
"
>

Our Services

</h3>

<Link href="/#services">
<ul
className="
mt-5
space-y-3
text-white/60
"
>


<li>
Airport Transfers
</li>

<li>
Wildlife Safari Tours
</li>

<li>
Custom Sri Lanka Tours
</li>

<li>
Hotel Transfers
</li>

<li>
Private Chauffeur
</li>


</ul>
</Link>

</div>









{/* CONTACT */}

<div>


<h3
className="
text-lg
font-semibold
text-yellow-400
"
>

Contact

</h3>



<div
className="
mt-5
space-y-5
text-white/60
"
>


<div
className="
flex
gap-3
"
>

<MapPin
className="text-yellow-400"
size={20}
/>

<span>
Wasgamuwa, Sri Lanka
</span>

</div>





<div
className="
flex
gap-3
"
>

<Phone
className="text-yellow-400"
size={20}
/>

<span>
+94 76 343 3434
</span>

</div>





<div
className="
flex
gap-3
"
>

<Mail
className="text-yellow-400"
size={20}
/>

<span>
info@wasgamuwataxi.com
</span>

</div>



</div>



</div>




</div>









{/* CTA */}

<motion.div

whileHover={{
scale:1.02
}}

className="
mt-16
flex
flex-col
items-center
justify-between
gap-6
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
md:flex-row
"

>


<div>

<h3
className="
text-2xl
font-bold
"
>

Ready to explore Sri Lanka?

</h3>


<p
className="
mt-2
text-white/60
"
>

Book your private journey today.

</p>


</div>




<Link href="/#hero">
<button

className="
flex
items-center
gap-3
rounded-full
bg-yellow-400
px-7
py-3
font-semibold
text-black
transition
hover:scale-105
"

>

Book Now

<ArrowRight size={18}/>

</button>
</Link>


</motion.div>








{/* Bottom */}

<div

className="
mt-12
border-t
border-white/10
pt-8
text-center
text-sm
text-white/50
"

>

© {new Date().getFullYear()} Wasgamuwa Taxi & Tours.
All rights reserved.
<br>
</br>
Designed and Developed by Neirah Tech Solution.


</div>





</div>


</footer>

)

}








function Social({
icon
}:{
icon:React.ReactNode
}){


return(

<motion.div

whileHover={{
y:-5
}}

className="
flex
h-10
w-10
cursor-pointer
items-center
justify-center
rounded-full
border
border-white/20
bg-white/5
transition
hover:border-yellow-400
hover:text-yellow-400
"

>

{icon}

</motion.div>

)

}