





let message1:string  = "hellow world";
console.log(message1);


function add(a:number,b:number):number{
    return a+b
}
console.log(add(7,8));


let tariq:string[]=["tariq","shariq","adnan","bilal","haris","tanveer","usama",];
tariq.unshift("hamza")

console.log(tariq);

let asghartuple:[string,number]=["tariq",88];
console.log(asghartuple);


let ali :{
    name:string
    lastName:string
    age:number
    adress:string}
    ={
        name:"tariq",
        lastName:"asghar",
        age:44,
        adress:("b.116")
    }
console.log(ali);

//enum hai{
  //  husna,manawwar,aijaz
//};
//console.log(hai);

for(let i = 1;i < 11;i++){
    const a=3;
     console.log(`3 x ${i} = ${3*i}`);
     
}


let myName:string="tariq";


function adnan(){
    console.log("hellow worlrf");
    
}

adnan()

let hai=()=>{
    console.log("taroq");
    
}
hai()


let shariq=()=>{
    console.log("sjhkhhf");
    
}
shariq()



function rahat(name:string,age:number){
    return (`hellow welcom${name},${age}`);
    console.log(rahat("shariq",22));


    
}





for(let i =0;i <3;i++){
    console.log(i);
    
}


let i =0
do{
    console.log(i);
    i++;}
    
while(i < 3);



enum direction{
    up=1,
    down,
    left,
    riht,


}
console.log(direction.down);


function echo<T>(value:T):T{
    return value
}
console.log(echo("hellow"));






let arrowfuncrion=(a:number,b:number):number=>{
    return a+b
    console.log(arrowfuncrion(67,76));
}   


let keys={
    name:"tarirq",
    lastname:"asghar",
    age:67
}
console.log(keys);





//type declaration

let student:{
    name:string
    lastname:string
    age:number
}
student={
    name:"tariq",
    lastname:"asghar",
    age:45
}
console.log(student);



//type anonymation


let mother:{
    name:string,
    age:number,
    lastname:string,
}={name:"tariq",
    age:67,
    lastname:"sghhkds",

}
console.log(mother);


//type alias


type subject={
    subject1:string,
    subject2:string,
    marks:number,
}
let tariquuiuue:subject={
    subject1:"urde",
    subject2:"math",
    marks:89

}
console.log(tariquuiuue);



interface kalliu{
    name:string,
    last:string,
    age:number,
    hobbies:string[],
}
let kameena:kalliu={
    name:"kamme",
    last:"kalluandmullu",
    age:89098,
    hobbies:["taiq","adnan","aashfhkjh"],
}
console.log("kameena");



type tariq={
    name:string,
    lastName:string,
    age:number,
}

let myname:tariq={
    name:"tariq",
    lastName:"asghar",
    age:78
}

/*function raheel(value1:number,value2:number):number{
    return value1*value2
}
console.log(raheel(56,2));
console.log(raheel(99,4));

let sharjeel=()=>{
    console.log("hellow world");
    
}
sharjeel()*/




//let aerofunction=(num7:number,num8:number):number=>{
  //  return num7 + num8
    
//console.log(7,7);
    
//}

//function aerofunction (a:number,b:number):number{
    //return a + b
  //  console.log(aerofunction(7,7));
    
//}
//aerofunction()
//console.log(7+8);





/*let dhoop_bohot_tez :boolean=false
if(dhoop_bohot_tez){
   console.log( "hum thanday paani se nahaaey ge");
   }
else{
    console.log("hum sirf kapra tabdeel karey ge");
    }
    

    function billo(a:number,b:number):number{
        return a+b
    }

console.log(billo(7,8));*/

let isRaising:boolean=false
if(isRaising){
    console.log('wear a rain coat');
}else{
    console.log("wear a sun glass");
    }


let banana:string|number|boolean
banana="apple";
banana=89;
banana=false
console.log(banana);


enum apple{
    fariq,shariq,tabdeel,zees

}
console.log(apple);

let mytauple:[string,number][]

mytauple=[["adil",11],["shan",12],["zeeshan",33],["bashar",44]];
mytauple.push["arman"]
console.log(mytauple);

let fayyaz:string[]
fayyaz=["arman","zeeshan","abdul qayyum","raheel"]
fayyaz.unshift ("tariq")
console.log(fayyaz);

let benazir:string[]=["tariq","zeeshan","abdul qayyum","nasir","faisal",];
benazir.push("anum");
console.log(benazir);















































