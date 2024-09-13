
// // app/api/sendUserInfo/route.js
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//     try {
//         return NextResponse.json({ status: 'success' });
//     } catch (error) {
//         return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
//     }
// }


export async function GET(request) {
    return new Response(JSON.stringify({ message: "User info sent" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }