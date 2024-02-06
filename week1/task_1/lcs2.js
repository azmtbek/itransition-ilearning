a=process.argv.slice(2)
l=(e)=>{r=a[0]||'',t=r.length
for(n=t;~n;n--)for(g=0;g<=t-n;g++){
s=r.slice(g,g+n)
if(e.every(e=>e.includes(s)))return s}return ""}
console.log(l(a))