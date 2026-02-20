import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export const USER_SIGNUP = async (userData) => {
  console.log(userData);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email.trim(),
      userData.password
    );

    const user = userCredential.user;

    // 2️⃣ Store extra data in Firestore
    const response = await setDoc(doc(db, "users", user.uid), {
      name: userData.name,
      email: userData.email,
      role: userData.role,
      companyname: userData.companyname || null,
      createdAt: serverTimestamp()
    });

    console.log(response)

    console.log("User created:", userCredential.user);
    alert("Signup successful!");

  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
};