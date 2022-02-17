function checkout(cardBalance, price){
    if (price > cardBalance)
    {
    return false;
    }
    else return cardBalance - price;
}


console.log(checkout(500, 100, 40));