console.log("js file connected")

document.getElementById('case-plus').addEventListener('click',function(){
    const prevQuantity= parseInt(document.getElementById('case-quantity').value);
    const newCaseNumber=parseInt(prevQuantity+1);
    console.log(newCaseNumber)
    document.getElementById('case-quantity').value=newCaseNumber;
    // prevQuantity==newCaseNumber

    // const basePrice=parseInt(document.getElementById('case-price').value);
    // console.log(basePrice)
    const updatedPrice= 59*newCaseNumber;
    console.log(updatedPrice)
    document.getElementById('case-price').innerText=updatedPrice


})

document.getElementById('case-minus').addEventListener('click',function(){
    const prevQuantity= parseInt(document.getElementById('case-quantity').value);
    const newCaseNumber=prevQuantity-1;
    console.log(newCaseNumber)
    document.getElementById('case-quantity').value=newCaseNumber;
    // prevQuantity==newCaseNumber



})