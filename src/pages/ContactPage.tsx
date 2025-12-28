import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-gray-950">
      {/* Content */}
      <div className="container h-full">
        <div className="h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mt-12 px-4">
            <div className="w-full max-w-6xl">
              {/* Header */}
              <div className="mb-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Contact Us
                </h2>
                <p className="mt-2 text-gray-400">
                  Have questions? Send us a message and we’ll reply shortly.
                </p>
              </div>

              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 shadow-2xl backdrop-blur">
                
                <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Form */}
                  <div className="p-6 sm:p-10">
                    <h3 className="text-lg font-semibold text-white">
                      Send a message
                    </h3>

                    <form className="mt-6 grid grid-cols-1 gap-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full rounded-xl bg-gray-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/30 outline-none"
                        />
                        <input
                          type="email"
                          placeholder="you@email.com"
                          className="w-full rounded-xl bg-gray-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/30 outline-none"
                        />
                      </div>

                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full rounded-xl bg-gray-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/30 outline-none"
                      />

                      <textarea
                        rows={4}
                        placeholder="Write your message..."
                        className="w-full resize-none rounded-xl bg-gray-800/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/30 outline-none"
                      />

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
                      >
                        <Send size={18} />
                        Send Message
                      </button>
                    </form>
                  </div>

                  {/* Info */}
                  <div className="border-t border-white/10 lg:border-t-0 lg:border-l p-6 sm:p-10">
                    <div className="space-y-4">
                      <InfoItem
                        icon={<Mail size={18} />}
                        label="Email"
                        value="support@yourdomain.com"
                      />
                      <InfoItem
                        icon={<Phone size={18} />}
                        label="Phone"
                        value="+86 000 0000 0000"
                      />
                      <InfoItem
                        icon={<MapPin size={18} />}
                        label="Location"
                        value="Nanjing, China"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom breathing space (same idea as StatsCard area) */}
          <div className="pb-10" />
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-gray-800/40 p-4">
    <div className="rounded-lg bg-white/5 p-2 text-indigo-300">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm text-white">{value}</p>
    </div>
  </div>
);

export default ContactSection;
