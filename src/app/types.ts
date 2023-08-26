export interface Event {
    _id: string,
    name: string,
    type: string,
    owner: string,
    street: string,
    city: string,
    description: string,
    startDate: Date,
    endDate: Date,
    image: string,
    latitude: number,
    longitude: number,
    participants: string[],
    price: number,
    isPromoted: boolean,
}

export interface Ticket {
    _id: string,
    name: string,
    type: string,
    price: number,
    date: Date,
    event: string
}

export interface User {
    _id: string,
    username: string,
    email: string,
    password: string,
    image: string,
    events: string[],
    tickets: string[],
    role: string,
    token: string
}