import React from 'react';

const ValidateInput = (input) => {
    const validName = input.name.length > 1;
    const validEmail = input.email > 1;
    const validMessage = input.message > 1;

    return {
        name: validName,
        email: validEmail,
        message: validMessage
    }
}

export default ValidateInput;