export default function index() {
  return (
    <>
      <main className="my-12 space-y-12 ">
        <section className="p-4 mx-auto">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="type-body-medium">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-blue-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </span>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-start md:text-center">
            <h1 className="type-display-medium">
              Display Large: A Visual Type Scale
            </h1>
            <p className="mt-6 font-normal type-title-medium">
              Our mission is to support local communities by offering them a
              platform to donate and purchase used clothing in a safe and
              convenient manner. Our team works hard to ensure that all of our
              products are in excellent condition and are up to current trends
            </p>
            <div className="flex flex-col justify-start gap-4 mt-8 md:flex-row md:justify-center">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Button text
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Display Action
              </button>
            </div>
          </div>
          <div className="w-full h-[40rem] bg-gray-100 max-w-5xl mx-auto mt-8"></div>
        </section>
        {/* END: Display */}
        <p className="type-headline-large">headline Large: A Visual Type Scale</p>
        <p className="type-headline-medium">
          headline Medium: A Visual Type Scale
        </p>
        <p className="type-headline-small">headline Small: A Visual Type Scale</p>
        {/* END: headline */}
        <p className="type-title-large">title Large: A Visual Type Scale</p>
        <p className="type-title-medium">title Medium: A Visual Type Scale</p>
        <p className="type-title-small">title Small: A Visual Type Scale</p>
        {/* END: title */}
        <p className="type-label-large">label Large: A Visual Type Scale</p>
        <p className="type-label-medium">label Medium: A Visual Type Scale</p>
        <p className="type-label-small">label Small: A Visual Type Scale</p>
        {/* END: label */}
        <p className="type-body-large">body Large: A Visual Type Scale</p>
        <p className="type-body-medium">body Medium: A Visual Type Scale</p>
        <p className="type-body-small">body Small: A Visual Type Scale</p>
        {/* END: body */}
      </main>
    </>
  );
}
