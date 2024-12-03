//calculate the age of a driver, print if driver meets the standard age to be licensed

const age = 12;
const isOldEnough = age >= 18;

if (isOldEnough){
    console.log(`Sarah is ready to be licensed as a driver of the Federal Republic of Nigeria`);
}
else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young to be licensed. Wait for ${yearsLeft} years 😁!`)
}

