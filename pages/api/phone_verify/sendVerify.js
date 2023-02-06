import React from 'react';
import prisma from '../../../utils/prisma';

const SendVerify = async (phoneInput) => {
    await prisma.user.findMany({
      where:{
        phone: phoneInput
      }
    })
}

export default SendVerify;
