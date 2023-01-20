export const priceFormat=(price)=>{
   return  Intl.NumberFormat('en-BD', { style: 'currency', currency: 'BDT' }).format(price/100)
}