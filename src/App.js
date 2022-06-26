import "./App.css";
import cart from "./assets/icon-cart.svg";
import desktopPerfume from "./assets/image-product-desktop.jpg";

function App() {
  return (
    <div className="bg-cream py-8 h-screen flex flex-col">
      <article className="container mx-auto rounded-lg shadow-md bg-white w-11/12 h-auto flex-1 overflow-hidden flex flex-col space-y-5">
        <div className="basis-5/12 h-1/3 flex-auto">
          <img
            src={desktopPerfume}
            alt="A perfume bottle."
            className="object-cover w-full h-full"
          />
        </div>
        <div className="basis-7/12 space-y-9 px-5">
          <section className="space-y-3">
            <header className="">
              <p className="font-monsterrat font-bold text-dark-gray-blue tracking-[.30em] text-md">
                PERFUME
              </p>
            </header>
            <h1 className="font-fraunces text-4xl">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="font-monsterrat text-md text-dark-gray-blue leading-relaxed">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </section>
          <div className="space-y-6">
            <div className="flex flex-row gap-x-5">
              <h1 className="font-fraunces text-4xl text-dark-cyan">$149.99</h1>
              <p className="align-middle line-through font-monsterrat text-md text-dark-gray-blue mt-2">
                $169.99
              </p>
            </div>
            <button className="bg-dark-cyan flex flex-row w-full rounded-lg justify-center gap-x-2 py-5">
              <img src={cart} alt="Shopping cart" />
              <span className="text-sm font-monetrrat text-white font-bold">
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
