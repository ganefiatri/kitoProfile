import { PrismaClient } from "@prisma/client";
import React from "react";

// components

import CardTable from "../../components/Cards/CardTable";

// layout for page

import Admin from "../../layout/Admin";

const prisma = new PrismaClient();

export default function Tables({users}) {
  return (
    <>
    <Admin>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <p>{users.email}</p>
          {users.map((item) => (
            <ul>
              <li>{item.email}</li>
            </ul>
          ))}
        </div>
      </div>
    </Admin>
    </>
  );
}

export async function getServerSideProps() {
  const users = await prisma.users.findMany();
  return {
    props: {
      users,
    }
  };
} 

