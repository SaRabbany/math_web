const students = [
    { name: 'sakin',
        age : 12
},
{ name: 'rakin',
    age: 32
},
{ name: 'sahir',
age :19},
];

 function staudentName(x){
       return students.filter(function(x){
          return x.age >15;
      }).map(function(y){
          return y.name;
      });
 }

const studentdata2 =(x)=> students.filter((x)=>x.age<15).map((z)=> z.name);
 
 //console.log(staudentName());
 console.log(studentdata2());



 var list =[1,2,3,4,5,6,7,8,9,10];

 var result = list.findIndex((currentValue)=>{
     return currentValue > 8;
 });
 console.log(result);

 var result3 = list.filter((x , y ,z)=>{
     console.log(y);
     console.log(z);
     return x>4;
 })
 console.log(result3);

 var result4 =  list.slice(-3,8);
 console.log(result4);