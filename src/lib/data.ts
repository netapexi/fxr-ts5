import { unstable_noStore as noStore } from "next/cache";
import { db } from "./db";

export async function fetchUsers() {

      // equivalent to doing fetch, cache: no-store
  noStore();

  try {
    const data = await db.subscription.findMany({});
    return data;
  }catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users");
  }

}