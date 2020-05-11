
const filterPrice = (from, to, cars) => {
    const price = cars.map(el => Number(el.price.converted.BYN.amount));
    return price.filter(el => el >= from && el <= to);

}

export {
    filterPrice,
}