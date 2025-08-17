
/* ===================== Navigation (76px) ===================== */
function Navigation() {
  return (
    <header className="h-[76px] w-full border-b border-slate-200 bg-white">
      {/* mobile/tablet: fluid; desktop: exact 887px */}
      <div className="mx-auto flex h-[76px] w-full max-w-[887px] items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <a href="#home" className="block" aria-label="Little Lemon home">
          <img
            src="/logo-little-lemon.png"
            alt="Little Lemon logo"
            className="h-[56px] w-auto lg:h-[76px] lg:w-[202px] object-contain"
          />
        </a>
        {/* Links: hidden on small; exact row on md+; exact width/height on lg preserved */}
        <nav
          className="hidden h-[24px] w-full max-w-[640px] items-center justify-end gap-[28px] md:flex"
          aria-label="Primary"
        >
          {["Home", "About", "Menu", "Reservations", "Order Online", "Login"].map((item) => (
            <a
              key={item}
              href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-black font-medium text-[16px] leading-[1] capitalize lg:text-[20px]"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ===================== Hero ===================== */
function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] px-4 py-8 lg:h-[449px] lg:px-0 lg:py-0">
      {/* background band: fluid on mobile, exact on lg */}
      <div className="h-[260px] w-full bg-[#495E57] lg:absolute lg:left-0 lg:top-0 lg:h-[406px] lg:w-[1440px]" />

      {/* content */}
      <div className="relative z-10 flex flex-col gap-6 lg:static">
        {/* text block */}
        <div className="max-w-[600px] lg:absolute lg:left-[290px] lg:top-[47px] lg:h-[331px] lg:w-[422px]">
          <h1 className="w-full max-w-[399px] font-['Roboto'] font-medium text-4xl sm:text-5xl lg:text-[56px] leading-[100%] text-[#F4CE14]">
            Little Lemon
            <span className="block font-['Markazi_Text'] font-normal text-2xl sm:text-3xl lg:text-[32px] leading-[100%] text-white">
              Chicago
            </span>
          </h1>
          <p className="mt-4 max-w-[600px] font-['Roboto'] text-base sm:text-lg lg:w-[422px] lg:text-[20px] leading-[141%] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <a
            href="#reservations"
            className="mt-6 inline-flex h-12 w-full max-w-[200px] items-center justify-center rounded-[16px] bg-[#F4CE14] font-['Roboto'] font-medium text-base text-black lg:h-[60px] lg:w-[200px]"
          >
            Reserve a Table
          </a>
        </div>

        {/* hero image: responsive on mobile; exact px at lg */}
        <img
          src="/hero-food.jpg"
          alt="Signature restaurant dish"
          className="relative -mt-6 h-64 w-full max-w-[520px] self-end rounded-[16px] object-cover sm:h-72 md:h-80 lg:absolute lg:left-[775px] lg:top-[23px] lg:h-[426px] lg:w-[375px]"
        />
      </div>
    </section>
  );
}

/* ===================== Highlights ===================== */
function Highlights() {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] px-4 lg:px-0">
      {/* inner frame: fluid on mobile; exact 858×555 at left 292 on lg */}
      <div className="relative w-full lg:left-[292px] lg:w-[858px] lg:mb-[80px]">
        {/* title + button row */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-['Karla'] text-2xl sm:text-3xl lg:w-[399px] lg:text-[40px] font-medium leading-[1] text-black">
            This weeks Specials
          </h2>
          <a
            href="#menu"
            className="inline-flex h-11 w-full max-w-[200px] items-center justify-center rounded-[16px] bg-[#F4CE14] font-['Roboto'] text-base sm:text-[18px] font-normal leading-[1] text-black lg:h-[60px] lg:w-[200px]"
          >
            Online Menu
          </a>
        </div>

        {/* cards: responsive grid; exact spacing/widths on lg */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[116px] lg:grid-cols-3 lg:gap-[31.999px]">
          {/* Card 1 — Greek salad */}
          <article className="relative w-full lg:h-[439px] lg:w-[264.667px]">
            <div className="h-48 w-full overflow-hidden rounded-t-[16px] border border-black bg-[#D9D9D9] sm:h-56 lg:h-[185.258px]">
              <img src="/greek-salad.jpg" alt="Greek salad" className="h-full w-full object-cover" />
            </div>
            <div className="w-full bg-[#EDEFEE] p-5 lg:h-[253.742px] lg:p-0">
              <div className="flex items-start justify-between lg:px-[25.01px] lg:pt-[19.312px]">
                <h4 className="font-['Markazi_Text'] text-xl lg:text-[24px] font-medium leading-[0.9] text-black">Greek salad</h4>
                <span className="font-['Karla'] text-[15px] lg:text-[16px] font-bold leading-[1] text-[#EE9972]">$12.99</span>
              </div>
              <p className="mt-3 text-[15px] lg:mt-0 lg:w-[216.736px] lg:px-[25.01px] lg:pt-[24px] font-['Karla'] font-normal leading-[1] text-[#495E57]">
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with
                crunchy garlic and rosemary croutons.
              </p>
              <div className="mt-4 flex items-center gap-2 lg:mt-0 lg:px-[25.01px] lg:pt-[18px]">
                <a href="#order" className="font-['Karla'] text-[15px] lg:text-[16px] font-bold leading-[1] text-[#333333]">
                  Order a delivery
                </a>
                <svg width="16.672" height="10.536" viewBox="0 0 16.672 10.536" fill="currentColor" className="text-black">
                  <path d="M10.5 0l6.172 5.268L10.5 10.536V6.5H0v-2h10.5V0z" />
                </svg>
              </div>
            </div>
          </article>

          {/* Card 2 — Bruchetta */}
          <article className="relative w-full lg:h-[439px] lg:w-[264.667px]">
            <div className="h-48 w-full overflow-hidden rounded-t-[16px] border border-black bg-[#C4C4C4] sm:h-56 lg:h-[185.258px]">
              <img src="/bruschetta.jpg" alt="Bruschetta" className="h-full w-full object-cover" />
            </div>
            <div className="w-full bg-[#EDEFEE] p-5 lg:h-[253.742px] lg:p-0">
              <div className="flex items-start justify-between lg:px-[25.01px] lg:pt-[19.312px]">
                <h4 className="font-['Markazi_Text'] text-xl lg:text-[24px] font-medium leading-[0.9] text-black">Bruchetta</h4>
                <span className="font-['Karla'] text-[15px] lg:text-[16px] font-bold leading-[1] text-[#EE9972]">$ 5.99</span>
              </div>
              <p className="mt-3 text-[15px] lg:mt-0 lg:w-[216.736px] lg:px-[25.01px] lg:pt-[24px] font-['Karla'] font-normal leading-[1] text-[#495E57]">
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive
                oil.
              </p>
              <div className="mt-4 flex items-center gap-2 lg:mt-0 lg:px-[25.01px] lg:pt-[18px]">
                <a href="#order" className="font-['Karla'] text-[15px] lg:text-[16px] font-bold leading-[1] text-[#333333]">
                  Order a delivery
                </a>
                <svg width="16.672" height="10.536" viewBox="0 0 16.672 10.536" fill="currentColor" className="text-black">
                  <path d="M10.5 0l6.172 5.268L10.5 10.536V6.5H0v-2h10.5V0z" />
                </svg>
              </div>
            </div>
          </article>

          {/* Card 3 — Lemon Dessert */}
          <article className="relative w-full lg:h-[439px] lg:w-[264.667px]">
            <div className="h-48 w-full overflow-hidden rounded-t-[16px] border border-black bg-[#D9D9D9] sm:h-56 lg:h-[185.258px]">
              <img src="/lemon-dessert.jpg" alt="Lemon dessert" className="h-full w-full object-cover" />
            </div>
            <div className="w-full bg-[#EDEFEE] p-5 lg:h-[253.742px] lg:p-0">
              <div className="flex items-start justify-between lg:px-[25.01px] lg:pt-[19.312px]">
                <h4 className="font-['Markazi_Text'] text-xl lg:text-[24px] font-medium leading-[0.9] text-black">Lemon Dessert</h4>
                <span className="font-['Karla'] text-[15px] lg:text-[16px] font-bold leading-[1] text-[#EE9972]">$5.00</span>
              </div>
              <p className="mt-3 text-[15px] lg:mt-0 lg:w-[216.736px] lg:px-[25.01px] lg:pt-[24px] font-['Karla'] font-normal leading-[1] text-[#495E57]">
                This comes straight from grandma’s recipe book; every last ingredient has been sourced and is as authentic as
                can be imagined.
              </p>
              <div className="mt-4 flex items-center gap-2 lg:mt-0 lg:px-[25.01px] lg:pt-[18px]">
                <a href="#order" className="font-['Karla'] text-[15px] lg:text-[16px] font-bold leading-[1] text-[#333333]">
                  Order a delivery
                </a>
                <svg width="16.672" height="10.536" viewBox="0 0 16.672 10.536" fill="currentColor" className="text-black">
                  <path d="M10.5 0l6.172 5.268L10.5 10.536V6.5H0v-2h10.5V0z" />
                </svg>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ===================== Testimonials ===================== */
/* ===================== Testimonials ===================== */
function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-[1440px] bg-[#D9D9D9] py-10 lg:relative lg:h-[590px] lg:py-0">
      {/* mobile/tablet header */}
      <h2 className="mb-6 px-4 font-['Markazi_Text'] text-3xl font-medium text-[#333333] lg:hidden">
        Testimonials
      </h2>

      {/* mobile/tablet grid */}
      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:hidden">
        {[
          {
            name: "Sarah",
            rating: "★★★★★",
            review: "Loved the Greek salad and quick delivery. Cozy vibe when dining in.",
            avatar: "avatar-1.jpg",
          },
          {
            name: "Daniel",
            rating: "★★★★☆",
            review: "Fresh bruschetta and friendly staff. Good portions for the price.",
            avatar: "avatar-1.jpg",
          },
          {
            name: "Amira",
            rating: "★★★★★",
            review: "The lemon dessert is perfect—light and balanced sweetness.",
            avatar: "avatar-1.jpg",
          },
          {
            name: "Jon",
            rating: "★★★★★",
            review: "Great takeaway packaging and amazing feta. Always consistent.",
            avatar: "avatar-1.jpg",
          },
        ].map((item, i) => (
          <div key={i} className="h-[175px] w-full bg-white p-4">
            {/* Rating */}
            <div className="font-['Karla'] text-[14px] font-bold text-black">{item.rating}</div>

            {/* Avatar + Name */}
            <div className="mt-2 flex items-center gap-3">
              <div className="h-[46px] w-[47px] border border-black bg-[#D9D9D9] overflow-hidden">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="font-['Karla'] text-[14px] font-bold text-black">{item.name}</div>
            </div>

            {/* Review */}
            <div className="mt-3 w-[90%] font-['Karla'] text-[14px] text-black">{item.review}</div>
          </div>
        ))}
      </div>

      {/* desktop exact layout */}
      <div className="relative hidden lg:block lg:mx-auto lg:h-[590px] lg:w-[1440px]">
        <h2 className="absolute left-[646px] top-[122px] h-[43px] w-[167px] font-['Markazi_Text'] text-[36px] font-medium leading-[1] text-[#333333]">
          Testimonials
        </h2>

        {[
          {
            left: 290,
            top: 234,
            name: "Sarah",
            rating: "★★★★★",
            review: "Loved the Greek salad and quick delivery. Cozy vibe when dining in.",
            avatar: "avatar-1.jpg",
          },
          {
            left: 510,
            top: 234,
            name: "Daniel",
            rating: "★★★★☆",
            review: "Fresh bruschetta and friendly staff. Good portions for the price.",
            avatar: "avatar-1.jpg",
          },
          {
            left: 730,
            top: 234,
            name: "Amira",
            rating: "★★★★★",
            review: "The lemon dessert is perfect—light and balanced sweetness.",
            avatar: "avatar-1.jpg",
          },
          {
            left: 950,
            top: 234,
            name: "Jon",
            rating: "★★★★★",
            review: "Great takeaway packaging and amazing feta. Always consistent.",
            avatar: "avatar-1.jpg",
          },
        ].map((item, idx) => (
          <div key={idx} className="absolute h-[175px] w-[200px]" style={{ left: item.left, top: item.top }}>
            <div className="relative h-full w-full">
              {/* Card background */}
              <div className="absolute inset-0 bg-white" />

              {/* Rating */}
              <div className="absolute left-[24px] top-[29px] h-[16px] font-['Karla'] text-[14px] font-bold leading-[1] text-black">
                {item.rating}
              </div>

              {/* Avatar inside gray box */}
              <div className="absolute left-[24px] top-[58px] h-[46px] w-[47px] border border-black bg-[#D9D9D9] overflow-hidden">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name */}
              <div className="absolute left-[83px] top-[68px] h-[16px] font-['Karla'] text-[14px] font-bold leading-[1] text-black">
                {item.name}
              </div>

              {/* Review */}
              <div className="absolute left-[24px] top-[121px] h-[46px] w-[158.209px] font-['Karla'] text-[14px] leading-[1] text-black">
                {item.review}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}




/* ===================== About (responsive + exact on lg) ===================== */
function About() {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] px-4 py-12 lg:mt-[87px] lg:h-[468px] lg:px-0 lg:py-0">
      {/* inner frame */}
      <div className="relative mx-auto w-full lg:absolute lg:left-[292px] lg:top-0 lg:h-[468px] lg:w-[869px]">
        {/* text column */}
        <div className="max-w-[600px] lg:absolute lg:left-0 lg:top-0 lg:h-[468px] lg:w-[373px]">
          <h3 className="font-['Markazi_Text'] text-4xl sm:text-5xl lg:h-[77px] lg:w-[373px] lg:text-[64px] font-medium leading-[1] text-black">
            Little Lemon
          </h3>
          <div className="mt-1 font-['Markazi_Text'] text-2xl sm:text-3xl lg:absolute lg:left-0 lg:top-[58px] lg:h-[48px] lg:w-[168px] lg:text-[40px] leading-[1] text-[#333333]">
            Chicago
          </div>
          <p className="mt-4 max-w-[600px] text-justify font-['Karla'] text-[18px] sm:text-[19px] lg:absolute lg:left-0 lg:top-[146px] lg:h-[322px] lg:w-[370px] lg:text-[20px] font-bold leading-[1] text-black">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.
            <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </p>
        </div>

        {/* images: stack on mobile; exact positions on lg */}
        <div className="mt-8 flex gap-4 lg:mt-0">
          {/* First image over gray box */}
          <div className="relative h-[220px] w-[45%] max-w-[320px] rounded-[12px] bg-[#D9D9D9] lg:absolute lg:left-[597px] lg:top-[10px] lg:h-[338px] lg:w-[272px] lg:rounded-none overflow-hidden">
            <img
              src="/about-1.jpg"
              alt="About Image 1"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Second image over gray box */}
          <div className="relative h-[220px] w-[45%] max-w-[320px] rounded-[12px] bg-[#D9D9D9] lg:absolute lg:left-[422px] lg:top-[117px] lg:h-[338px] lg:w-[276px] lg:rounded-none overflow-hidden">
            <img
              src="/about-2.jpg"
              alt="About Image 2"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== Bottom Navigation / Footer ===================== */
function BottomNavigation() {
  return (
    <footer className="mx-auto w-full max-w-[1440px] border border-transparent bg-[#D9D9D9] px-4 py-10 lg:relative lg:mt-[23px] lg:h-[417px] lg:px-0 lg:py-0">
      {/* mobile/tablet: 3 columns stacked */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:hidden">
        <div>
          <div className="font-['Karla'] text-[20px] font-extrabold text-[#495E57]">Doormat Navigation</div>
          <div className="mt-3 font-['Karla'] text-[18px] font-medium leading-[130%] text-[#333333]">
            Home<br />
            About<br />
            menu<br />
            Reservations<br />
            Order Online<br />
            Login
          </div>
        </div>
        <div>
          <div className="font-['Karla'] text-[20px] font-extrabold text-[#495E57]">Contact</div>
          <div className="mt-3 font-['Karla'] text-[18px] font-medium leading-[130%] text-[#333333]">
            Adress<br />
            phone number<br />
            email
          </div>
        </div>
        <div>
          <div className="font-['Karla'] text-[20px] font-extrabold text-[#495E57]">Social Media Links</div>
          <div className="mt-3 font-['Karla'] text-[18px] font-medium leading-[130%] text-[#333333]">
            Adress<br />
            phone number<br />
            email
          </div>
        </div>
      </div>

      {/* desktop exact layout */}
      <div className="relative hidden lg:block lg:h-[417px] lg:w-[1440px]">
        {/* Group 20: transparent border box */}
        <div className="absolute left-[277.45px] top-[60.43px] h-[290.921px] w-[221.715px] border border-transparent" />

        {/* Rectangle 62: gray box */}
        <div className="absolute left-[307px] top-[67px] h-[279px] w-[162px] border border-black bg-[#AFAFAF]" />

        {/* Image on top of gray box */}
        <div className="absolute left-[307px] top-[67px] h-[279px] w-[162px] overflow-hidden">
          <img
            src="/footer-image.jpg"
            alt="Footer visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* columns exactly placed */}
        <div className="absolute left-[538.01px] top-[95px] h-[46px] w-[128.431px] font-['Karla'] text-[20px] font-extrabold leading-[1] text-[#495E57]">
          Doormat Navigation
        </div>
        <div className="absolute left-[538.01px] top-[142px] h-[167px] w-[210.857px] font-['Karla'] text-[20px] font-medium leading-[130%] text-[#333333]">
          Home<br />
          About<br />
          menu<br />
          Reservations<br />
          Order Online<br />
          Login
        </div>

        <div className="absolute left-[769.95px] top-[95px] h-[23px] w-[128.431px] font-['Karla'] text-[20px] font-extrabold leading-[1] text-[#495E57]">
          Contact
        </div>
        <div className="absolute left-[769.95px] top-[142px] h-[167px] w-[210.857px] font-['Karla'] text-[20px] font-medium leading-[130%] text-[#333333]">
          Adress<br />
          phone number<br />
          email
        </div>

        <div className="absolute left-[1002px] top-[95px] h-[23px] w-[211px] font-['Karla'] text-[20px] font-extrabold leading-[1] text-[#495E57]">
          Social Media Links
        </div>
        <div className="absolute left-[1002px] top-[142px] h-[167px] w-[211px] font-['Karla'] text-[20px] font-medium leading-[130%] text-[#333333]">
          Adress<br />
          phone number<br />
          email
        </div>
      </div>
    </footer>
  );
}



/* ===================== Page Composition ===================== */
export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      <div className="mx-auto w-full max-w-[1440px]">
        <Navigation />
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
        <BottomNavigation />
      </div>
    </div>
  );
}
