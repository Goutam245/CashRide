import { corsHeaders } from "@supabase/supabase-js/cors";

interface Payload {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as Payload;
    // Currently logs server-side; once an email domain is configured,
    // this function can be extended to enqueue a Lovable Email.
    console.log("New vehicle submission:", body);

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("notify-submission error:", e);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
