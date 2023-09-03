/* Develop a program that reads a list of grades and uses the
splice method to remove failing grades (below 50) from the array. */

let grade : number[] = [84, 94, 92, 63, 26, 23, 72, 45, 50, 60];

let i : number = 0;

while(i<=grade.length){

    if(grade[i]<50){
        grade.splice(i,1);
        i--;
    }
    i++;
}


console.log(grade);

