
const filterPrice = (from=0, to=Infinity, cars) => {
    const finedCars = cars.filter(el => {
      if (Number(el.price.converted.BYN.amount) >= from && Number(el.price.converted.BYN.amount) <= to) return el;
    });
    return finedCars;
}

export {
    filterPrice,
}