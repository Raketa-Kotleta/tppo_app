class Operation{
    id
    type
    city
    date
    vin
    car_model
    car_producer
    car_mark
    prod_date
    price
    passport_serial
    passport_num
    worker_id
    seller_name
    seller_passport_serial
    seller_passport_num
    buyer_passport_serial
    buyer_passport_num
    constructor(
        id,
        type,
        city,
        date,
        vin,
        car_model,
        car_producer,
        car_mark,
        prod_date,
        price,
        passport_serial,
        passport_num,
        worker_id,
        seller_name,
        seller_passport_serial,
        seller_passport_num,
        buyer_passport_serial,
        buyer_passport_num){
            this.id = id;
            this.type = type;
            this.city = city;
            this.date = date;
            this.vin =vin;
            this.car_model =car_model;
            this.car_producer =car_producer;
            this.car_mark =car_mark;
            this.prod_date = prod_date;
            this.price = price;
            this.passport_serial = passport_serial;
            this.passport_num = passport_num;
            this.worker_id = worker_id;
            this.seller_name = seller_name;
            this.seller_passport_serial = seller_passport_serial;
            this.seller_passport_num = seller_passport_num;
            this.buyer_passport_serial = buyer_passport_serial;
            this.buyer_passport_num = buyer_passport_num;
        
    }

    
}