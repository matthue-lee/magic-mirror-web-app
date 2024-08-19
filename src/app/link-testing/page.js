// pages/index.js
'use client'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase'

export default function page() {

  const handleGoogle = async (e) => {

    const provider = await new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar.events.readonly');
    // provider.addScope('https://www.googleapis.com/auth/calendar.readonly')
    return signInWithPopup( auth, provider)
  }

  return (
    <div>
      <h1>Linik your google account</h1>
      <button
        onClick={handleGoogle}
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        Link your google calendar
      </button>
    </div>
  );
}
