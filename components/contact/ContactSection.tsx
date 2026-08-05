"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";


export default function ContactSection() {


const [formData,setFormData] = useState({

name:"",
email:"",
phone:"",
message:"",

});



const handleChange = (
e:React.ChangeEvent<
HTMLInputElement | HTMLTextAreaElement
>
)=>{


const {name,value}=e.target;



if(name==="name"){

setFormData({

...formData,

name:value.replace(
/[^a-zA-Z\s]/g,
""
)

});

return;

}



if (name === "phone") {
  const phone = value
    .replace(/\D/g, "")
    .slice(0, 10);

  setFormData({
    ...formData,
    phone,
  });

  return;
}



setFormData({

...formData,

[name]:value

});


};







const handleSubmit = (
e:React.FormEvent<HTMLFormElement>
)=>{

e.preventDefault();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRegex = /^[0-9]{10}$/;

if (!emailRegex.test(formData.email)) {
  alert("Please enter a valid email address.");
  return;
}

if (!phoneRegex.test(formData.phone)) {
  alert("Phone number must contain exactly 10 digits.");
  return;
}

const whatsappNumber =
"94763433434";



const message = `

*New Booking Enquiry*

*Full Name:*
${formData.name}


*Email:*
${formData.email}


*Phone:*
${formData.phone}


*Message:*
${formData.message}

`;



const whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
message
)}`;



window.open(
whatsappURL,
"_blank"
);



setFormData({

name:"",
email:"",
phone:"",
message:""

});


};







return (

<section

id="contact"

className="
relative
min-h-screen
overflow-hidden
bg-[#031A12]
pt-28
sm:pt-32
lg:pt-36
"

>





{/* BACKGROUND GLOW */}


<div

className="
absolute
inset-0
overflow-hidden
"

>


<div

className="
absolute
-left-32
top-10
h-72
w-72
sm:h-96
sm:w-96
rounded-full
bg-green-500/10
blur-[120px]
"

/>



<div

className="
absolute
right-0
bottom-0
h-72
w-72
sm:h-96
sm:w-96
rounded-full
bg-emerald-600/20
blur-[120px]
"

/>



</div>









<div

className="
relative
mx-auto
max-w-7xl
px-4
sm:px-6
lg:px-8
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
mb-12
sm:mb-16
text-center
"

>





<span

className="
inline-block
rounded-full
bg-green-400/20
px-4
py-2
text-xs
sm:text-sm
font-semibold
text-green-300
"

>

CONTACT US

</span>








<h2

className="
mt-6
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
leading-tight
text-white
"

>

Ready For Your


<span

className="
text-green-400
"

>

 Next Ride?

</span>



</h2>







<p

className="
mx-auto
mt-5
max-w-2xl
text-sm
sm:text-base
leading-7
text-slate-300
"

>

Whether you need an airport transfer,
city taxi, wildlife safari,
or a private tour, we're available
24/7 to make your journey safe
and comfortable.

</p>



</motion.div>









<div

className="
grid
gap-8
lg:grid-cols-2
lg:gap-12
"

>









{/* CONTACT DETAILS */}



<motion.div

initial={{

opacity:0,

x:-50

}}

whileInView={{

opacity:1,

x:0

}}

transition={{

duration:.7

}}

viewport={{

once:true

}}

className="
space-y-5
sm:space-y-6
"

>


{[


{
icon:Phone,
title:"Call Us",
value:"+94 76 343 3434"
},


{
icon:Mail,
title:"Email",
value:"wasgamuwataxi@gmail.com"
},


{
icon:MapPin,
title:"Location",
value:"Wasgamuwa, Sri Lanka"
},


{
icon:Clock,
title:"Working Hours",
value:"Open 24 Hours"
}



].map((item,index)=>(


<motion.div

key={index}

whileHover={{

scale:1.03,

y:-5

}}

className="
flex
items-center
gap-4
rounded-3xl
border
border-white/10
bg-white/5
p-4
sm:p-6
backdrop-blur-xl
"

>


<div

className="
shrink-0
rounded-2xl
bg-green-400
p-3
sm:p-4
"

>


<item.icon

className="
text-[#031A12]
"

size={22}

/>


</div>





<div>


<p

className="
text-xs
sm:text-sm
text-slate-400
"

>

{item.title}

</p>


<h3

className="
mt-1
break-all
text-base
sm:text-lg
font-semibold
text-white
"

>

{item.value}

</h3>


</div>



</motion.div>


))}



</motion.div>
{/* CONTACT FORM */}


<motion.form

onSubmit={handleSubmit}

initial={{
opacity:0,
x:60
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.7
}}

viewport={{
once:true
}}

className="
rounded-[30px]
border
border-white/10
bg-white/5
p-5
sm:p-8
backdrop-blur-xl
shadow-2xl
"

>


<div className="grid gap-5">





{/* NAME */}


<input

type="text"

name="name"

required

value={formData.name}

onChange={handleChange}

placeholder="Full Name"

inputMode="text"

className="
w-full
rounded-xl
border
border-white/10
bg-white/10
px-4
sm:px-5
py-3.5
sm:py-4
text-sm
sm:text-base
text-white
placeholder:text-slate-400
outline-none
transition
focus:border-green-400
focus:ring-2
focus:ring-green-400/20
"

/>







{/* EMAIL */}


<input
  type="email"
  name="email"
  required
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
  title="Please enter a valid email address (e.g. name@example.com)"
  className="
  w-full
  rounded-xl
  border
  border-white/10
  bg-white/10
  px-4
  sm:px-5
  py-3.5
  sm:py-4
  text-sm
  sm:text-base
  text-white
  placeholder:text-slate-400
  outline-none
  transition
  focus:border-green-400
  focus:ring-2
  focus:ring-green-400/20
  "
/>

{/* PHONE */}


<input

type="tel"

name="phone"

required

value={formData.phone}

onChange={handleChange}

placeholder="Phone Number"

inputMode="numeric"

maxLength={10}
pattern="[0-9]{10}"
title="Phone number must contain exactly 10 digits"

className="
w-full
rounded-xl
border
border-white/10
bg-white/10
px-4
sm:px-5
py-3.5
sm:py-4
text-sm
sm:text-base
text-white
placeholder:text-slate-400
outline-none
transition
focus:border-green-400
focus:ring-2
focus:ring-green-400/20
"

/>







{/* MESSAGE */}


<textarea

rows={5}

name="message"

required

value={formData.message}

onChange={handleChange}

placeholder="Your Message"

className="
w-full
resize-none
rounded-xl
border
border-white/10
bg-white/10
px-4
sm:px-5
py-3.5
sm:py-4
text-sm
sm:text-base
text-white
placeholder:text-slate-400
outline-none
transition
focus:border-green-400
focus:ring-2
focus:ring-green-400/20
"

/>









{/* WHATSAPP BUTTON */}


<button

type="submit"

className="
group
mt-3
flex
w-full
items-center
justify-center
gap-3
rounded-xl
bg-gradient-to-r
from-green-400
to-emerald-500
py-4
text-sm
sm:text-base
font-semibold
text-[#031A12]
transition-all
duration-300
hover:scale-[1.02]
hover:shadow-[0_15px_40px_rgba(34,197,94,.35)]
"

>


Send via WhatsApp



<Send

size={18}

className="
transition-transform
duration-300
group-hover:translate-x-1
"

/>



</button>





</div>


</motion.form>





</div>


</div>


</section>


);

}