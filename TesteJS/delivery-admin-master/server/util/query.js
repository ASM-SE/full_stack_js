'use strict';

let query = {
    searchCustomer: function() {
        return {
            $or: [
                {givenName: search},
                {telephone: search},
                {email: search},
                {'adress.postalCode': search}
            ]
        }
    }
}

module.exports = query;