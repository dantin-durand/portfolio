export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-5">
      <p className="text-center text-white text-sm">
        Copyright © {new Date().getFullYear()} Dantin DURAND
        <a
          href="https://old.dantindurand.fr"
          className="opacity-50 absolute right-10 hidden md:inline-block"
          onClick={(e) => {
            if (window.confirm("Êtes-vous sûr ? 🤔")) {
              e.preventDefault();
              window.location.href = "https://old.dantindurand.fr";
            } else {
              e.preventDefault();
            }
          }}
        >
          ...et avant c&apos;était comment ?
        </a>
      </p>
    </footer>
  );
}
