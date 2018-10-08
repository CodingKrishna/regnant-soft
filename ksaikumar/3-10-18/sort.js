var size=[{size:"xxl",p:5},{size:"xl",p:4},{size:"s",p:1},{size:"l",p:3},{size:"m",p:2}];
size.sort(function(a,b){return a.p-b.p});
for(var i=0;i<size.length;i++){
 console.log(size[i].size);
}
