"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Plane,
  Car,
  PawPrint,
  Map,
  Check,
  ArrowUpRight,
} from "lucide-react";

import SectionHeading from "./SectionHeading";


const services = [
  {
    title: "Airport Transfers",
    subtitle: "Stress-Free Airport Pickups",
    description:
      "Reliable airport pickup and drop-off services to and from Bandaranaike International Airport with professional drivers and comfortable vehicles.",
    image: "/images/airport.jpg",
    icon: Plane,
    location: "Airport → Anywhere in Sri Lanka",
    button: "Book Airport Transfer",
    href: "/#hero",
    features: [
      "24/7 Airport Service",
      "Flight Monitoring",
      "Meet & Greet",
    ],
  },

  {
    title: "National Park Safaris",
    subtitle: "Experience Sri Lanka's Wildlife",
    description:
      "Explore Sri Lanka's famous national parks with experienced safari drivers and comfortable 4x4 vehicles for unforgettable wildlife adventures.",
    image: "/images/safaritour.jpg",
    icon: PawPrint,
    location: "Minneriya • Kaudulla • Hurulu • Wasgamuwa",
    button: "Explore Safaris",
    href: "/tours",
    features: [
      "Private Safari Tours",
      "Experienced Drivers",
      "Flexible Schedule",
    ],
  },

  {
    title: "Riverston Tours",
    subtitle: "Escape to the Mountains",
    description:
      "Visit the breathtaking Riverston mountain range, waterfalls, viewpoints, and scenic hiking trails with our comfortable guided tours.",
    image: "/customer/cus6.jpeg",
    icon: Map,
    location: "Riverston • Pitawala Pathana",
    button: "View Riverston Tour",
    href: "/tours",
    features: [
      "Scenic Viewpoints",
      "Nature Trails",
      "Private Day Tours",
    ],
  },

  {
    title: "Sigiriya & Dambulla Tours",
    subtitle: "Discover Sri Lanka's Heritage",
    description:
      "Explore the iconic Sigiriya Rock Fortress and the magnificent Dambulla Cave Temple on a comfortable private day tour.",
    image: "/images/sigiriyaex.jpg",
    icon: Map,
    location: "Sigiriya • Dambulla",
    button: "Explore Heritage Tour",
    href: "/tours",
    features: [
      "Private Tour",
      "Flexible Itinerary",
      "Hotel Pickup",
    ],
  },

  {
    title: "Long-Distance Transfers",
    subtitle: "Travel Anywhere in Sri Lanka",
    description:
      "Comfortable intercity taxi transfers to any destination across Sri Lanka with professional, friendly, and experienced drivers.",
    image: "/images/taxi.jpg",
    icon: Car,
    location: "Islandwide Service",
    button: "Book Your Ride",
    href: "/#hero",
    features: [
      "Anywhere in Sri Lanka",
      "Comfortable Vehicles",
      "Door-to-Door Service",
    ],
  },
];



export default function Services() {


return (

<section

id="services"

className="
relative
overflow-x-hidden
overflow-hidden
bg-gradient-to-b
from-[#030014]
via-[#170832]
to-[#2A1263]
py-24
"

>


{/* Glow */}

<div
className="
absolute
left-[-200px]
top-40
h-[450px]
w-[450px]
rounded-full
bg-purple-600/30
blur-[160px]
"
/>


<div
className="
absolute
right-[-200px]
bottom-20
h-[450px]
w-[450px]
rounded-full
bg-fuchsia-500/20
blur-[160px]
"
/>





<div
className="
relative
z-10
container
mx-auto
px-5
"
>


<SectionHeading

badge="OUR SERVICES"

title="Your Journey Begins Here"

description="
From airport arrivals to island adventures,
we create unforgettable travel experiences.
"

/>






<div
className="
relative
mx-auto
mt-20
max-w-6xl
"
>


{/* Timeline Line */}

<div

className="
absolute
left-6
top-0
h-full
w-[2px]
bg-gradient-to-b
from-purple-400
via-fuchsia-500
to-transparent

lg:left-1/2
lg:-translate-x-1/2
"

/>





{
services.map((service,index)=>{


const Icon = service.icon;

const reverse = index % 2 !== 0;



return (

<motion.div

key={service.title}


initial={{
opacity:0,
y:70
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8,
delay:index*.15
}}



className="
relative
mb-20
pl-16

lg:grid
lg:grid-cols-2
lg:gap-16
lg:pl-0
"


>


{/* ICON */}

<div

className="
absolute
left-0
top-8

flex
h-12
w-12
items-center
justify-center

rounded-full

border
border-purple-300/30

bg-gradient-to-br
from-purple-500
to-fuchsia-600

text-white

shadow-[0_0_35px_rgba(168,85,247,.6)]


lg:left-1/2
lg:h-16
lg:w-16
lg:-translate-x-1/2

"

>


<Icon

size={22}

/>


</div>







{/* IMAGE */}


<div

className={`
${reverse ? "lg:order-2" : ""}
`}

>


<motion.div

whileHover={{
scale:1.04
}}

className="
group
relative

h-[260px]

sm:h-[320px]

overflow-hidden

rounded-[32px]

border
border-white/10

shadow-2xl
"


>


<Image

src={service.image}

alt={service.title}

fill

sizes="
(max-width:640px) 100vw,
50vw
"

className="
object-cover
transition
duration-700
group-hover:scale-110
"

/>



<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/80
via-black/20
to-transparent
"

/>


</motion.div>


</div>







{/* CONTENT */}

<div

className={`
mt-6

lg:mt-0

${reverse ? "lg:order-1" : ""}

`}

>


<div

className="
rounded-[32px]

border
border-white/10

bg-white/[0.07]

p-6

sm:p-8

backdrop-blur-xl

shadow-2xl
"

>



<p

className="
text-xs
uppercase
tracking-[3px]
text-purple-300
"

>

{service.subtitle}

</p>





<h3

className="
mt-3

font-[Playfair_Display]

text-3xl

font-bold

text-white

"

>

{service.title}

</h3>





<p

className="
mt-4

leading-7

text-white/65

"

>

{service.description}

</p>







<div

className="
mt-5

text-sm

text-white/70

"

>

{service.location}

</div>







<div

className="
mt-6

flex

flex-wrap

gap-2

"

>

{
service.features.map(feature=>(


<span

key={feature}

className="
flex

items-center

gap-2

rounded-full

border

border-purple-400/20

bg-purple-500/10

px-3

py-2

text-xs

text-white
"

>


<Check

size={13}

className="
text-fuchsia-400
"

/>


{feature}


</span>


))

}

</div>







<Link

href={service.href}

className="
mt-7

flex

w-full

sm:w-fit

items-center

justify-center

gap-2

rounded-full

bg-gradient-to-r

from-purple-500

to-fuchsia-500

px-6

py-3

text-sm

font-semibold

text-white

shadow-xl

transition

hover:scale-105
"

>

{service.button}

<ArrowUpRight size={16}/>

</Link>





</div>


</div>






</motion.div>


)

})

}


</div>


</div>


</section>

);

}