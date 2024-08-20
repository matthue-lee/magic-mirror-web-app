// pages/index.js
'use client'
import { GoogleAuthProvider, signInWithPopup, OAuthProvider } from "firebase/auth";
import { auth } from '../../../../firebase'

export default function page() {

  const handleGoogleCalendar = async (e) => {
    const provider = await new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar.events.readonly');
    // provider.addScope('https://www.googleapis.com/auth/calendar.readonly')
    return signInWithPopup( auth, provider)
  }

  const handleGoogleEmail = async (e) => {
    const provider = await new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/gmail.readonly')
    return signInWithPopup( auth, provider)
  }


  const handleOutlookEmail = async (e) => {
    const provider = new OAuthProvider('microsoft.com');
    provider.addScope('mail.read');
    signInWithPopup(auth, provider)
    .then((result) => {
      // User is signed in.
      // IdP data available in result.additionalUserInfo.profile.

      // Get the OAuth access token and ID Token
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
    })
    .catch((error) => {
      console.log('there was an error', error)
    });
  }

  const handleOutlookCalendar = async (e) => {
    const provider = new OAuthProvider('microsoft.com');
    provider.addScope('calendars.read');
    signInWithPopup(auth, provider)
    .then((result) => {
      // User is signed in.
      // IdP data available in result.additionalUserInfo.profile.

      // Get the OAuth access token and ID Token
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
    })
    .catch((error) => {
      console.log('there was an error', error)
    });
  }

  return (
    <>
      <h1>Linik your accounts</h1>
      <button
        onClick={handleGoogleCalendar}
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        Link your google calendar
      </button>

      <button
        onClick={handleGoogleEmail}
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        Link your google email
      </button>

      <button
        onClick={handleOutlookEmail}
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        Link your Outlook email
      </button>

      <button
        onClick={handleOutlookCalendar}
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        Link your Outlook calendar
      </button>
    </>
  );
}
