"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Tours", href: "/tours" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];


export default function Navbar() {

const [scrolled,setScrolled] = useState(false);
const [open,setOpen] = useState(false);



useEffect(()=>{

const handleScroll = () =>{
setScrolled(window.scrollY > 20);
};


window.addEventListener(
"scroll",
handleScroll
);


return ()=> 
window.removeEventListener(
"scroll",
handleScroll
);


},[]);



return (

<>

<motion.header

initial={{
y:-100
}}

animate={{
y:0
}}

transition={{
duration:.6
}}

className={`
fixed
top-0
left-0
z-50
w-full
transition-all
duration-300

${
scrolled
?
"bg-white/95 shadow-xl backdrop-blur-xl"
:
"bg-white/80 backdrop-blur-md"
}

`}

>


<div
className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-4
sm:px-6
py-3
"
>


{/* LOGO */}

<Link
href="/"
className="
flex
items-center
gap-2
sm:gap-3
"
>


<Image

src="/images/logo_wasgamuwa.png"

alt="Wasgamuwa Taxi Logo"

width={60}

height={60}

className="
h-12
w-12
sm:h-16
sm:w-16
rounded-full
object-cover
"

/>


<div>

<h2
className="
text-lg
sm:text-xl
lg:text-2xl
font-bold
text-zinc-900
"
>
Wasgamuwa
</h2>


<p
className="
-mt-1
text-xs
sm:text-sm
lg:text-base
font-semibold
text-amber-500
"
>
Taxi & Tours
</p>


</div>


</Link>






{/* DESKTOP MENU */}

<nav
className="
hidden
lg:flex
items-center
gap-8
xl:gap-10
"
>

{
links.map((link)=>(

<Link

key={link.name}

href={link.href}

className="
group
relative
text-base
xl:text-lg
font-semibold
text-zinc-700
transition
hover:text-amber-500
"

>

{link.name}


<span
className="
absolute
left-0
-bottom-2
h-[2px]
w-0
bg-amber-500
transition-all
duration-300
group-hover:w-full
"
/>


</Link>

))
}


</nav>








{/* DESKTOP ACTIONS */}

<div
className="
hidden
lg:flex
items-center
gap-3
"
>


<a

href="tel:+94763434343"

className="
flex
items-center
gap-2
rounded-full
border
bg-white
px-4
py-2
text-sm
shadow-sm
hover:shadow-lg
transition
"

>

<Phone
size={18}
className="text-amber-500"
/>


<span className="font-semibold">
+94 76 343 3434
</span>


</a>




<Link href="/#hero">

<button

className="
rounded-xl
bg-amber-400
px-5
py-3
font-semibold
text-black
transition
hover:scale-105
hover:bg-amber-500
"

>

Book Now

</button>


</Link>


</div>







{/* MOBILE BUTTON */}

<button

onClick={()=>setOpen(!open)}

className="
lg:hidden
rounded-lg
p-2
"

>

{
open
?
<X size={28}/>
:
<Menu size={28}/>
}

</button>


</div>


</motion.header>










{/* MOBILE MENU */}


<AnimatePresence>

{
open && (

<motion.div

initial={{
opacity:0,
y:-30
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-30
}}

className="
fixed
top-[72px]
left-0
z-40
w-full
bg-white
shadow-xl
lg:hidden
"

>


<div
className="
flex
flex-col
p-6
"
>


{
links.map((item)=>(

<Link

key={item.name}

href={item.href}

onClick={()=>setOpen(false)}

className="
border-b
py-4
text-lg
font-medium
text-zinc-700
"

>

{item.name}

</Link>

))
}



<Link
href="/#hero"
onClick={()=>setOpen(false)}
>

<button

className="
mt-6
w-full
rounded-xl
bg-amber-400
py-4
font-semibold
text-black
"

>

Book Now

</button>


</Link>


</div>


</motion.div>

)

}

</AnimatePresence>


</>

);

}