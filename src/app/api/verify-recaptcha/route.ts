import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { token } = await request.json();
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
  );
  const data = await res.json();

  if (!data.success) {
    return NextResponse.json(
      { success: false, error: 'Failed CAPTCHA verification' },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true });
}
