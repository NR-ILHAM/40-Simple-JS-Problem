// 1st problem > ভ্যারিয়েবল, কনসোল, কন্ডিশন

const age = 17; //aikane const variable ta dara bujai man change kora jabe

if (age >= 18)
{
    console.log("Adult");
} else
{
        console.log(" Not Adult");

}

// 2nd problem >> লুপ দিয়ে কাউন্ট করা

let count = 0;

for(let i =1; i<=20; i++)
{
    count=count + i;

}
console.log("Total :", count);

// 3rd Problem >>  অ্যারে থেকে সর্বোচ্চ সংখ্যাটি খুঁজে বের করা

const arr = [4, 2, 9, 1, 7];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Total length of array : " ,arr.length);//length count korbe
console.log("Max:", max);
