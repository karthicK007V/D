
var request=new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);



      
    var res=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name); 
     console.log(res);
var  pop=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
console.log(pop);
var name =result.map((ele)=>ele.name);
console.log(name);
var flag =result.map((ele)=>ele.flag);
console.log(flag);
var cap =result.map((ele)=>ele.capital);
console.log(cap);
var population =result.map((ele)=>ele.population).reduce((population,ele)=>population+ele);
console.log(population);
var cur =result.filter((ele)=>
{
    for(var i=0;i<ele.currenices.length;i++)
    {
        if(ele.currencies[i].code==="USD")
        {return true}
    }
}
cur=cur.map((ele)=>ele.name);
 console.log(cur);
    }
    
    
