// app/api/checkout_sessions/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Inicializa o Stripe com a sua chave secreta e a versão da API
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover', 
});

export async function POST(req: NextRequest) {
  try {
    const { priceId, churchId } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: 'Price ID é obrigatório' }, { status: 400 });
    }
    if (!churchId) {
        return NextResponse.json({ error: 'Church ID é obrigatório' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      // Guarda o ID da igreja para usar no webhook
      client_reference_id: churchId,
      success_url: `${req.nextUrl.origin}/sucesso`,
      cancel_url: `${req.nextUrl.origin}/`,
    });

    // Retorna a URL da sessão para o frontend redirecionar
    return NextResponse.json({ url: session.url });

  } catch (err: any) {
    console.error('Erro ao criar a sessão de checkout:', err);
    return NextResponse.json({ error: `Erro interno do servidor: ${err.message}` }, { status: 500 });
  }
}