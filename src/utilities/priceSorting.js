export const priceSorting=(products, filter)=>{
    if (filter==='price (highest)') {
        products.sort((p1,p2)=>p2.price-p1.price);
    }
    if (filter==='price (lowest)') {
        products.sort((p1,p2)=>p1.price-p2.price);
    }
}