"use client";

import { app } from "@/config/FirebaseConfig";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import MeetingTypePage from "./meeting-type/page";

const DashboardPage = () => {
  const db = getFirestore(app);

  const { user } = useKindeBrowserClient();

  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    user && isBussinessRegistered();
  });

  const isBussinessRegistered = async () => {
    // const docRef = doc(db, "Business", "user?.email");
    // const docSnap = await getDoc(docRef);
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    //   setLoading(false)
    // } else {
    //   // docSnap.data() will be undefined in this case
    //   console.log("No such document!");
    //   setLoading(false)
    //   router.replace('/create-business')
    // }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
     <MeetingTypePage/>
    </div>
  );
};

export default DashboardPage;
