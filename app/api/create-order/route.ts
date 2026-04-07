import { NextResponse } from "next/server";

import { razorpayClient, stripeClient } from "@/lib/payments";

export async function POST(request: Request) {
  const payload = await request.json();
  const amount = Number(payload.totalAmount ?? 0);

  if (razorpayClient) {
    const order = await razorpayClient.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `booking_${Date.now()}`,
      notes: {
        guestName: payload.guestName ?? "Guest",
        propertyName: payload.propertyName ?? "Trayati Stays",
        checkIn: payload.checkIn ?? "",
        checkOut: payload.checkOut ?? "",
      },
    });

    return NextResponse.json({ provider: "razorpay", order });
  }

  if (stripeClient) {
    const session = await stripeClient.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: payload.propertyName ?? "Trayati Stays booking",
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/dashboard?booking=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/properties`,
    });

    return NextResponse.json({ provider: "stripe", sessionId: session.id, url: session.url });
  }

  return NextResponse.json({
    provider: "mock",
    message: "Configure Razorpay or Stripe keys to activate live checkout.",
  });
}
