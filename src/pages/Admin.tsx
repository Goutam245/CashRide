import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, LogOut, Download, Trash2, Plus, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import SEO from "@/components/SEO";
import { toast } from "sonner";

interface Submission {
  id: string; full_name: string; email: string; phone: string; location: string;
  make: string; model: string; year: number; mileage: number | null;
  condition: string; asking_price: number | null; notes: string | null;
  photo_urls: string[]; status: string; created_at: string;
}
interface Testimonial {
  id: string; author_name: string; location: string | null; rating: number;
  quote: string; published: boolean; display_order: number;
}

const Admin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [subs, setSubs] = useState<Submission[]>([]);
  const [tests, setTests] = useState<Testimonial[]>([]);

  const loadData = async () => {
    const [{ data: s }, { data: t }] = await Promise.all([
      supabase.from("vehicle_submissions").select("*").order("created_at", { ascending: false }),
      supabase.from("testimonials").select("*").order("display_order", { ascending: true }),
    ]);
    setSubs(s ?? []);
    setTests(t ?? []);
  };

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate("/admin/auth", { replace: true }); return; }
      setUserId(session.user.id);
      const { data: roleRows } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id);
      const admin = roleRows?.some((r) => r.role === "admin") ?? false;
      setIsAdmin(admin);
      if (admin) await loadData();
      setLoading(false);
    };
    init();
  }, [navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/auth", { replace: true });
  };

  const grantSelfAdmin = async () => {
    if (!userId) return;
    // Allowed only if no admin exists yet (first-run bootstrap)
    const { count } = await supabase.from("user_roles").select("id", { count: "exact", head: true }).eq("role", "admin");
    if ((count ?? 0) > 0) {
      toast.error("An admin already exists. Ask them to grant access.");
      return;
    }
    const { error } = await supabase.from("user_roles").insert({ user_id: userId, role: "admin" });
    if (error) toast.error(error.message);
    else { toast.success("You're now the admin!"); window.location.reload(); }
  };

  const deleteSubmission = async (id: string) => {
    if (!confirm("Delete this submission?")) return;
    const { error } = await supabase.from("vehicle_submissions").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { setSubs(subs.filter((s) => s.id !== id)); toast.success("Deleted"); }
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("vehicle_submissions").update({ status }).eq("id", id);
    if (error) toast.error(error.message);
    else { setSubs(subs.map((s) => s.id === id ? { ...s, status } : s)); }
  };

  const exportCsv = () => {
    const headers = ["Date", "Name", "Email", "Phone", "Location", "Vehicle", "Year", "Mileage", "Condition", "Asking Price", "Status", "Notes"];
    const rows = subs.map((s) => [
      new Date(s.created_at).toLocaleString(),
      s.full_name, s.email, s.phone, s.location,
      `${s.make} ${s.model}`, s.year, s.mileage ?? "", s.condition,
      s.asking_price ?? "", s.status, (s.notes ?? "").replace(/\n/g, " "),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `submissions-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click(); URL.revokeObjectURL(url);
  };

  const addTestimonial = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const { error } = await supabase.from("testimonials").insert({
      author_name: String(f.get("author_name") || ""),
      location: String(f.get("location") || "") || null,
      rating: Number(f.get("rating") || 5),
      quote: String(f.get("quote") || ""),
      display_order: tests.length + 1,
    });
    if (error) toast.error(error.message);
    else { toast.success("Added"); (e.target as HTMLFormElement).reset(); loadData(); }
  };

  const togglePublished = async (id: string, current: boolean) => {
    const { error } = await supabase.from("testimonials").update({ published: !current }).eq("id", id);
    if (error) toast.error(error.message);
    else setTests(tests.map((t) => t.id === id ? { ...t, published: !current } : t));
  };

  const deleteTestimonial = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return;
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) toast.error(error.message);
    else setTests(tests.filter((t) => t.id !== id));
  };

  if (loading) {
    return <div className="container py-32 text-center"><Loader2 className="h-8 w-8 animate-spin mx-auto" /></div>;
  }

  if (!isAdmin) {
    return (
      <section className="container py-16 max-w-md">
        <SEO title="Admin — CashRide" description="Admin dashboard" />
        <h1 className="text-2xl mb-3">Awaiting access</h1>
        <p className="text-muted-foreground mb-6">
          Your account doesn't have admin permissions yet. If you're the site owner setting up for the first time, click below to claim admin access.
        </p>
        <div className="flex gap-3">
          <Button onClick={grantSelfAdmin} variant="hero">Claim admin access</Button>
          <Button onClick={signOut} variant="outline"><LogOut /> Sign out</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-10">
      <SEO title="Admin Dashboard — CashRide" description="Manage submissions and testimonials" />
      <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
        <h1 className="text-3xl">Admin dashboard</h1>
        <Button onClick={signOut} variant="outline" size="sm"><LogOut className="h-4 w-4" /> Sign out</Button>
      </div>

      <Tabs defaultValue="submissions">
        <TabsList>
          <TabsTrigger value="submissions">Submissions ({subs.length})</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials ({tests.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="submissions" className="mt-6">
          <div className="flex justify-end mb-4">
            <Button onClick={exportCsv} variant="outline" size="sm" disabled={subs.length === 0}>
              <Download className="h-4 w-4" /> Export CSV
            </Button>
          </div>
          {subs.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">No submissions yet.</p>
          ) : (
            <div className="grid gap-4">
              {subs.map((s) => (
                <article key={s.id} className="bg-card border border-border rounded-2xl p-5 shadow-card">
                  <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="font-semibold text-lg">{s.year} {s.make} {s.model}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(s.created_at).toLocaleString()} · {s.location}
                      </p>
                    </div>
                    <select
                      value={s.status}
                      onChange={(e) => updateStatus(s.id, e.target.value)}
                      className="text-xs border border-border rounded-md px-2 py-1 bg-background"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="quoted">Quoted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm mb-3">
                    <div><span className="text-muted-foreground">Name:</span> {s.full_name}</div>
                    <div><span className="text-muted-foreground">Phone:</span> <a href={`tel:${s.phone}`} className="text-primary">{s.phone}</a></div>
                    <div><span className="text-muted-foreground">Email:</span> <a href={`mailto:${s.email}`} className="text-primary">{s.email}</a></div>
                    <div><span className="text-muted-foreground">Condition:</span> {s.condition}</div>
                    {s.mileage != null && <div><span className="text-muted-foreground">Mileage:</span> {s.mileage.toLocaleString()} km</div>}
                    {s.asking_price != null && <div><span className="text-muted-foreground">Asking:</span> ${s.asking_price.toLocaleString()}</div>}
                  </div>
                  {s.notes && <p className="text-sm bg-secondary/50 rounded-lg p-3 mb-3">{s.notes}</p>}
                  {s.photo_urls.length > 0 && (
                    <div className="flex gap-2 flex-wrap mb-3">
                      {s.photo_urls.map((u, i) => (
                        <a key={i} href={u} target="_blank" rel="noreferrer" className="h-20 w-20 rounded-lg overflow-hidden border border-border">
                          <img src={u} alt={`photo ${i + 1}`} className="w-full h-full object-cover" />
                        </a>
                      ))}
                    </div>
                  )}
                  <div className="flex justify-end">
                    <Button onClick={() => deleteSubmission(s.id)} variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" /> Delete
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="testimonials" className="mt-6 space-y-6">
          <form onSubmit={addTestimonial} className="bg-card border border-border rounded-2xl p-5 shadow-card grid gap-3 sm:grid-cols-2">
            <div><Label>Author name</Label><Input name="author_name" required maxLength={100} /></div>
            <div><Label>Location</Label><Input name="location" maxLength={100} /></div>
            <div><Label>Rating (1-5)</Label><Input name="rating" type="number" min={1} max={5} defaultValue={5} /></div>
            <div className="sm:col-span-2"><Label>Quote</Label><Textarea name="quote" required maxLength={500} rows={2} /></div>
            <Button type="submit" variant="hero" className="sm:col-span-2"><Plus className="h-4 w-4" /> Add testimonial</Button>
          </form>

          <div className="grid gap-3">
            {tests.map((t) => (
              <article key={t.id} className="bg-card border border-border rounded-2xl p-5 shadow-card">
                <div className="flex justify-between items-start mb-2 gap-3">
                  <div>
                    <p className="font-semibold">{t.author_name} {t.location && <span className="text-sm text-muted-foreground">· {t.location}</span>}</p>
                    <div className="flex gap-0.5 text-accent mt-1">
                      {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`p-${t.id}`} className="text-xs">Published</Label>
                    <Switch id={`p-${t.id}`} checked={t.published} onCheckedChange={() => togglePublished(t.id, t.published)} />
                    <Button onClick={() => deleteTestimonial(t.id)} variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm">"{t.quote}"</p>
              </article>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};
export default Admin;
