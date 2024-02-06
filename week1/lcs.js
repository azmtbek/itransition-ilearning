a=process.argv.slice(2)
r=a[0]||'',t=r.length
for(n=t;~n;n--)for(g=0;g<=t-n;g++){s=r.slice(g,g+n)
if(a.every(x=>x.includes(s)))return console.log(s)}