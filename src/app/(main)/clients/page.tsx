import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Some of the New Zealand businesses Super Media has worked with across strategy, media planning, auditing and advisory.",
  alternates: { canonical: "/clients" },
};

type Client = {
  name: string;
  logo?: string;
  url?: string;
  darkBg?: boolean;
};

const clients: Client[] = [
  {
    name: "Tilda Rice NZ",
    url: "https://www.tilda.com/en-nz/",
    darkBg: true,
  },
  {
    name: "Trident Noodles & Sauces",
    logo: "https://www.tridentfoods.com.au/wp-content/uploads/2021/11/logo.svg",
    url: "https://www.tridentfoods.com.au/",
  },
  {
    name: "Hutchinsons Foods",
    logo: "https://www.hutchinsons.co.nz/wp-content/uploads/2017/09/hutchinsons-logo-clear-cut-red.png",
    url: "https://www.hutchinsons.co.nz/",
  },
  {
    name: "Robur Hire",
    logo: "https://acerental.co.nz/wp-content/uploads/2024/04/RoburHire_LOGO_NOBACKGROUND-01-1024x218.png",
    url: "https://robur.co.nz/",
    darkBg: true,
  },
  {
    name: "Ace Rentals",
    logo: "https://acerental.co.nz/wp-content/uploads/2017/02/aceLogo.png",
    url: "https://acerental.co.nz/",
  },
  {
    name: "Durafence",
    logo: "https://www.durafence.co.nz/wp-content/uploads/2025/08/dura-fence.png",
    url: "https://www.durafence.co.nz/",
  },
  {
    name: "Martin Guitars",
    logo: "https://www.martinguitar.com/on/demandware.static/Sites-MartinGuitar_US-Site/-/default/v1781696826173/images/logo.svg",
    url: "https://www.martinguitar.com/",
  },
  {
    name: "Lewis Eady Music",
    logo: "https://images.squarespace-cdn.com/content/v1/56285054e4b0337fcedd7d08/525e5f81-34f7-434d-9496-b94d762d4e2c/Lewis_Eady_Logo_White_Footer.png",
    url: "https://www.lewiseady.co.nz/",
    darkBg: true,
  },
  {
    name: "Steinway & Sons",
    logo: "https://www.steinway.com/.resources/steinway-main-webapp/resources/assets/svg/ss-logo2.svg",
    url: "https://www.steinway.com/",
  },
  {
    name: "Metrics Media",
    logo: "https://metricsmedia.co.nz/wp-content/uploads/2026/02/metrics-media.svg",
    url: "https://metricsmedia.co.nz/",
  },
  {
    name: "Frame Workshop & Gallery",
    logo: "https://frameworkshop.co.nz/cdn/shop/files/wesite_logo_830x.png?v=1774236536",
    url: "https://frameworkshop.co.nz/",
  },
  {
    name: "Cornerstone Media",
    url: "https://www.cornerstonemedia.com.au/",
    darkBg: true,
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="section-container relative py-20 lg:py-28">
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl mb-4">
            Some of the people we&apos;ve worked with
          </h1>
          <p className="text-white/70 text-xl max-w-xl" style={{ lineHeight: 1.65 }}>
            Across strategy, planning, media auditing and advisory. New Zealand businesses of all sizes.
          </p>
        </div>
      </section>

      {/* ─── Logo Grid ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client) => {
              const Wrapper = client.url ? "a" : "div";
              const wrapperProps = client.url
                ? { href: client.url, target: "_blank", rel: "noopener noreferrer" }
                : {};

              return (
                <Wrapper
                  key={client.name}
                  {...(wrapperProps as Record<string, string>)}
                  className={[
                    "group flex items-center justify-center rounded border p-6 min-h-[100px] transition-all",
                    client.darkBg
                      ? "bg-navy border-navy"
                      : "bg-grey-light border-grey-mid hover:border-navy hover:shadow-sm",
                    client.url ? "cursor-pointer" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {client.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-12 max-w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className={[
                        "text-sm font-semibold text-center leading-tight",
                        client.darkBg ? "text-white/80" : "text-navy",
                      ].join(" ")}
                    >
                      {client.name}
                    </span>
                  )}
                </Wrapper>
              );
            })}
          </div>

          <p className="text-grey-dark text-sm mt-10 text-center">
            Client relationships are confidential. Logos shown with permission.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-grey-light py-16">
        <div className="section-container text-center">
          <p className="text-navy text-xl font-medium mb-6 max-w-xl mx-auto">
            Independent media advice for businesses of every size.
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to Ron →
          </Link>
        </div>
      </section>
    </>
  );
}
