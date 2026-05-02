export const SEARCH_QUERY = "Ismail Dogukan Çokluk";

export type Phase =
  | "typing"
  | "searching"
  | "results"
  | "hovering"
  | "clicking"
  | "loading"
  | "transitioning"
  | "landed";

export interface SearchResult {
  breadcrumb: string;
  title: string;
  snippet: string;
  real: boolean;
}

export const fakeResults: SearchResult[] = [
  {
    breadcrumb: "ismaildcokluk.com",
    title: "Ismail Dogukan Çokluk — Software Developer",
    snippet:
      "Java · Spring Boot · React · Istanbul. Currently @ Amadeus Loyalty Management. Systems nerd, fast learner.",
    real: true,
  },
  {
    breadcrumb: "linkedin.com › in › ismailcokluk",
    title: "Ismail Cokluk – Associate Software Engineer at Amadeus | LinkedIn",
    snippet:
      "3+ years in backend microservices, Kafka, Redis, and Java 21. Previously at Kron.",
    real: false,
  },
  {
    breadcrumb: "github.com › jilet1308",
    title: "jilet1308 (Ismail Doğukan Çokluk) · GitHub",
    snippet:
      "nman · brickz · 12 repositories. CLI tools, backend platforms, open source.",
    real: false,
  },
];
