import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth"
import { db, auth, createTimestamp } from "../firebase";

export default function useAuthUser() {
  const [user, loading, error] = useAuthState(auth);

  React.useEffect(() => {
    if (user) {
      const ref = db.collection('users').doc(user.uid);
      ref.get().then(doc => {
        if (!doc.exists) {
          ref.set({
            name: user.displayName,
            photoURL: user.photoURL,
            timestamp: createTimestamp()
          })
        };
      })
    }
  }, [user])

  return user;
}
