export const topGeneration =async()=>{
    const res= await fetch("https://pixgen-sigma.vercel.app/data.json");
    const data=await res.json();
    return data;
}

