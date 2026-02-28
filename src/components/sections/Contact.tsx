"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    objet: "",
    message: "",
    rgpd: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.rgpd) {
      alert("Veuillez accepter la politique de confidentialité.");
      return;
    }

    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ nom: "", prenom: "", email: "", objet: "", message: "", rgpd: false });
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-base-200"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
        Contact
      </h2>
      <p className="text-base-content/70 mb-14 text-center max-w-xl">
        N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
      </p>

      <div className="card bg-base-100 shadow-lg w-full max-w-2xl">
        <div className="card-body p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Prénom + Nom */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium text-base-content">Prénom *</span>
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={form.prenom}
                  onChange={handleChange}
                  placeholder="Jean"
                  className="input input-bordered border-base-content/30 bg-base-100 text-base-content placeholder:text-base-content/40 focus:input-primary w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium text-base-content">Nom *</span>
                </label>
                <input
                  type="text"
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  placeholder="Dupont"
                  className="input input-bordered border-base-content/30 bg-base-100 text-base-content placeholder:text-base-content/40 focus:input-primary w-full"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base-content">Adresse mail *</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jean.dupont@email.com"
                className="input input-bordered border-base-content/30 bg-base-100 text-base-content placeholder:text-base-content/40 focus:input-primary w-full"
                required
              />
            </div>

            {/* Objet */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base-content">Objet *</span>
              </label>
              <input
                type="text"
                name="objet"
                value={form.objet}
                onChange={handleChange}
                placeholder="Proposition de poste, collaboration..."
                className="input input-bordered border-base-content/30 bg-base-100 text-base-content placeholder:text-base-content/40 focus:input-primary w-full"
                required
              />
            </div>

            {/* Message */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base-content">Message *</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Votre message..."
                className="textarea textarea-bordered border-base-content/30 bg-base-100 text-base-content placeholder:text-base-content/40 focus:textarea-primary h-48 resize-none w-full"
                required
              />
            </div>

            {/* RGPD */}
            <div className="flex items-start gap-3 mt-2">
              <input
                type="checkbox"
                name="rgpd"
                id="rgpd"
                checked={form.rgpd}
                onChange={handleChange}
                className="checkbox checkbox-primary mt-1 shrink-0"
                required
              />
              <label htmlFor="rgpd" className="text-sm text-base-content/70 cursor-pointer">

                J'accepte que mes données personnelles (nom, prénom, adresse mail)
                soient utilisées uniquement dans le but de me recontacter en réponse
                à ce message. Aucune donnée ne sera transmise à des tiers. *
              </label>
            </div>

            {/* Messages de statut */}
            {status === "success" && (
              <div className="alert alert-success text-sm">
                Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-error text-sm">
                Une erreur est survenue. Veuillez réessayer ou me contacter directement par mail.
              </div>
            )}

            {/* Bouton */}
            <button
              type="submit"
              className="btn btn-primary mt-2 self-end px-10"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                "Envoyer"
              )}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}