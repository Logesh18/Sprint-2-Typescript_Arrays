import { StringManipulationService } from "./app-service";

export class ArrayManipulations implements StringManipulationService {

    constructor() {}

    public arrayFindMultiples(myArray: any) : Array<number> {
        let arr:number[]=new Array();
        for(let i of myArray){
            if(typeof i==="number" &&(i%5==0 || i%10==0)){
                arr.push(i);
            }
        }
        return arr;
    }

    public arraySeparate(myArray: any) : Array<string>{
        let arr:string[]=new Array();
        for(let i of myArray){
            if(typeof i === "string"){
                arr.push(i);
            }
        }
        return arr;
    }

    public arraySplit(myString: string[]) : Array<number>{
        let arr:number[]=new Array();
        let f:number;
        for(let i of myString){
            f=0;
            if(!isNaN(Number(i))){
                let n:number=Number(i);
                for(let j:number=2;j<n;j++){
                    if(n%j==0){
                        f=1;
                    }
                }
                if(f==0){
                    arr.push(n);
                }
            }
        }
        return arr;
    }

    public arraySort(myArray:any):Array<string>{
        return myArray.sort((a:string, b:string) => a.localeCompare(b));
    }

    public arrayReplace(myArray:any):Array<number>{
        for(let i in myArray){
            if(myArray[i]%3==0){
                myArray[i]=5;
            }
        }
        return myArray;
    }    
       
}

let myArray: any[] = [34, 45, "hello", 60,"hi", 23,"apple", "13", 17, 25, 70,"mango"];
let array = new ArrayManipulations();

console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(["31","25","hello","40","67","100","hi"]));
console.log(array.arraySort(["31","25","hello","40","67","100","hi"]));
console.log(array.arrayReplace([8,2,66,38,19,21,84,96]));



