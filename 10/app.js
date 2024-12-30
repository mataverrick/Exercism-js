import { createVisitor, revokeTicket, ticketStatus, simpleTicketStatus ,gtcVersion} from './amusement-park.js';

// let result = new createVisitor('Verena Nardi', 45, 'H32AZ123');
// console.log(result);


// result = revokeTicket(result);
// console.log(result);



// console.log(ticketStatus(tickets, 'RE90VAW7'));
// // => 'unknown ticket id'

// console.log(ticketStatus(tickets, '0H2AZ123'));
// // => 'not sold'

// console.log(ticketStatus(tickets, '23LA9T41'));
// // => 'sold to Verena Nardi'

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
};

const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
        signed: true,
        version: '2.1',
    },
};

const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
};

// console.log(simpleTicketStatus(tickets, '23LA9T41'));
// // => 'Verena Nardi'

// console.log(simpleTicketStatus(tickets, '0H2AZ123'));
// // => 'invalid ticket !!!'

// console.log(simpleTicketStatus(tickets, 'RE90VAW7'));
// // => 'invalid ticket !!!'


console.log(gtcVersion(visitorNew));
// => '2.1'

console.log(gtcVersion(visitorOld));
// => undefined