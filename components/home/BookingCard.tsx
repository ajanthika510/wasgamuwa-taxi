"use client";

import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  useState,
  useEffect,
} from "react";



interface BookingData {

  destination:string;

  date:string;

  travellers:string;

}



interface BookingCardProps {

  bookingData?:BookingData;

}





export default function BookingCard({

bookingData

}:BookingCardProps){



const today = new Date()
.toISOString()
.split("T")[0];





const getInitialFormData = ()=>({

pickup:"",

destination:
bookingData?.destination || "",

date:
bookingData?.date || "",

time:"",

travellers:
bookingData?.travellers || "1 Traveller"

});





const [formData,setFormData]=useState(
getInitialFormData
);






useEffect(()=>{

setFormData(
getInitialFormData()
);


},[bookingData]);









const handleWhatsApp=()=>{


if(
!formData.pickup ||
!formData.destination ||
!formData.date ||
!formData.time ||
!formData.travellers

){

alert(
"Please fill all booking details before continuing."
);

return;

}





const formattedDate =
new Date(formData.date)
.toLocaleDateString(
"en-GB",
{

day:"2-digit",

month:"long",

year:"numeric"

}

);





const message = `Wasgamuwa Taxi & Tours Booking

Hello,

I would like to book a taxi.

Pickup Location:
${formData.pickup}


Destination:
${formData.destination}


Date:
${formattedDate}


Time:
${formData.time}


Travellers:
${formData.travellers}


Please confirm availability and fare.

Thank you.`;





const phone="94763433434";



const whatsappURL=

`https://wa.me/${phone}?text=${encodeURIComponent(
message
)}`;



window.open(
whatsappURL,
"_blank"
);




sessionStorage.removeItem(
"bookingData"
);



setFormData({

pickup:"",

destination:"",

date:"",

time:"",

travellers:"1 Traveller"

});



};










return(



<motion.div

id="booking"
initial={{
opacity:0,
x:60,
scale:.95
}}


animate={{
opacity:1,
x:0,
scale:1
}}



transition={{
duration:.8,
delay:.5
}}


whileHover={{
y:-8
}}



className="
relative
w-full
max-w-lg
mx-auto
overflow-hidden
rounded-[28px]
sm:rounded-[32px]
border
border-white/20
bg-white/10
backdrop-blur-2xl
shadow-[0_25px_60px_rgba(0,0,0,.35)]
"

>



{/* Glass Effect */}


<div
className="
absolute
inset-0
bg-gradient-to-br
from-white/10
via-transparent
to-amber-300/10
"
/>

<div
className="
relative
p-4
sm:p-6
lg:p-8
"
>



<h3
className="
text-2xl
sm:text-3xl
font-bold
text-white
"
>

Book Your Ride

</h3>




<p
className="
mt-1
text-sm
text-white/70
"
>

Fast • Safe • Comfortable
</p>



<div
className="
mt-6
space-y-3
"
>



<InputBox
icon={<MapPin size={20}/>}
color="text-amber-300"
placeholder="Pickup Location"
value={formData.pickup}
onChange={(e)=>
setFormData({
...formData,
pickup:e.target.value
})
}
/>


<InputBox

icon={<MapPin size={20}/>}

color="text-red-300"

placeholder="Destination"

value={formData.destination}

onChange={(e)=>

setFormData({

...formData,

destination:e.target.value

})

}

/>








<InputBox

icon={<CalendarDays size={20}/>}

color="text-sky-300"

type="date"

value={formData.date}

onChange={(e)=>

setFormData({

...formData,

date:e.target.value

})

}

/>







<InputBox

icon={<Clock3 size={20}/>}

color="text-violet-300"

type="time"

value={formData.time}

onChange={(e)=>

setFormData({

...formData,

time:e.target.value

})

}

/>







<select


value={formData.travellers}


onChange={(e)=>

setFormData({

...formData,

travellers:e.target.value

})

}



className="

w-full

rounded-2xl

border

border-white/15

bg-black/30

px-4

py-3

text-sm

text-white

outline-none

backdrop-blur-xl

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









<motion.button


onClick={handleWhatsApp}


disabled={

!formData.pickup ||

!formData.destination ||

!formData.date ||

!formData.time ||

!formData.travellers

}



whileHover={{

scale:1.03

}}


whileTap={{

scale:.97

}}



className={`

mt-6

flex

w-full

items-center

justify-center

gap-3

rounded-2xl

py-3.5

font-semibold

transition


${
!formData.pickup ||
!formData.destination ||
!formData.date ||
!formData.time ||
!formData.travellers

?

"cursor-not-allowed bg-gray-400 text-gray-700"

:

"bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:shadow-[0_15px_40px_rgba(251,191,36,.45)]"

}


`}



>


Book Now


<ArrowRight size={18}/>


</motion.button>







<div

className="

mt-5

grid

grid-cols-3

gap-2

rounded-2xl

border

border-white/10

bg-white/5

p-3

"

>


<Stat
number="24/7"
label="Support"
/>


<Stat
number="100%"
label="Safe"
/>


<Stat
number="10K+"
label="Clients"
/>



</div>



</div>



</motion.div>



);


}









function InputBox({

icon,

color,

placeholder,

type="text",

value,

onChange


}:{

icon:React.ReactNode;

color:string;

placeholder?:string;

type?:
"text"|"date"|"time";

value:string;

onChange:

(e:React.ChangeEvent<HTMLInputElement>)=>void;


}){



const today =
new Date()
.toISOString()
.split("T")[0];



return(


<div

className="

flex

items-center

gap-3

rounded-2xl

border

border-white/15

bg-white/10

px-4

py-3

"

>



<div

className={color}

>

{icon}

</div>





<input


type={type}


{...(type==="date"
?
{
min:today
}
:
{})}



value={value}


onChange={onChange}



placeholder={placeholder}



className="

w-full

bg-transparent

text-sm

text-white

outline-none

placeholder:text-white/50

"





/>



</div>


);


}








function Stat({

number,

label

}:{

number:string;

label:string;

}){


return(


<div

className="

text-center

"

>


<p

className="

text-lg

font-bold

text-white

"

>

{number}

</p>



<span

className="

text-[11px]

text-white/60

"

>

{label}

</span>



</div>


);


}