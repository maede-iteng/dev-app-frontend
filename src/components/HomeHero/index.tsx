import Header from "../Header/index";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HomeHero() {
  return (
    <div>
      <div className="shape-1"></div>
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="py-10 sm:py-10 lg:py-30 columns-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
              برای یادگیری زبان برنامه نویسی جدید
            </h1>
            <p className="mt-6 text-lg leading-8 ">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 "
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
