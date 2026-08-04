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


{/* Green Glow */}

<div
className="
absolute
-left-40
top-20
h-[400px]
w-[400px]
rounded-full
bg-green-500/10
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
bg-lime-400/10
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
text-lime-300
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
href="https://www.facebook.com/share/1E43DZb69i/"
/>

<Social 
icon={<FaInstagram size={18}/>} 
href="https://www.instagram.com/wasgamuwataxi?utm_source=qr"
/>

<Social 
icon={<FaYoutube size={18}/>} 
href="https://www.youtube.com/YOUR_YOUTUBE_CHANNEL"
/>
</div>


</div>









{/* LINKS */}

<div>


<h3
className="
text-lg
font-semibold
text-green-400
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

<li
className="
transition
hover:text-lime-300
"
>

Home

</li>

</Link>


<Link href="/about">

<li
className="
transition
hover:text-lime-300
"
>

About Us

</li>

</Link>


<Link href="/tours">

<li
className="
transition
hover:text-lime-300
"
>

Tours

</li>

</Link>



<Link href="/contact">

<li
className="
transition
hover:text-lime-300
"
>

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
text-green-400
"
>

Our Services

</h3>


<ul
className="
mt-5
space-y-3
text-white/60
"
>

<li>

<Link

href="/#services"

className="
transition
hover:text-lime-300
"

>

Airport Transfers

</Link>

</li>



<li>

<Link

href="/#services"

className="
transition
hover:text-lime-300
"

>

Wildlife Safari Tours

</Link>

</li>



<li>

<Link

href="/#services"

className="
transition
hover:text-lime-300
"

>

Custom Sri Lanka Tours

</Link>

</li>



<li>

<Link

href="/#services"

className="
transition
hover:text-lime-300
"

>

Hotel Transfers

</Link>

</li>



<li>

<Link

href="/#services"

className="
transition
hover:text-lime-300
"

>

Private Chauffeur

</Link>

</li>


</ul>


</div>
{/* CONTACT */}

<div>


<h3
className="
text-lg
font-semibold
text-green-400
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

className="
text-green-400
"

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

className="
text-green-400
"

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

className="
text-green-400
"

size={20}

/>

<span>
wasgamuwataxi@gmail.com
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
bg-lime-300
px-7
py-3
font-semibold
text-green-950
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

<br></br>

<p>

Designed and Developed by{" "}

<a

href="https://www.neirahtech.com/"

target="_blank"

rel="noopener noreferrer"

className="
text-green-400
font-semibold
hover:text-lime-300
transition
"

>

Neirahtech

</a>


</p>



</div>





</div>


</footer>


)

}









function Social({

icon,
href

}:{

icon:React.ReactNode,
href:string

}){


return(

<motion.a

href={href}

target="_blank"

rel="noopener noreferrer"

whileHover={{

y:-5,
scale:1.08

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
hover:border-green-400
hover:text-green-400
"

>

{icon}

</motion.a>

)

}

