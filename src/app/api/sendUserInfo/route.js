// app/api/getGoogleEmail/route.js
import { NextResponse } from 'next/server';
import admin from 'firebase-admin';
import serviceAccount from '../../../firebase/serviceAccountCredential.json'


// Initialize Firebase Admin SDK (only once)
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

export async function POST(request) {
    try {
        const { email } = await request.json();
        console.log('Email received:', email);

        // Retrieve user by email using Firebase Admin SDK
        const userRecord = await admin.auth().getUserByEmail(email);
        console.log('User record:', userRecord);

        // Extract Google email from userRecord if available
        let googleEmail = null;
        const providerData = userRecord.providerData.find(
            (provider) => provider.providerId === 'google.com'
        );

        if (providerData) {
            googleEmail = providerData.email;
        }

        if (googleEmail) {
            return NextResponse.json({ status: 'success', googleEmail });
        } else {
            return NextResponse.json({ status: 'error', message: 'Google email not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error retrieving Google email:', error);
        return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
    }
}
